import { Switch } from "@mui/material";
import { PieChartData } from "../models/pie-chart-data.model";
import { SortAndCompareModel } from "../models/sort-and-compare";
import { setInterval } from "timers";

/**
 * A utility class for Sorting Algorithms
**/
export default class SortAndCompare {
  static BubbleSort(arrayValues: number[]): number[] {
    let n = arrayValues.length;
    let isSwapped: boolean;

    do {
      isSwapped = false;
      for (let i = 0; i < n; i++) {
        if (arrayValues[i] > arrayValues[i + 1]) {
          let temp = arrayValues[i];
          arrayValues[i] = arrayValues[i + 1];
          arrayValues[i + 1] = temp;
          isSwapped = true;
        }
      }
    } while (isSwapped);

    return arrayValues;
  }

  static InsertionSort(arrayValues: number[]): number[] {
    for (let i = 1; i < arrayValues.length; i++) {
      let key = arrayValues[i];
      let j = i - 1;
      while (j >= 0 && arrayValues[j] > key) {
        arrayValues[j + 1] = arrayValues[j];
        j = j - 1;
      }
      arrayValues[j + 1] = key;
    }
    return arrayValues;
  }

  static SelectionSort(arrayValues: number[]): number[] {
    for (let i = 0; i < arrayValues.length; i++) {
      let minI = i;
      for (let j = i + 1; j < arrayValues.length; j++) {
        if (arrayValues[j] < arrayValues[minI]) {
          minI = j;
        }
      }
      if (minI !== i) {
        [arrayValues[i], arrayValues[minI]] = [arrayValues[minI], arrayValues[i]];
      }
    }
    return arrayValues;
  }

  static Heap(arrayValues: number[], n: number, i: number): void {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arrayValues[left] > arrayValues[largest]) {
      largest = left;
    }

    if (right < n && arrayValues[right] > arrayValues[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arrayValues[i], arrayValues[largest]] = [arrayValues[largest], arrayValues[i]];
      this.Heap(arrayValues, n, largest);
    }
  };

  static HeapSort(arrayValues: number[]): number[] {
    const n = arrayValues.length;
    let i = Math.floor(n / 2) - 1, j = n-1;

    while (i >= 0){
      this.Heap(arrayValues, n, i);
      i--;
    }

    while (j >= 0){
      [arrayValues[0], arrayValues[i]] = [arrayValues[i], arrayValues[0]];
      this.Heap(arrayValues, i, 0);
      j--;
    }

    return arrayValues;
  }

  static Partition(arrayValues: number[], left: number, right: number): number {
    const p = arrayValues[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (arrayValues[j] < p) {
        [arrayValues[i], arrayValues[j]] = [arrayValues[j], arrayValues[i]];
        i++;
      }
    }
    [arrayValues[i], arrayValues[right]] = [arrayValues[right], arrayValues[i]];
    return i;
  }

  static QuickSort(arrayValues: number[], left = 0, right = arrayValues.length - 1): number[] {
    if (left < right) {
      const pivotI = this.Partition(arrayValues, left, right);
      this.QuickSort(arrayValues, left, pivotI - 1);
      this.QuickSort(arrayValues, pivotI + 1, right);
    }
    return arrayValues;
  }

  static MedianOfThree(arrayValues: number[], left: number, right: number): number {
    const mid = Math.floor((right + left) / 2);
    if (arrayValues[left] > arrayValues[mid]) {
      [arrayValues[left], arrayValues[mid]] = [arrayValues[mid], arrayValues[left]];
    }

    if (arrayValues[left] > arrayValues[right]) {
      [arrayValues[left], arrayValues[right]] = [arrayValues[right], arrayValues[left]];
    } 
    if (arrayValues[mid] > arrayValues[right]){
      [arrayValues[mid], arrayValues[right]] = [arrayValues[right], arrayValues[mid]];
    } 
    return arrayValues[mid];
  }

  static PartitionFor3Median(arrayValues: number[], left: number, right: number): number {
    const pivot = this.MedianOfThree(arrayValues, left, right);
    let i = left;
    let j = right;

    while (true) {
      while (arrayValues[i] < pivot) {
        i++;
      }
      while (arrayValues[j] > pivot) {
        j--;
      }
      if (i >= j) {
        return j;
      }
      [arrayValues[i], arrayValues[j]] = [arrayValues[j], arrayValues[i]]; // Swap
    }
  }

  static QuickSort3Median(arrayValues: number[], left: number = 0, right: number = arrayValues.length - 1): number[] {
    if (left < right) {
      const pivotIndex = this.PartitionFor3Median(arrayValues, left, right);
      this.QuickSort3Median(arrayValues, left, pivotIndex - 1);
      this.QuickSort3Median(arrayValues, pivotIndex + 1, right);
    }
    return arrayValues;
  }

  static Merge(left: number[], right: number[]): number[] {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    while (leftIndex < left.length) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
    return resultArray;
  }

  static MergeSort(arrayValues: number[]): number[] {
    if (arrayValues.length <= 1) return arrayValues;
    const mid = Math.floor(arrayValues.length / 2);
    const left = arrayValues.slice(0, mid);
    const right = arrayValues.slice(mid);
    return this.Merge(this.MergeSort(left), this.MergeSort(right));
  }

  static SortAndCompare(algorithms: string[], arrayValues: number[]): SortAndCompareModel {
    const algorithmsComparisions: PieChartData[] = [];
    let sortedArray: number[] = [];
    let startTime: number;
    let endTime: number;
    let copiedArray = [...arrayValues];

    algorithms.forEach((algorithm, i) => {
      arrayValues = [...copiedArray];

      switch (algorithm) {
        case "Bubble Sort":
          startTime = performance.now();
          sortedArray = this.BubbleSort(arrayValues);
          endTime = performance.now();
          break;
        case "Insertion Sort":
          startTime = performance.now();
          sortedArray = this.InsertionSort(arrayValues);
          endTime = performance.now();
          break;
        case "Selection Sort":
          startTime = performance.now();
          sortedArray = this.SelectionSort(arrayValues);
          endTime = performance.now();
          break;
        case "Heap Sort":
          startTime = performance.now();
          sortedArray = this.HeapSort(arrayValues);
          endTime = performance.now();
          break;
        case "Quick Sort":
          startTime = performance.now();
          sortedArray = this.QuickSort(arrayValues);
          endTime = performance.now();
          break;
        case "3 Median Quick Sort":
          startTime = performance.now();
          sortedArray = this.QuickSort3Median(arrayValues);
          endTime = performance.now();
          break;
        case "Merge Sort":
          startTime = performance.now();
          sortedArray = this.MergeSort(arrayValues);
          endTime = performance.now();
          break;
      }

      const runTime = (endTime - startTime) / 1000;
      algorithmsComparisions.push({
        id: i + 1,
        value: runTime,
        label: algorithm + " - " + runTime.toFixed(6)
      });
    })

    const sortAndCompare: SortAndCompareModel = {
      algorithmsComparision: algorithmsComparisions,
      sortedArray: sortedArray
    };

    return sortAndCompare;
  }
}