import { createContext, ReactNode, useState } from "react";
import {
  createUserWithEmailAndPassword,
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
  onCreateUser: (user: CreateUserData) => Promise<void>;
  onLogin: (user: LoginData) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  const onCreateUser = async (createUserData: CreateUserData) => {
    const created = await createUserWithEmailAndPassword(
      auth,
      createUserData.email,
      createUserData.password,
    );

    updateProfile(created.user, {
      displayName: user.userName,
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
    <AuthContext.Provider value={{ user, onCreateUser, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
