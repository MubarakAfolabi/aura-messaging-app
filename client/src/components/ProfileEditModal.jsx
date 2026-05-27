import BioEditForm from "./BioEditForm";
import UsernameEditForm from "./UsernameEditForm";

function ProfileEditModal({ setModal, modalType }) {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-md z-20 flex items-center justify-center"
      role="dialog"
      onClick={() => setModal(false)}
    >
      <div
        className="bg-[hsl(30,20%,8%)] p-4 rounded-md flex flex-col gap-4 w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-anton text-lg md:text-2xl text-center">
          Edit {modalType}
        </h2>

        {modalType === "Username" && <UsernameEditForm setModal={setModal} />}
        {modalType === "Bio" && <BioEditForm setModal={setModal} />}
      </div>
    </div>
  );
}

export default ProfileEditModal;
