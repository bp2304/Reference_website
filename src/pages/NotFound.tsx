import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 font-display text-6xl text-secondary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Page not found</p>
        <a href="/" className="text-primary hover:opacity-80 transition-opacity text-sm tracking-wide">
          ← Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;