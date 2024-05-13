import { FC } from "react";
import { PiTrashSimpleFill } from "react-icons/pi";
import { MdModeEditOutline } from "react-icons/md";

interface Task {
    id: number,
    title: string
}

const TodoInfo:FC<Task> = (props) => {

  const handleRemove = () => {
    
  };

  const handleEdit = () => {};

  return (
    <>
      <div className="container w-full mx-auto">
        <div>
          <div className="flex flex-col gap-5">

            <div className="bg-white rounded-md p-3 flex justify-between">

              <div className="flex items-center gap-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm">{props.title}</h1>
                  <p className="text-xs">Lorem, ipsum.</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <span
                  className="bg-gray-300 p-2 rounded-md text-lg cursor-pointer"
                  onClick={handleRemove}
                >
                  <PiTrashSimpleFill></PiTrashSimpleFill>
                </span>
                <span
                  className="bg-gray-300 p-2 rounded-md text-lg cursor-pointer"
                  onClick={handleEdit}
                >
                  <MdModeEditOutline></MdModeEditOutline>
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TodoInfo;
