import { useAppDispatch } from "@/hooks/store";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { deleteProject } from "@/store/project/slice";
import { useRef, useState } from "react";

interface Props {
  setIsOpenDeleteModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; id: string }>
  >;
  id: string;
}

export const DeleteModal = ({ setIsOpenDeleteModal, id }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteProject(id));
    setIsOpenDeleteModal({ isOpen: false, id: "" });
  };

  useOnClickOutside(modalRef, () =>
    setIsOpenDeleteModal({ isOpen: false, id: "" })
  );
  return (
    <div className="fixed w-full h-full bg-black/50 top-0 left-0 flex items-center justify-center">
      <div ref={modalRef} className="bg-white p-4 rounded">
        <p className="text-lg">Are you sure you want to delete this project?</p>
        <div className="flex justify-end gap-2 mt-4 text-white">
          <button
            onClick={handleDelete}
            className="bg-red-500 py-2 px-4 rounded"
          >
            Yes
          </button>
          <button
            onClick={() => setIsOpenDeleteModal({ isOpen: false, id: "" })}
            className="bg-blue-500 py-2 px-4 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
