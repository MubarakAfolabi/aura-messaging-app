import { UserPlus, UserCheck } from "lucide-react";
import { Link } from "react-router";

function RequestsPage() {
  const navArr = [
    {
      name: "Sent",
      route: "/requests",
      icon: <UserPlus size={22} />,
    },
    {
      name: "Received",
      route: "/request/received",
      icon: <UserCheck size={22} />,
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-2 bg-[hsl(30,20%,8%)] h-full">
      <div>
        <h2 className="font-anton text-lg md:text-2xl text-center">Requests</h2>
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
    </div>
  );
}

export default RequestsPage;
