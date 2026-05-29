import { requests } from "../../constants/request";
import { Link } from "react-router";

function ReceivedRequestList() {
  const receivedRequests = requests.filter((item) => item.type === "received");

  return (
    <ul className="bg-white/8 backdrop-blur-xl flex flex-col rounded-md overflow-hidden">
      {receivedRequests.map((item, index) => {
        return (
          <li key={item.id} className="font-semibold rounded-sm flex flex-col">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                  {item.username.charAt(0)}
                </div>
                {item.username}
              </div>

              <div className="flex items-center gap-4">
                <Link className="bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-lg md:text-xl p-2 font-semibold rounded-sm cursor-pointer">
                  Accept
                </Link>

                <Link className="bg-white/8 backdrop-blur-xl text-lg md:text-xl p-2 font-semibold rounded-sm cursor-pointer">
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
  );
}

export default ReceivedRequestList;
