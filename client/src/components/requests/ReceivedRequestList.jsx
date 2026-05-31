import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

function ReceivedRequestList() {
  const [receivedRequests, setReceivedRequests] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${API_URL}/request/received`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.success) {
          setReceivedRequests(data?.receivedRequests);
        }
      });
  }, [token]);

  const handleAcceptRequest = (requestId) => {
    fetch(`${API_URL}/request/accept`, {
      method: "PATCH",
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
          setReceivedRequests((prev) =>
            prev.filter((item) => item.id !== requestId),
          );
        }
      });
  };

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
          setReceivedRequests((prev) =>
            prev.filter((item) => item.id !== requestId),
          );
        }
      });
  };

  return (
    <>
      {receivedRequests?.length > 0 ? (
        <ul className="bg-white/8 backdrop-blur-xl flex flex-col rounded-md overflow-hidden">
          {receivedRequests.map((item, index) => {
            return (
              <li
                key={item.user?.id}
                className="font-semibold rounded-sm flex flex-col"
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2">
                    <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                      {item.user?.username.charAt(0)}
                    </div>
                    {item.user?.username}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      className="bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-md md:text-lg p-2 font-semibold rounded-sm cursor-pointer"
                      onClick={() => handleAcceptRequest(item?.id)}
                    >
                      Accept
                    </button>

                    <button
                      className="bg-white/8 hover:bg-white/10 backdrop-blur-xl text-md md:text-lg p-2 font-semibold rounded-sm cursor-pointer"
                      onClick={() => handleDeleteRequest(item?.id)}
                    >
                      Decline
                    </button>
                  </div>
                </div>

                {index < receivedRequests.length - 1 && (
                  <hr className="border-secondary" />
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Received Requests</p>
      )}
    </>
  );
}

export default ReceivedRequestList;
