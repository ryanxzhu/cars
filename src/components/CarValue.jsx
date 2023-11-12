import { useSelector } from 'react-redux';

function CarValue() {
    const totalValue = useSelector(({ cars: { cars, searchTerm } }) =>
        cars
            .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .reduce((acc, car) => acc + car.cost, 0)
    );

    return <div className="font-semibold ml-auto">Total Value: ${totalValue.toLocaleString()}</div>;
}

export default CarValue;
