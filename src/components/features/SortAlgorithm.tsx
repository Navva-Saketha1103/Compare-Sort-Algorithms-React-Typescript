import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";
import SortAndCompare from '../../utils/sort-and-compare.util';
import { SortAlgorithmProps } from '../../types/SortAlgorithmProps';
import { PieChart } from '@mui/x-charts/PieChart';
import { PieChartData } from '../../models/pie-chart-data.model';

const sortAlgorithms = {
    "Bubble Sort": '1',
    "Insertion Sort": '2',
    "Selection Sort": '3',
    "Heap Sort": '4',
    "Quick Sort": '5',
    "3 Median Quick Sort": '6',
    "Merge Sort": '7'
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const SortAlgorithm = ({ arrayValues, setArrayValues, isArraySorted, setIsArraySorted }: SortAlgorithmProps) => {
    const [algorithms, setAlgorithms] = useState<string[]>([]);
    const [pieChartData, setPieChartData] = useState<PieChartData[]>([]);
    let [selectedAlgos] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof algorithms>) => {
        let {
            target: { value },
        } = event;

        value = String(value);

        setAlgorithms(
            typeof value == 'string' ? value.split(',') : [],
        );
    };

    function getSelectedAlgorithms(selected: string[]) {
        const selectedAlgorithms: string[] = [];

        if (selected && selected.length) {
            Object.entries(sortAlgorithms).map((sortAlgorithm: [string, string]) => {
                if (selected.indexOf(sortAlgorithm[1]) > -1) {
                    selectedAlgorithms.push(sortAlgorithm[0]);
                }
            })
        }

        selectedAlgos = selectedAlgorithms;
        return selectedAlgorithms.join(', ');
    }

    function sortAndCompare() {
        if (!selectedAlgos || !selectedAlgos.length) {
            alert("Select atleast one algorithm...");
            return;
        }

        const sortAndComparision = SortAndCompare.SortAndCompare(selectedAlgos, arrayValues);
        setArrayValues([...sortAndComparision.sortedArray]);
        setPieChartData([...sortAndComparision.algorithmsComparision])
        setIsArraySorted(true);
    }

    return <div className='w-100'>
        <div className='w-100 d-flex align-items-center mb-3'>
            <div className='me-3'>

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="multiple-checkbox-label">Select an Algorithm</InputLabel>
                    <Select
                        labelId="multiple-checkbox-label"
                        id="multiple-checkbox"
                        multiple
                        value={algorithms}
                        onChange={handleChange}
                        input={<OutlinedInput label="Select an Algorithm" />}
                        renderValue={(selected) => getSelectedAlgorithms(selected)}
                        MenuProps={MenuProps}
                    >
                        {
                            Object.entries(sortAlgorithms).map((sortAlgorithm) => {
                                return <MenuItem key={sortAlgorithm[0]} value={sortAlgorithm[1]}>
                                    <Checkbox checked={algorithms.indexOf(sortAlgorithm[1]) > -1} />
                                    <ListItemText primary={sortAlgorithm[0]} />
                                </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </div>
            <div>

                <Button
                    variant="outlined"
                    className='sort-compare-btn'
                    onClick={() => {
                        isArraySorted ? alert("Array is already sorted") : sortAndCompare();
                    }}
                >
                    Sort and Compare
                </Button>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            {
                isArraySorted && pieChartData && (pieChartData.length > 0) && <PieChart
                    series={[
                        {
                            data: pieChartData,
                        },
                    ]}
                    width={1400}
                    height={200}
                />
            }
        </div>
        {isArraySorted && pieChartData && (pieChartData.length > 0) && <p className='text-align-center'>Run Time of Selected Algorithms</p>}
    </div>;
}

export default SortAlgorithm;