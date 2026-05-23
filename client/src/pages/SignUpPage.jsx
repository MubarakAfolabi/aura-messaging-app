import { Link } from "react-router";

function SignUpPage() {
  return (
    <main className="p-2 flex flex-col gap-10 h-screen">
      <header>
        <h1 className="font-anton text-4xl md:text-5xl text-center">Aura</h1>
      </header>

      <section className="flex flex-col gap-4 p-2">
        <p className="font-anton text-lg text-center">Create An Account</p>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-anton">USERNAME</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton">EMAIL</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none"
              type="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton">PASSWORD</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none"
              type="password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-anton">CONFIRM PASSWORD</label>
            <input
              className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none"
              type="password"
            />
          </div>

          <button
            className="bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-lg py-2 font-semibold rounded-sm cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center">
          already have an account? <Link className="underline">Log in</Link>
        </p>
      </section>
    </main>
  );
}

export default SignUpPage;
