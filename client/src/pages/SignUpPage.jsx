import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
const API_URL = import.meta.env.VITE_API_URL;

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResponseData(data);

        if (data.success) {
          navigate("/login");
        }
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <main className="p-2 flex flex-col gap-10 md:gap-0 h-screen">
      <header>
        <h1 className="font-anton text-4xl md:text-5xl text-center">Aura</h1>
      </header>

      <section className="flex-1 flex flex-col md:justify-center items-center gap-4 p-2">
        <p className="font-anton text-lg md:text-2xl">Create An Account</p>

        {!responseData?.success && (
          <p className="text-red-500">{responseData?.message}</p>
        )}

        <form
          className="flex flex-col gap-4 w-full md:max-w-xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="font-anton md:text-lg">USERNAME</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton md:text-lg">EMAIL</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton md:text-lg">PASSWORD</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton md:text-lg">CONFIRM PASSWORD</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-lg md:text-xl py-2 font-semibold rounded-sm cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center">
          already have an account?{" "}
          <Link to="/login" className="underline">
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
}

export default SignUpPage;
