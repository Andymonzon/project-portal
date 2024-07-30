import Image from "next/image";
import EditIcon from "@/../public/editIcon.svg";
import DeleteIcon from "@/../public/deleteIcon.svg";
import { useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { deleteProject } from "@/store/project/slice";
import { useAppDispatch } from "@/hooks/store";
import Link from "next/link";

interface Props {
  openMenu: { isOpen: boolean; id: string };
  setOpenMenu: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; id: string }>
  >;
  setIsOpenDeleteModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; id: string }>
  >;
  id: string;
}

export const Menu = ({
  openMenu,
  setOpenMenu,
  id,
  setIsOpenDeleteModal,
}: Props) => {
  const modalRef = useRef(null);
  const handleDelete = () => {
    setIsOpenDeleteModal({ isOpen: true, id: id });
    setOpenMenu({ isOpen: false, id: "" });
  };

  useOnClickOutside(modalRef, () => setOpenMenu({ isOpen: false, id: "" }));
  return (
    <>
      {openMenu.isOpen && openMenu.id === id && (
        <div
          ref={modalRef}
          className="absolute right-2 top-8 lg:top-5 lg:right-14 shadow-[0px_2px_8px_0px_#00000066] w-40 z-10"
        >
          <div className="bg-[#00000026] rounded-md flex flex-col gap-[1px]">
            <Link
              href={`/edit/${id}`}
              className="flex p-1 bg-white gap-2 items-center"
            >
              <Image src={EditIcon} alt="edit icon" />
              Edit
            </Link>
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
