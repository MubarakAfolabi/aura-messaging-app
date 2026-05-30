import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

function PasswordUpdateForm({ setModal }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/users/me/password`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ oldPassword, newPassword, confirmNewPassword }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResponseData(data);

        if (data?.success) {
          setTimeout(() => {
            setModal(false);
          }, 1000);
        }
      });
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
          <label className="font-anton md:text-lg">ENTER OLD PASSWORD</label>
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-anton md:text-lg">ENTER NEW PASSWORD</label>
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-anton md:text-lg">CONFIRM NEW PASSWORD</label>
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
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
    </>
  );
}

export default PasswordUpdateForm;
