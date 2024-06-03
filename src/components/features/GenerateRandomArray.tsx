import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { GenerateRandomArrayProps } from "../../types/GenerateRandomArrayProps";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import SortAndCompare from "../../utils/sort-and-compare.util";

const GenerateRandomArray = ({ arrayValues, setArrayValues, setIsArraySorted }: GenerateRandomArrayProps) => {
  const [size, setSize] = useState<number>(200);
  const [sortType, setSortType] = React.useState("Random");

  const handleChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value as string);
  };

  function generateRandomArray() {
    if (size >= 10000) {
      alert("Please enter a number less than 10000");
      return;
    }

    if (size < 200) {
      alert("Please enter a number greater than or equal to 200");
      return;
    }

    // let newArray = Array.from({ length: size }, () =>
    //   Math.floor(Math.random() * 500)
    // );

    // return newArray;

    const numbers = Array.from({ length: 500 }, (_, i) => i);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers.slice(0, size);
  }

  function generateArray() {
    let randomArray = generateRandomArray();

    if (randomArray) {
      switch (sortType) {
        case "Random":
          setArrayValues(randomArray);
          break;
        case "Sorted":
          const sortedArray = SortAndCompare.MergeSort(randomArray);
          setArrayValues(sortedArray);
          break;
        case "Reverse Sorted":
          const reverseArray = SortAndCompare.MergeSort(randomArray).reverse();
          setArrayValues(reverseArray);
          break;
        case "Almost Sorted":
          const sortedArr = SortAndCompare.MergeSort(randomArray);
          [sortedArr[0], sortedArr[1]] = [sortedArr[1], sortedArr[0]];
          setArrayValues(sortedArr);
          break;
      }
    }

    setIsArraySorted(false);
  }

  useEffect(() => {
    generateArray();
  }, []);

  if (!(arrayValues.length)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex mx-0">
      <div className="me-3">
        <TextField
          id="array-size"
          label="Array Size"
          type="number"
          inputProps={{
            min: 200,
            max: 10000,
            defaultValue: 200,
          }}
          onChange={(e) => {
            setSize(Number(e.target.value));
          }}
        />
      </div>
      <div className="me-3">

        <FormControl sx={{ width: 300 }}>
          <InputLabel id="sort-type-label">Sort Type</InputLabel>
          <Select
            labelId="sort-type-label"
            id="sort-type-select"
            value={sortType}
            label="Sort Type"
            onChange={handleChange}
          >
            <MenuItem value="Random">Random</MenuItem>
            <MenuItem value="Sorted">Sorted</MenuItem>
            <MenuItem value="Reverse Sorted">Reverse Sorted</MenuItem>
            <MenuItem value="Almost Sorted">Almost Sorted</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="d-flex align-items-center">

        <Button
          variant="outlined"
          className="regenerate-btn"
          onClick={() => {
            generateArray();
          }}
        >
          Regenerate
        </Button>
      </div>
    </div>
  );
};

export default GenerateRandomArray;
