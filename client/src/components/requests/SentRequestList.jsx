import { requests } from "../../constants/request";
import { Link } from "react-router";

function SentRequestList() {
  const sentRequests = requests.filter((item) => item.type === "sent");

  return (
    <ul className="bg-white/8 backdrop-blur-xl flex flex-col rounded-md overflow-hidden">
      {sentRequests.map((item, index) => {
        return (
          <li key={item.id} className="font-semibold rounded-sm flex flex-col">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                  {item.username.charAt(0)}
                </div>
                {item.username}
              </div>

              <Link className="bg-white/8 hover:bg-white/10 backdrop-blur-xl text-md md:text-lg p-2 font-semibold rounded-sm cursor-pointer">
                Cancel
              </Link>
            </div>

            {index < sentRequests.length - 1 && (
              <hr className="border-secondary" />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default SentRequestList;
