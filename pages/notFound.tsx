import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <main className="relative z-10 text-center px-6">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-400/30 mb-6 cyber-border">
          <AlertTriangle className="w-5 h-5 text-cyan-400 animate-pulse" />
          <span className="text-cyan-400 font-semibold text-sm tracking-wider space-grotesk">
            PAGE NOT FOUND
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold orbitron mb-4 gradient-text glow-text">
          404
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto exo-2">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cyber-border space-grotesk"
        >
          Return to Home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
