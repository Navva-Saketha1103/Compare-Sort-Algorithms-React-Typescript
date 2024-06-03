import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import GenerateRandomArray from "./GenerateRandomArray";
import { GraphRepresentionProps } from "../../types/GraphRepresentionProps";

const GraphRepresentation = ({ arrayValues, setArrayValues, setIsArraySorted }: GraphRepresentionProps) => {
  return (
    <div>
      <GenerateRandomArray
        arrayValues={arrayValues}
        setArrayValues={setArrayValues}
        setIsArraySorted={setIsArraySorted}
      />
      {arrayValues.length > 0 && (
        <BarChart
          xAxis={[
            {
              id: "arrayIndexes",
              data: Object.keys(arrayValues).map(Number),
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: arrayValues,
            },
          ]}
          width={1500}
          height={400}
        />
      )}
      {arrayValues.length > 0 && <p className="text-align-center">Represents array values respective to indexes</p>}
    </div>
  );
};

export default GraphRepresentation;
