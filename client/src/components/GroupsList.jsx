import { groups } from "../constants/groupsData";
import { Link } from "react-router";

function GroupsList() {
  return (
    <ul className="bg-white/8 backdrop-blur-xl flex flex-col rounded-md overflow-hidden">
      {groups.map((item, index) => {
        return (
          <li key={item.id} className="font-semibold rounded-sm flex flex-col">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <p className="text-sm text-secondary">
                    {item.members} members
                  </p>
                </div>
              </div>

              <Link className="bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-lg md:text-xl p-2 font-semibold rounded-sm cursor-pointer">
                Chat
              </Link>
            </div>

            {index < groups.length - 1 && <hr className="border-secondary" />}
          </li>
        );
      })}
    </ul>
  );
}

export default GroupsList;
