"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { authClient } from "@/lib/auth-client";

type Session = typeof authClient.$Infer.Session;

interface AuthContextType {
  session: Session | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, isPending: isLoading } = authClient.useSession();

  return (
    <AuthContext.Provider value={{ session: session ?? null, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
