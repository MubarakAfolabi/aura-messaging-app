import { useState } from "react";
import { useOutletContext } from "react-router";
const API_URL = import.meta.env.VITE_API_URL;

function UsernameEditForm({ setModal }) {
  const { userData, setUserData } = useOutletContext();
  const [username, setUsername] = useState(userData?.username);
  const [responseData, setResponseData] = useState(null);
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResponseData(data);

        if (data?.success) {
          setUserData((prev) => ({ ...prev, username: data?.user.username }));
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
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
    </>
  );
}

export default UsernameEditForm;
