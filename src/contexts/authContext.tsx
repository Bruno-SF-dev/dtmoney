import { createContext, ReactNode, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../services/firebase";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  userName: string | null;
}

interface CreateUserData {
  email: string;
  password: string;
  userName: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
  onCreateUser: (user: CreateUserData) => Promise<void>;
  onLogin: (user: LoginData) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userState) => {
      if (userState) {
        setIsAuthenticated(true);

        setUser({
          id: userState.uid,
          userName: userState.displayName,
        });

        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const onCreateUser = async (createUserData: CreateUserData) => {
    const created = await createUserWithEmailAndPassword(
      auth,
      createUserData.email,
      createUserData.password,
    );

    updateProfile(created.user, {
      displayName: createUserData.userName,
    });

    console.log("User created", created.user);
  };

  const onLogin = async (loginUserData: LoginData) => {
    const logged = await signInWithEmailAndPassword(
      auth,
      loginUserData.email,
      loginUserData.password,
    );

    setUser({
      id: logged.user.uid,
      userName: logged.user.displayName,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, onCreateUser, onLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
