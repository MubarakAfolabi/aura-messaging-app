import AddUserForm from "./chats/AddUserForm";
import CreateGroupForm from "./chats/CreateGroupForm";
import BioEditForm from "./profile/BioEditForm";
import PasswordUpdateForm from "./profile/PasswordUpdateForm";
import UsernameEditForm from "./profile/UsernameEditForm";

function Modal({ setModal, modalType }) {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-md z-20 flex items-center justify-center px-2"
      role="dialog"
      onClick={() => setModal(false)}
    >
      <div
        className="bg-[hsl(30,20%,8%)] p-4 rounded-md flex flex-col gap-4 w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {modalType === "Username" && (
          <h2 className="font-anton text-lg md:text-2xl text-center">
            Edit {modalType}
          </h2>
        )}

        {modalType === "Bio" && (
          <h2 className="font-anton text-lg md:text-2xl text-center">
            Edit {modalType}
          </h2>
        )}

        {modalType === "Password" && (
          <h2 className="font-anton text-lg md:text-2xl text-center">
            Change {modalType}
          </h2>
        )}

        {modalType === "User" && (
          <h2 className="font-anton text-lg md:text-2xl text-center">
            Add {modalType}
          </h2>
        )}

        {modalType === "Group" && (
          <h2 className="font-anton text-lg md:text-2xl text-center">
            Create New {modalType}
          </h2>
        )}

        {modalType === "Username" && <UsernameEditForm setModal={setModal} />}
        {modalType === "Bio" && <BioEditForm setModal={setModal} />}
        {modalType === "Password" && <PasswordUpdateForm setModal={setModal} />}
        {modalType === "User" && <AddUserForm setModal={setModal} />}
        {modalType === "Group" && <CreateGroupForm setModal={setModal} />}
      </div>
    </div>
  );
}

export default Modal;
