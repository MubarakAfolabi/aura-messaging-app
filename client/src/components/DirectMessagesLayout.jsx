import { Outlet, useLocation } from "react-router";
import DirectMessageList from "./DirectMessageList";

function DirectMessageLayout() {
  const location = useLocation();

  const isChatOpen = /^\/chats\/direct\/[^/]+$/.test(location.pathname);

  return (
    <>
      <div className={`${isChatOpen ? "hidden lg:block" : "block"}`}>
        <DirectMessageList />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default DirectMessageLayout;
