import { useState } from "react";

function AddUserForm({ setModal }) {
  const [user, setUser] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {!responseData?.success ? (
        <p className="text-red-500 text-center">{responseData?.message}</p>
      ) : (
        <p className="text-center">{responseData?.message}</p>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="email"
            placeholder="Email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddUserForm;
