import { MessageCircle, Users } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";

function ChatsPage() {
  const location = useLocation();
  const navArr = [
    {
      name: "Direct",
      route: "/chats/direct",
      icon: <MessageCircle size={22} />,
    },
    {
      name: "Groups",
      route: "/chats/groups",
      icon: <Users size={22} />,
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-2">
      <div>
        <h2 className="font-anton text-lg md:text-2xl text-center">Chats</h2>
      </div>

      <nav className="flex justify-center">
        <ul className="flex gap-2">
          {navArr.map((item, index) => {
            return (
              <li
                key={index}
                className={`${location.pathname === item.route ? "bg-primary-button hover:bg-primary-button/90 text-primary-button-text" : "bg-white/8 hover:bg-white/10 backdrop-blur-xl w-10"} font-semibold h-10 flex items-center justify-center rounded-full cursor-pointer overflow-hidden`}
              >
                <Link
                  className="h-full w-full flex items-center gap-2 px-2"
                  to={item.route}
                >
                  {item.icon}
                  {location.pathname === item.route && item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ChatsPage;
