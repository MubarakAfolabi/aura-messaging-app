import { useEffect } from "react";
import { Link, useNavigate } from "react-router";

function Onboarding() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <main className="p-2 flex flex-col h-screen">
      <header>
        <h1 className="font-anton text-4xl md:text-5xl text-center">Aura</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col text-center gap-1">
          <p className="font-anton text-5xl md:text-8xl">LESS NOISE.</p>
          <p className="font-anton text-4xl md:text-6xl">MORE CONVERSATION.</p>
          <p className="font-semibold text-secondary md:text-lg">
            Aura keeps messaging clean, fast, and distraction-free.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            to="/signup"
            className="w-30 bg-primary-button text-primary-button-text text-lg md:text-xl font-semibold py-2 px-4 rounded-sm text-center cursor-pointer"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="w-30 bg-primary-button text-primary-button-text text-lg md:text-xl font-semibold py-2 px-4 rounded-sm text-center cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Onboarding;
