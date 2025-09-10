import React from "react";
import BasicCalender from "../design/BasicCalendar";
import SelectDate from "../design/SelectDate";

const UiCalendar = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Calendar</h1>
      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Basic Calender
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <BasicCalender />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Select Date
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <SelectDate />
        </div>
      </div>
    </div>
  );
};

export default UiCalendar;
