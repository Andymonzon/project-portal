import Image from "next/image";
import EditIcon from "@/../public/editIcon.svg";
import DeleteIcon from "@/../public/deleteIcon.svg";
import { useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({ openModal, setOpenModal }: Props) => {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setOpenModal(false));
  return (
    <>
      {openModal && (
        <div
          ref={modalRef}
          className="absolute right-5 top-9 shadow-[0px_2px_8px_0px_#00000026] w-40"
        >
          <div className="bg-[#00000026] rounded-md flex flex-col gap-[1px]">
            <button
              onClick={(e) => console.log(e)}
              className="flex p-1 bg-white gap-2 items-center"
            >
              <Image src={EditIcon} alt="edit icon" />
              Edit
            </button>
            <button
              onClick={(e) => console.log(e)}
              className="flex p-1 bg-white gap-2 items-center"
            >
              <Image src={DeleteIcon} alt="delete icon" />
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};
