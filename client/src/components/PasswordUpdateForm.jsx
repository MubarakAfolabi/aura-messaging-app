function PasswordUpdateForm({ setModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-anton md:text-lg">ENTER OLD PASSWORD</label>
        <input
          className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
          type="password"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-anton md:text-lg">ENTER NEW PASSWORD</label>
        <input
          className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
          type="password"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-anton md:text-lg">CONFIRM NEW PASSWORD</label>
        <input
          className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
          type="password"
        />
      </div>

      <div className="flex gap-4 justify-between">
        <button
          className="flex-1 bg-white/8 backdrop-blur-xl text-lg md:text-xl py-2 font-semibold rounded-sm cursor-pointer"
          type="button"
          onClick={() => setModal(false)}
        >
          Cancel
        </button>
        <button
          className="flex-1 bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-lg md:text-xl py-2 font-semibold rounded-sm cursor-pointer"
          type="submit"
        >
          Change
        </button>
      </div>
    </form>
  );
}

export default PasswordUpdateForm;
