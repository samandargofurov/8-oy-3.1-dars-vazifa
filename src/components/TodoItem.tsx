import { PiTrashSimpleFill } from "react-icons/pi";
import { MdModeEditOutline } from "react-icons/md";
import { FC } from "react";

interface DateType {
  data: {
    id: number;
    name: string;
    status: boolean;
    date: string;
  };
}

const TodoItem: FC<DateType> = (props) => {
  return (
    <>
      <div className="flex items-center justify-between bg-white p-3 rounded-xl">
        <div className="flex items-center gap-4">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
          </label>

          <div className="info">
            <h3 className="text-md">{props.data.name}</h3>
            <time className="text-xs">{props.data.date}</time>
          </div>
        </div>
        <div className="actions flex gap-4">
          <span className="bg-gray-200 rounded-md cursor-pointer text-xl p-2">
            <PiTrashSimpleFill></PiTrashSimpleFill>
          </span>
          <span className="bg-gray-200 rounded-md cursor-pointer text-xl p-2">
            <MdModeEditOutline></MdModeEditOutline>
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
