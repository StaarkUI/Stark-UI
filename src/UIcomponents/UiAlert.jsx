import React from "react";
import CustomAlert from "../design/CustomAlert";
import CustomAlertBtn from "../design/CustomAlertBtn";

const UiAlert = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Alert</h1>

      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Custom Alert
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <CustomAlert />
        </div>
      </div>

      <div className="mt-15">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Custom Alert Button
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <CustomAlertBtn />
        </div>
      </div>

      <div className="ml-80 mt-25 mb-20">
        <h1 className="font-mono">
          Built by STARK UI at Vercel. The source code is available on GitHub.
        </h1>
      </div>
    </div>
  );
};

export default UiAlert;

