import { MessageCircle, Users } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";
import DirectMessageList from "../components/DirectMessageList";
import GroupMessageList from "../components/GroupMessageList";
import { directMessages } from "../constants/directMessages";
import { groupMessages } from "../constants/groupMessages";
import { useState } from "react";

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

  const [directChats, setDirectChats] = useState(directMessages);
  const [groupChats, setGroupChats] = useState(groupMessages);

  const isDirect = location.pathname.includes("/chats/direct");
  const isGroups = location.pathname.includes("/chats/groups");
  const isChatOpen =
    /^\/chats\/direct\/[^/]+$/.test(location.pathname) ||
    /^\/chats\/groups\/[^/]+$/.test(location.pathname);

  return (
    <div className="overflow-hidden flex h-full">
      <div
        className={`flex flex-col flex-1 gap-5 p-2 ${
          isChatOpen ? "hidden lg:flex" : ""
        } lg:bg-[hsl(30,20%,8%)]`}
      >
        <div className="p-2">
          <h2 className="font-anton text-lg md:text-2xl text-center">Chats</h2>
        </div>

        <nav className="flex justify-center p-2">
          <ul className="flex gap-2">
            {navArr.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${location.pathname.includes(item.route) ? "bg-primary-button hover:bg-primary-button/90 text-primary-button-text" : "bg-white/8 hover:bg-white/10 backdrop-blur-xl w-10"} font-semibold h-10 flex items-center justify-center rounded-full cursor-pointer overflow-hidden`}
                >
                  <Link
                    className="h-full w-full flex items-center gap-2 px-2"
                    to={item.route}
                  >
                    {item.icon}
                    {location.pathname.includes(item.route) && item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex-1 overflow-hidden">
          {isDirect && <DirectMessageList />}
          {isGroups && <GroupMessageList />}
        </div>
      </div>

      {!isChatOpen && !isChatOpen && (
        <div className="hidden lg:flex flex-2 items-center justify-center text-secondary">
          Select a chat
        </div>
      )}

      <div className={`${isChatOpen ? "" : "hidden"} flex-2`}>
        <Outlet
          context={{ directChats, setDirectChats, groupChats, setGroupChats }}
        />
      </div>
    </div>
  );
}

export default ChatsPage;
