import React from "react";
import { motion } from "framer-motion";
import BasicDataTable from "../design/BasicDataTabble";
import SelectingTable from "../design/SelectingTable";
import SelectingDataTable from "../design/SelectingDataTable";
import CollapsibleTable from "../design/CollapsibleTable";
import SpanningTable from "../design/SpanningTable";
import VirtualizedTable from "../design/VirtualizedTable";

const UiDataTable = () => {
  return (
    <div className="mt-30 ml-40">
      <motion.h1
        className="ml-50 mt-24 pb-5 text-2xl font-bold"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Data Table
      </motion.h1>

      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Basic Data Table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <BasicDataTable />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Selecting Data Table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <SelectingTable />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Selecting Data Table V2
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-125 rounded-2xl">
          <SelectingDataTable />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Collapsible table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <CollapsibleTable />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Spanning Table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <SpanningTable />
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Virtualized table
        </h1>
        <div className="ml-50 border border-gray-300 w-200 h-100 rounded-2xl">
          <VirtualizedTable />
        </div>
      </motion.div>

      <motion.div
        className="ml-80 mt-25"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="font-mono">
          Built by STARK UI at Vercel. The source code is available on GitHub.
        </h1>
      </motion.div>
    </div>
  );
};

export default UiDataTable;
