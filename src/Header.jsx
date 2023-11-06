import React from "react";

export default function Header({ handleDelete, selectedImages }) { 
  return (
    <div className="p-5 font-bold">
{
  selectedImages.length <1 ? (
    <p> Gallery</p>
  ):(

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <input
            checked
            readOnly
            type="checkbox"
            value=""
            className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 cursor-pointer rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
           {selectedImages.length} items selected
        </div>
        <p className="hover:underline hover:underline-offset-2 cursor-pointer text-red-500" onClick={handleDelete}>
          Delete files
        </p>
      </div>
  )
}
      




    </div>
  );
}
