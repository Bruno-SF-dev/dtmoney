import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string | null;
}

interface CreateUserData {
  email: string;
  password: string;
  name: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
  onCreateUser: (user: CreateUserData) => Promise<void>;
  onSignIn: (user: SignInData) => Promise<void>;
  onSignOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      setIsLoading(true);

      const token = localStorage.getItem("auth-jwt-token");

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
          token,
        )}`;

        // rota para buscar as informações do usuário
        const {
          data: { userData },
        } = await api.post("user-data");

        setUser({
          id: userData.id,
          name: userData.name,
        });

        setIsAuthenticated(true);
      }

      setIsLoading(false);
    }

    getUser();
  }, []);

  const onCreateUser = async ({ name, email, password }: CreateUserData) => {
    await api.post("create-user", {
      name,
      email,
      password,
    });
  };

  const onSignIn = async ({ email, password }: SignInData) => {
    const res = await api.post("auth", {
      email,
      password,
    });

    const { token, user } = res.data;

    localStorage.setItem("auth-jwt-token", JSON.stringify(token));

    setUser({
      id: user._id,
      name: user.name,
    });
    setIsAuthenticated(true);
  };

  const onSignOut = async () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth-jwt-token");
    api.defaults.headers.common["Authorization"] = "";
    setUser({} as User);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        onCreateUser,
        onSignIn,
        onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
