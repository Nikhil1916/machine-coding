import React, { useState } from "react";

const FileExplorer = ({handleAdd, data }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });
//   console.log(data);
  const addNewFileDir = (e, isFolder = false) => {
    e.stopPropagation();
    // if(showInput.isVisible) return;
    setExpand(true);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const onAdd = (e) =>{
    if(e.keyCode===13 && e.target.value) {
        // data.items.push({
        //     items:[],
        //     id: Date.now(),
        //     isFolder: showInput.isFolder,
        //     name: e.target.value
        // })
        handleAdd(data.id, e.target.value, showInput.isFolder)
        setShowInput({
            isVisible:false
        });

    }
  }
  return (
    <div className="container">
      <div className="cursor-pointer">
        <div
          onClick={() => {
            setExpand(!expand);
          }}
          className="folder"
        >
          <span>📁{data?.name}</span>
          <div>
            <button
              onClick={(e) => {
                addNewFileDir(e, true);
              }}
            >
              Folder+
            </button>
            <button
              className="ml-1"
              onClick={(e) => {
                addNewFileDir(e);
              }}
            >
              File+
            </button>
          </div>
        </div>
      </div>
      <div>
        {showInput.isVisible ? (
          <div className="ml-1 mt-1 mb-1">
            {showInput?.isFolder ? <span>📁</span> : <span>🖹</span>}
            <input type="text" autoFocus onBlur={()=>{
                setShowInput({
                    isVisible:false
                })
            }}
            onKeyUp={onAdd}
             />
          </div>
        ) : (
          ""
        )}
        {data?.items?.map((item) => {
          return item?.isFolder ? (
            <div
              className={`ml-1 cursor-pointer ${expand ? "block" : "hidden"}`}
              key={item?.id}
            >
              <FileExplorer handleAdd={handleAdd} data={item} />{" "}
            </div>
          ) : (
            <span
              className={`ml-1 file cursor-pointer ${
                expand ? "block" : "hidden"
              }`}
              key={item?.id}
            >
              🖹{item?.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FileExplorer;
