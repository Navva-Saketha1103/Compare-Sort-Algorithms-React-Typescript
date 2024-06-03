import GraphRepresentation from '../components/features/GraphRepresentation';
import SortAlgorithm from '../components/features/SortAlgorithm';
import { useState } from 'react';

const RunTimeComparision = () => {
    const [arrayValues, setArrayValues] = useState<number[]>([]);
    const [isArraySorted, setIsArraySorted] = useState<boolean>(false);

    return <div className='d-flex flex-column align-items-center justify-content-center'>
        <h1 className='my-5'>Sort and Compare Run Time of Algorithms</h1>
        <GraphRepresentation arrayValues={arrayValues} setArrayValues={setArrayValues} setIsArraySorted={setIsArraySorted} />
        <SortAlgorithm arrayValues={arrayValues} setArrayValues={setArrayValues} isArraySorted={isArraySorted} setIsArraySorted={setIsArraySorted} />
    </div>;
}

export default RunTimeComparision;