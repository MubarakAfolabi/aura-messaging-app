import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

function SentRequestList() {
  const [sentRequests, setSentRequests] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${API_URL}/request/sent`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.success) {
          setSentRequests(data?.sentRequests);
        }
      });
  }, [token]);

  const handleDeleteRequest = (requestId) => {
    fetch(`${API_URL}/request/delete`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ requestId }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.success) {
          setSentRequests((prev) =>
            prev.filter((item) => item.id !== requestId),
          );
        }
      });
  };

  return (
    <>
      {sentRequests.length > 0 ? (
        <ul className="bg-white/8 backdrop-blur-xl flex flex-col rounded-md overflow-hidden">
          {sentRequests.map((item, index) => {
            return (
              <li
                key={item.friend?.id}
                className="font-semibold rounded-sm flex flex-col"
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2">
                    <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                      {item.friend?.username.charAt(0)}
                    </div>
                    {item.friend?.username}
                  </div>

                  <button
                    className="bg-white/8 hover:bg-white/10 backdrop-blur-xl text-md md:text-lg p-2 font-semibold rounded-sm cursor-pointer"
                    onClick={() => handleDeleteRequest(item?.id)}
                  >
                    Cancel
                  </button>
                </div>

                {index < sentRequests.length - 1 && (
                  <hr className="border-secondary" />
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Sent Request</p>
      )}
    </>
  );
}

export default SentRequestList;
