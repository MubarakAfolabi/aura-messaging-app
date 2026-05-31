import { useState } from "react";
import { Search } from "lucide-react";
const API_URL = import.meta.env.VITE_API_URL;

function AddUserForm({ setModal }) {
  const [userEmail, setUserEmail] = useState("");
  const [responseData, setResponseData] = useState(null);
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/users/search`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userEmail }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      {!responseData?.success && (
        <p className="text-red-500 text-center">{responseData?.message}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <button
            className="shrink-0 bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-lg md:text-xl h-10 w-10 flex items-center justify-center rounded-full cursor-pointer"
            type="submit"
          >
            <Search size={22} />
          </button>
        </div>
      </form>

      {responseData?.success && (
        <ul>
          <li className="font-semibold rounded-sm flex flex-col">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                  {responseData.user?.username.charAt(0)}
                </div>
                <div>
                  <h2>{responseData.user?.username}</h2>
                  <p className="text-sm text-secondary">
                    {responseData.user?.email}
                  </p>
                </div>
              </div>

              <button className="bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-md md:text-lg p-2 font-semibold rounded-sm cursor-pointer">
                Add
              </button>
            </div>
          </li>
        </ul>
      )}

      <button
        className="flex-1 bg-white/8 backdrop-blur-xl text-lg md:text-xl py-2 font-semibold rounded-sm cursor-pointer"
        type="button"
        onClick={() => setModal(false)}
      >
        Cancel
      </button>
    </div>
  );
}

export default AddUserForm;
