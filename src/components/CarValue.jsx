import { useSelector } from 'react-redux';

function CarValue() {
    const searchTerm = useSelector((state) => state.cars.searchTerm);
    const totalValue = useSelector((state) => state.cars.cars)
        .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc, cur) => {
            return acc + cur.cost;
        }, 0);

    return <div className="font-semibold ml-auto">Total Value: ${totalValue.toLocaleString()}</div>;
}

export default CarValue;
