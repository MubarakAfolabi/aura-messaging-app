import EditModal from "../components/EditModal";

import { useState } from "react";

function SecurityPage() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const navArr = [
    {
      name: "Change Password",
      modalType: "Password",
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-2">
      {modal && <EditModal setModal={setModal} modalType={modalType} />}

      <div>
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
