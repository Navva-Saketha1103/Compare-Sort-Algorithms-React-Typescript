export type SortAlgorithmProps = {
  arrayValues: number[];
  setArrayValues: React.Dispatch<React.SetStateAction<number[]>>;
  setIsArraySorted: React.Dispatch<React.SetStateAction<boolean>>;
  isArraySorted: boolean;
};
