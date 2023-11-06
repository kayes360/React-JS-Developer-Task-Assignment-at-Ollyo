import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddImgBox from "./AddImgBox";
import ImgBox from "./ImgBox";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
const ImgData = [
  {
    imgId: "1",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  },
  {
    imgId: "2",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    imgId: "3",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    imgId: "4",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  },
  {
    imgId: "5",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  },
  {
    imgId: "6",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  },
  {
    imgId: "7",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  },
  {
    imgId: "8",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  },
  {
    imgId: "9",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  },
  {
    imgId: "10",
    imgURL: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  },
  {
    imgId: "11",
    imgURL:
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  },
];

function App() {
  const [data, updateData] = useState(ImgData);
  const [selectedImages, setSelectedImages] = useState([]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = [...data];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateData(items);
  }

  const handleDelete = () => {
    const updatedImageData = ImgData.filter(
      ({ imgId }) => !selectedImages.includes(imgId)
    );
    updateData(updatedImageData);
    setSelectedImages([]);
  };

  return (
    <>
      <div className="container m-auto p-8 mt-5 bg-slate-100 shadow-lg rounded-md   ">
        <Header handleDelete={handleDelete} selectedImages={selectedImages} />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppableWrapper" direction="horizontal">
            {(provided) => (
              <div
                className="grid-wrapper grid grid-cols-5 gap-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {data.map(({ imgId, imgURL }, index) => (
                  <Draggable key={imgId} draggableId={imgId} index={index}>
                    {(provided) => (
                      <div
                        className="relative group"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <ImgBox
                          imgURL={imgURL}
                          imgId={imgId}
                          selectedImages={selectedImages}
                          setSelectedImages={setSelectedImages}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <AddImgBox />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
