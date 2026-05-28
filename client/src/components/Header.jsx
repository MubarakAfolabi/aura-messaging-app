import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

function Header({ userData, setSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isChatOpen =
    /^\/chats\/direct\/[^/]+$/.test(location.pathname) ||
    /^\/chats\/groups\/[^/]+$/.test(location.pathname);

  return (
    <header
      className={`${isChatOpen ? "hidden md:flex" : "flex"} p-2 items-center md:bg-[hsl(30,20%,8%)]`}
    >
      <button
        className="shrink-0 bg-white/8 backdrop-blur-xl hover:bg-white/10 h-10 w-10 flex md:hidden items-center justify-center rounded-full cursor-pointer"
        onClick={() => setSidebar(true)}
      >
        <Menu />
      </button>
      <div className="flex-1">
        <h1
          className="font-anton text-4xl md:text-5xl text-center md:text-start cursor-default"
          onClick={() => navigate("/")}
        >
          Aura
        </h1>
      </div>
      <button
        className="font-bold bg-white/8 backdrop-blur-xl hover:bg-white/10 w-fit md:pr-2 rounded-full flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
          {userData.username.charAt(0)}
        </div>
        <p className="hidden md:block">{userData.username}</p>
      </button>
    </header>
  );
}

export default Header;
