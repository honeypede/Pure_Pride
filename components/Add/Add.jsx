import React from "react";
import { close } from "@/public/image";
import Image from "next/image";

function Add(props) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="add fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="modal p-6 md:p-12 rounded-lg bg-[#2a3447] relative w-[90%] md:w-[50%] max-h-[80vh] overflow-y-auto">
        <span className="close absolute top-3 right-3 cursor-pointer">
          <Image
            src={close}
            alt="close"
            width={25}
            height={25}
            onClick={() => {
              props.setOpen(false);
            }}
          />
        </span>
        <h1 className="text-white mb-6 md:mb-10 text-2xl">
          Add new {props.slug}
        </h1>
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col space-y-4 md:space-y-6"
        >
          {props.feilds.map((value, index) => (
            <div className="item" key={index}>
              <label
                htmlFor={value.inputName}
                className="text-[14px] text-white mr-4"
              >
                {value.inputName} :
              </label>
              {value.type === "image" ? (
                <input
                  className="p-3 bg-transparent text-white outline-none border border-blue-600 border-solid rounded-md"
                  type="file"
                  name={value.inputName}
                  id={value.inputName}
                />
              ) : (
                <input
                  className="p-3 bg-transparent text-white outline-none border border-blue-600 border-solid rounded-md"
                  type={value.type}
                  name={value.inputName}
                  id={value.inputName}
                  placeholder={`Enter the ${value.inputName}`}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full p-3 cursor-pointer outline bg-white text-black hover:outline-1 hover:text-white outline-white hover:bg-black rounded-xl transition-all duration-200"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
