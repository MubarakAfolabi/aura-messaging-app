import { useState } from "react";
import { useOutletContext } from "react-router";

function BioEditForm({ setModal }) {
  const { userData, setUserData } = useOutletContext();
  const [bio, setBio] = useState(userData.bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => ({ ...prev, bio }));
    setModal(false);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <input
          className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
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
