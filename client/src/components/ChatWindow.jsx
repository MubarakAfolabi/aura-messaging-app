import { useNavigate, useOutletContext, useParams } from "react-router";
import { SendHorizontal, ArrowLeft } from "lucide-react";
import { useState } from "react";

function ChatWindow({ type }) {
  const { chatId } = useParams();
  const navigate = useNavigate();

  const { directChats, setDirectChats, groupChats, setGroupChats } =
    useOutletContext();

  const messages = type === "direct" ? directChats : groupChats;

  const setChats = type === "direct" ? setDirectChats : setGroupChats;

  const chat = messages.find((item) => item.id === Number(chatId));

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      senderId: 0,
      username: "You",
      text: message,
      createdAt: "Now",
    };

    setChats((prev) =>
      prev.map((item) =>
        item.id === Number(chatId)
          ? {
              ...item,
              lastMessage: message,
              messages: [...item.messages, newMessage],
            }
          : item,
      ),
    );

    setMessage("");
  };

  return (
    <div className="h-full flex flex-col overflow-hidden relative">
      <div className="bg-[hsl(30,20%,8%)] p-2 flex items-center gap-2">
        <button
          className="shrink-0 bg-white/8 backdrop-blur-xl hover:bg-white/10 h-10 w-10 flex lg:hidden items-center justify-center rounded-full cursor-pointer"
          onClick={() =>
            type === "direct"
              ? navigate("/chats/direct")
              : navigate("/chats/groups")
          }
        >
          <ArrowLeft size={22} />
        </button>
        <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
          {type === "direct"
            ? chat.username.charAt(0)
            : chat.groupName.charAt(0)}
        </div>
        <h2 className="font-anton">
          {type === "direct" ? chat.username : chat.groupName}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto mb-15">
        <ul className="p-4 flex flex-col gap-4">
          {chat.messages.map((item) => {
            return (
              <li
                className={`${item.senderId !== 0 ? "bg-white/8 hover:bg-white/10 backdrop-blur-xl rounded-br-md" : "bg-primary-button text-primary-button-text rounded-bl-md self-end"} flex flex-col gap-2 w-fit max-w-2xs px-4 py-2 rounded-t-md wrap-break-word`}
                key={item.id}
              >
                {type === "group" && item.senderId !== 0 && (
                  <p className="text-xs text-semibold text-secondary">
                    {item.username}
                  </p>
                )}
                <p>{item.text}</p>
                <p
                  className={`${item.senderId !== 0 ? "" : "self-end"} text-sm`}
                >
                  {item.createdAt}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <form
        className="p-2 bg-[hsl(30,20%,8%)] flex items-center gap-4 absolute bottom-0 left-0 right-0"
        onSubmit={handleSubmit}
      >
        <div className="flex-1">
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="text"
            placeholder="Write a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          className="bg-primary-button hover:bg-primary-button/90 text-primary-button-text text-lg md:text-xl h-9 w-9 flex items-center justify-center rounded-full cursor-pointer"
          type="submit"
        >
          <SendHorizontal size={22} />
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
