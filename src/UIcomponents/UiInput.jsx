import React from "react";
import BasicInput from "../design/BasicInput";
import FileInput from "../design/FileInput";
import DisabledInput from "../design/DisableInput";
import LabelInput from "../design/LabelInput";
import ButtonInput from "../design/ButtonInput";

const UiInput = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Input</h1>

      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Basic Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <BasicInput />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          File Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <FileInput />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Disable Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <DisabledInput />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          With Label Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <LabelInput />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          With Button Input
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <ButtonInput />
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
