function Onboarding() {
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
          <button className="w-30 bg-primary-button text-primary-button-text text-lg md:text-xl font-semibold py-2 px-4 rounded-sm cursor-pointer">
            Sign Up
          </button>
          <button className="w-30 bg-primary-button text-primary-button-text text-lg md:text-xl font-semibold py-2 px-4 rounded-sm cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </main>
  );
}

export default Onboarding;
