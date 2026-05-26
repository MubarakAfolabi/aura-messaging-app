import { Link, useLocation } from "react-router";
import { User, MessageSquare, Users, LogOut } from "lucide-react";

function Sidebar({ user, setSidebar }) {
  const location = useLocation();

  const navArr = [
    {
      name: "Profile",
      icon: <User size={22} />,
      route: "/profile",
    },
    {
      name: "Chats",
      icon: <MessageSquare size={22} />,
      route: "/chats",
    },
    {
      name: "Requests",
      icon: <Users size={22} />,
      route: "/requests",
    },
  ];

  return (
    <aside
      className="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-md z-10"
      onClick={() => setSidebar(false)}
    >
      <div
        className="bg-[hsl(30,20%,8%)] h-full w-[70%] p-4 py-10 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2">
          <div className="font-bold text-4xl w-20 h-20 rounded-full bg-green-400 flex items-center justify-center">
            M
          </div>
          <div>
            <p className="font-anton text-lg">{user.username}</p>
            <p className="font-anton text-secondary">{user.email}</p>
          </div>
        </div>

        <hr className="border border-secondary" />

        <nav className="flex-1 flex flex-col justify-between">
          <ul className="flex flex-col gap-4">
            {navArr.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${location.pathname.startsWith(item.route) ? "bg-primary-button hover:bg-primary-button/90 text-primary-button-text" : "bg-white/8 hover:bg-white/10 backdrop-blur-xl"} font-semibold rounded-sm cursor-pointer`}
                >
                  <Link
                    className="flex items-center gap-2 h-full w-full p-2 "
                    to={item.route}
                  >
                    {item.icon}

                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link className="flex items-center gap-2 font-semibold bg-white/8 hover:bg-white/10 backdrop-blur-xl p-2 rounded-sm cursor-pointer">
            <LogOut size={22} />
            Log Out
          </Link>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
