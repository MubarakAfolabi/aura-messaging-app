import { useParams } from "react-router";
import { directMessages } from "../constants/directMessages";
import { SendHorizontal } from "lucide-react";

function ChatWindow({ type }) {
  const { chatId } = useParams();

  const chat = directMessages.find((item) => item.id === Number(chatId));
  console.log(chat);

  return (
    <div className="h-screen flex flex-col relative lg:h-full">
      <div className="bg-[hsl(30,20%,8%)] p-2 flex items-center gap-2">
        <div className="font-bold w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
          {chat.username.charAt(0)}
        </div>
        <h2 className="font-anton">{chat.username}</h2>
      </div>

      <div className="flex-1 overflow-y-auto mb-15">
        <ul className="p-4 flex flex-col gap-4">
          {chat.messages.map((item) => {
            return (
              <li
                className={`${item.senderId !== 0 ? "bg-white/8 hover:bg-white/10 backdrop-blur-xl rounded-br-md" : "bg-primary-button text-primary-button-text rounded-bl-md self-end"} flex flex-col gap-2 w-fit max-w-2xs px-4 py-2 rounded-t-md`}
                key={item.id}
              >
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

      <form className="p-2 bg-[hsl(30,20%,8%)] flex items-center gap-4 absolute bottom-0 left-0 right-0">
        <div className="flex-1">
          <input
            className="w-full bg-white/8 backdrop-blur-xl p-2 rounded-sm outline-none md:text-lg "
            type="text"
            placeholder="Write a message"
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
