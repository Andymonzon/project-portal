import Image from "next/image";
import EditIcon from "@/../public/editIcon.svg";
import DeleteIcon from "@/../public/deleteIcon.svg";

interface Props {
  openModal: boolean;
}

export const Menu = ({ openModal }: Props) => {
  return (
    <>
      {openModal && (
        <div className="absolute right-5 top-9 shadow-[0px_2px_8px_0px_#00000026] w-40">
          <ul className="bg-[#00000026] rounded-md flex flex-col gap-[1px]">
            <li className="flex p-1 bg-white">
              <Image src={EditIcon} alt="edit icon" />
              Edit
            </li>
            <li className="flex p-1 bg-white">
              <Image src={DeleteIcon} alt="delete icon" />
              Delete
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
