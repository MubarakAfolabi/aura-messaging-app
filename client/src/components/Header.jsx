import { Menu } from "lucide-react";
import { user } from "../constants/userData";

function Header() {
  return (
    <header className="flex p-2 items-center">
      <button className="shrink-0 bg-white/8 backdrop-blur-xl hover:bg-white/10 h-10 w-10 flex md:hidden items-center justify-center rounded-full cursor-pointer">
        <Menu />
        {/* 123456789 */}
      </button>
      <div className="flex-1">
        <h1 className="font-anton text-4xl md:text-5xl text-center">Aura</h1>
      </div>
      <button className="font-bold bg-white/8 backdrop-blur-xl hover:bg-white/10 w-fit md:pr-2 rounded-full flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
          M
        </div>
        <p className="hidden md:block">{user.username}</p>
      </button>
    </header>
  );
}

export default Header;
