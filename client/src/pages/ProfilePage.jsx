import { useOutletContext, Link, Outlet, useLocation } from "react-router";
import { Users, UserCheck, User } from "lucide-react";

function ProfilePage() {
  const { userData } = useOutletContext();
  const location = useLocation();

  const navArr = [
    {
      name: "Friends",
      route: "/profile/friends",
      icon: <UserCheck size={22} />,
    },
    {
      name: "Groups",
      route: "/profile/groups",
      icon: <Users size={22} />,
    },
    {
      name: "Account",
      route: "/profile",
      icon: <User size={22} />,
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-2">
      <div>
        <h2 className="font-anton text-lg md:text-2xl text-center">Profile</h2>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="font-bold text-4xl w-30 h-30 rounded-full bg-green-400 flex items-center justify-center">
            {userData.username.charAt(0)}
          </div>
          <div>
            <p className="font-anton text-lg">{userData.username}</p>
            <p className="font-anton text-secondary">{userData.email}</p>
            <p className="text-secondary">
              {userData.bio.trim().length > 0 ? userData.bio : "No Bio"}
            </p>
          </div>
        </div>
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

      <div className="px-2 w-full max-w-2xl self-center">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfilePage;
