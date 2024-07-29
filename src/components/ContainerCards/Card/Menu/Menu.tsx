import Image from "next/image";
import EditIcon from "@/../public/editIcon.svg";
import DeleteIcon from "@/../public/deleteIcon.svg";
import { useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { deleteProject } from "@/store/project/slice";
import { useAppDispatch } from "@/hooks/store";

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

export const Menu = ({ openModal, setOpenModal, id }: Props) => {
  const modalRef = useRef(null);
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteProject(id));
  };

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
              onClick={handleDelete}
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
