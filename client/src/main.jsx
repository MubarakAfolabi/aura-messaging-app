import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Onboarding from "./pages/Onboarding.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AccountSettings from "./components/AccountSettings.jsx";
import FriendsList from "./components/FriendsList.jsx";
import GroupsList from "./components/GroupsList.jsx";
import ProfileEdit from "./pages/ProfileEdit.jsx";
import SecurityPage from "./pages/SecurityPage.jsx";
import ChatsPage from "./pages/ChatsPage.jsx";
import GroupMessageList from "./components/GroupMessageList.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import DirectMessageLayout from "./components/DirectMessagesLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/profile" replace />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          {
            index: true,
            element: <AccountSettings />,
          },
          {
            path: "/profile/friends",
            element: <FriendsList />,
          },
          {
            path: "/profile/groups",
            element: <GroupsList />,
          },
        ],
      },
      {
        path: "/profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "/profile/security",
        element: <SecurityPage />,
      },
      {
        path: "/chats",
        element: <ChatsPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/chats/direct" />,
          },
          {
            path: "/chats/direct",
            element: <DirectMessageLayout />,
            children: [
              {
                path: "/chats/direct/:chatId",
                element: <ChatWindow type="direct" />,
              },
            ],
          },
          {
            path: "/chats/groups",
            element: <GroupMessageList />,
          },
        ],
      },
    ],
  },
  {
    path: "/welcome",
    element: <Onboarding />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
