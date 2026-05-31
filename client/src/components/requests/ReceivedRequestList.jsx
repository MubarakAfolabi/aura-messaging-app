import { useEffect, useState } from "react";
import { Link } from "react-router";
const API_URL = import.meta.env.VITE_API_URL;

function ReceivedRequestList() {
  const [receivedRequests, setReceivedRequests] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

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
  }, []);

  return (
    <>
      {receivedRequests.length > 0 ? (
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
                    <Link className="bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-md md:text-lg p-2 font-semibold rounded-sm cursor-pointer">
                      Accept
                    </Link>

                    <Link className="bg-white/8 hover:bg-white/10 backdrop-blur-xl text-md md:text-lg p-2 font-semibold rounded-sm cursor-pointer">
                      Decline
                    </Link>
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
