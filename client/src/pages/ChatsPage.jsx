import { MessageCircle, Users, UserPlus } from "lucide-react";
import { Link, Outlet, useLocation, useOutletContext } from "react-router";
import DirectMessageList from "../components/chats/DirectMessageList";
import GroupMessageList from "../components/chats/GroupMessageList";
import { directMessages } from "../constants/directMessages";
import { groupMessages } from "../constants/groupMessages";
import { useState } from "react";
import Modal from "../components/Modal";

function ChatsPage() {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(null);

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

  const { directChats, setDirectChats, groupChats, setGroupChats } =
    useOutletContext();

  const isDirect = location.pathname.includes("/chats/direct");
  const isGroups = location.pathname.includes("/chats/groups");
  const isChatOpen =
    /^\/chats\/direct\/[^/]+$/.test(location.pathname) ||
    /^\/chats\/groups\/[^/]+$/.test(location.pathname);

  const messages = isDirect ? directMessages : groupMessages;

  const filteredMessages = messages.filter((message) => {
    return isDirect
      ? message.username.toLowerCase().includes(search.trim().toLowerCase()) ||
          message.lastMessage
            .toLowerCase()
            .includes(search.trim().toLowerCase())
      : message.groupName.toLowerCase().includes(search.trim().toLowerCase()) ||
          message.lastMessage
            .toLowerCase()
            .includes(search.trim().toLowerCase());
  });

  return (
    <div className="overflow-hidden flex md:gap-4 h-full">
      {modal && <Modal setModal={setModal} modalType={modalType} />}

      <div
        className={`flex flex-col flex-1 gap-5 p-2 ${
          isChatOpen ? "hidden lg:flex" : ""
        } bg-[hsl(30,20%,8%)] rounded-md`}
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
                    className="h-full w-full flex items-center justify-center gap-2 px-2"
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

        <div>
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {isDirect ? (
          <button
            className="flex gap-2 items-center bg-primary-button hover:bg-primary-button/90 text-primary-button-text w-fit p-2 rounded-md self-end cursor-pointer"
            onClick={() => {
              setModal(true);
              setModalType("User");
            }}
          >
            <UserPlus size={22} />
            <span className="hidden md:block">Add User</span>
          </button>
        ) : (
          <button
            className="flex gap-2 items-center bg-primary-button hover:bg-primary-button/90 text-primary-button-text w-fit p-2 rounded-md self-end cursor-pointer"
            onClick={() => {
              setModal(true);
              setModalType("Group");
            }}
          >
            <Users size={22} />
            <span className="hidden md:block">Create Group</span>
          </button>
        )}

        {filteredMessages.length === 0 ? (
          <p className="text-center">No results</p>
        ) : (
          <div className="flex-1 overflow-hidden">
            {isDirect && <DirectMessageList messages={filteredMessages} />}
            {isGroups && <GroupMessageList messages={filteredMessages} />}
          </div>
        )}
      </div>

      {!isChatOpen && !isChatOpen && (
        <div className="bg-[hsl(30,20%,8%)] rounded-md hidden lg:flex flex-2 items-center justify-center text-secondary">
          Select a chat
        </div>
      )}

      <div
        className={`${isChatOpen ? "" : "hidden"} flex-2 rounded-md overflow-hidden`}
      >
        <Outlet
          context={{
            directChats,
            setDirectChats,
            groupChats,
            setGroupChats,
          }}
        />
      </div>
    </div>
  );
}

export default ChatsPage;
