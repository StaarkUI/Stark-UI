import React from "react";
import BasicInput from "../design/BasicInput";
import FileInput from "../design/FileInput";


const UiInput = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Input</h1>

      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">Basic Input</h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
            <BasicInput />
        </div>
      </div>

      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">File Input</h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
            <FileInput />
        </div>
      </div>

      <div className="ml-80 mt-25">
        <h1 className="font-mono">
          Built by STARK UI at Vercel. The source code is available on GitHub.
        </h1>
      </div>
    </div>
  );
};

export default UiInput;
