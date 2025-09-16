import React from "react";
import BasicDataTable from "../design/BasicDataTabble";
import SelectingTable from "../design/SelectingTable";
import SelectingDataTable from "../design/SelectingDataTable";
import CollapsibleTable from "../design/CollapsibleTable";
import SpanningTable from "../design/SpanningTable";
import VirtualizedTable from "../design/VirtualizedTable";

const UiDataTable = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Data Table</h1>

      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Basic Data Table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <BasicDataTable />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Selecting Data Table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <SelectingTable />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Selecting Data Table V2
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-125 rounded-2xl">
          <SelectingDataTable />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Collapsible table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <CollapsibleTable />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Spanning Table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <SpanningTable />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Virtualized table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <VirtualizedTable />
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

export default UiDataTable;
