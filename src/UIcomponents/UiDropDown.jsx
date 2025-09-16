import React from "react";
import StanderdDorpDown from "../design/StanderdDorpDown";
import BasicDropDown from "../design/BasicDropDown";
import AutoWidth from "../design/AutoWidth";
import ErrorDropDown from "../design/ErrorDropDown";
import DisabledDropDown from "../design/DisabledDropDown";
import ReadOnlyDrapDown from "../design/ReadOnlyDrapDown";
import RequiredDropDown from "../design/RequiredDropDown";
import MultiSelectorDropDown from "../design/MultiSelectorDropDown";
import CheckmarksDropDown from "../design/CheckmarksDropDown";

const UiDropDown = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Drop Down</h1>

      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Standard Drop down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <StanderdDorpDown />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Basic Drop down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <BasicDropDown />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Auto Width Drop Down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <AutoWidth />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Error Drop Down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <ErrorDropDown />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Disabled Drop Down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <DisabledDropDown />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Read Only Drop Down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <ReadOnlyDrapDown />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Required Drop Down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <RequiredDropDown />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Multiple Drop Down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <MultiSelectorDropDown />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Checkmarks Drop Down
        </h1>

        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <CheckmarksDropDown />
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

export default UiDropDown;
