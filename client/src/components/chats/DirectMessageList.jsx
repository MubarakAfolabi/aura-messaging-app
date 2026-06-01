import { useEffect, useState } from "react";
import { Link } from "react-router";
const API_URL = import.meta.env.VITE_API_URL;

function DirectMessageList({ messages }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API_URL}/chat`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        if (data?.success) {
          setFriends(data?.friends);
        }
      });
  }, []);

  return (
    <>
      {friends.length > 0 ? (
        <ul className="bg-white/8 backdrop-blur-xl flex flex-col rounded-md overflow-hidden">
          {friends.map((item, index) => {
            return (
              <li
                key={item?.id}
                className="font-semibold rounded-sm flex flex-col hover:bg-white/10 cursor-pointer"
              >
                <Link
                  className="flex items-center gap-2 p-4"
                  to={`/chats/direct/${item?.id}`}
                >
                  <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                    {item?.username.charAt(0)}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-center gap-2">
                      <h2>{item?.username}</h2>
                      <p className="text-sm text-secondary">
                        {item?.updatedAt}
                      </p>
                    </div>
                    <p className="text-sm text-secondary">
                      {item?.lastMessage}
                    </p>
                  </div>
                </Link>

                {index < friends.length - 1 && (
                  <hr className="border-secondary" />
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Chats</p>
      )}
    </>
  );
}

export default DirectMessageList;
