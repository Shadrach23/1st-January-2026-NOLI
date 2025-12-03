import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

export interface RequireAuthProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const RequireAuth = ({ children, fallback }: RequireAuthProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return fallback ?? (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Access Restricted</h2>
          <p className="text-muted-foreground">Please sign in to continue.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
