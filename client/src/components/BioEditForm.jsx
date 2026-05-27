function BioEditForm({ setModal }) {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <input
          className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
          type="text"
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
          Update
        </button>
      </div>
    </form>
  );
}

export default BioEditForm;
