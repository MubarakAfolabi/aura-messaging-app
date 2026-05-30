import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

function SecurityPage() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const navigate = useNavigate();

  const navArr = [
    {
      name: "Change Password",
      modalType: "Password",
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-2">
      {modal && <Modal setModal={setModal} modalType={modalType} />}

      <div className="relative">
        <button
          className="absolute left-0 top-0 shrink-0 bg-white/8 backdrop-blur-xl hover:bg-white/10 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft size={22} />
        </button>

        <h2 className="font-anton text-lg md:text-2xl text-center">
          Edit Profile
        </h2>
      </div>

      <ul className="bg-white/8 backdrop-blur-xl flex flex-col rounded-md overflow-hidden w-full max-w-2xl self-center">
        {navArr.map((item, index) => {
          return (
            <li key={index} className="font-semibold rounded-sm">
              <button
                className="hover:bg-white/10 flex items-center gap-2 p-4  w-full cursor-pointer"
                onClick={() => {
                  setModal(true);
                  setModalType("Password");
                }}
              >
                {item.name}
              </button>
              {index < navArr.length - 1 && <hr className="border-secondary" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SecurityPage;
