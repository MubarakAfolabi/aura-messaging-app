import { Link } from "react-router";

function SignUpPage() {
  return (
    <main className="p-2 flex flex-col gap-10 md:gap-0 h-screen">
      <header>
        <h1 className="font-anton text-4xl md:text-5xl text-center">Aura</h1>
      </header>

      <section className="flex-1 flex flex-col md:justify-center items-center gap-4 p-2">
        <p className="font-anton text-lg md:text-2xl">Create An Account</p>

        <form className="flex flex-col gap-4 w-full md:max-w-xl">
          <div className="flex flex-col gap-2">
            <label className="font-anton md:text-lg">USERNAME</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
              type="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton md:text-lg">EMAIL</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
              type="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton md:text-lg">PASSWORD</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
              type="password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton md:text-lg">CONFIRM PASSWORD</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
              type="password"
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
