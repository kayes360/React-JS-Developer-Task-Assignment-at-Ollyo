import React from "react";
import { useState } from "react"; 

export default function ImgBox({
  imgId,
  imgURL,
  selectedImages,
  setSelectedImages,
}) {
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const toggleCheckbox = (imgId) => {
    setCheckboxStatus(!checkboxStatus);

    if (selectedImages.includes(imgId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imgId));
    } else {
      setSelectedImages([...selectedImages, imgId]);
    }
  };
  return (
    <>
      <img
        className="h-auto border border-slate-300 max-w-full rounded-lg relative"
        src={imgURL}
        alt=""
      />
      <div
        className={`absolute inset-0 bg-black rounded-lg ${
          checkboxStatus ? "opacity-50" : "opacity-0"
        } group-hover:opacity-50 transition-opacity cursor-pointer`}
        onClick={() => toggleCheckbox(imgId)}
      >
        <div className="absolute top-3 left-3">
          <input
            checked={checkboxStatus}
            onChange={toggleCheckbox}
            type="checkbox"
            className="absolute w-6 h-6 cursor-pointer opacity-100"
          />
        </div>
      </div>
    </>
  );
}
