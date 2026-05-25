import { Pencil } from "lucide-react";
import { Link } from "react-router";

function AccountSettings() {
  const navArr = [
    {
      name: "Edit Profile",
      icon: <Pencil size={22} />,
      route: "/profile/edit",
    },
  ];

  return (
    <ul className="bg-white/8 backdrop-blur-xl flex flex-col rounded-md overflow-hidden">
      {navArr.map((item, index) => {
        return (
          <li
            key={index}
            className="font-semibold rounded-sm cursor-pointer flex flex-col"
          >
            <Link
              className="hover:bg-white/10  flex items-center gap-2 p-4"
              to={item.route}
            >
              {item.icon}

              {item.name}
            </Link>

            {index < navArr.length - 1 && <hr className="border-secondary" />}
          </li>
        );
      })}
    </ul>
  );
}

export default AccountSettings;
