import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();
    const handleRemove = (id) => dispatch(removeCar(id));

    const { carsList, name } = useSelector(({ cars: { cars, searchTerm }, form: { name } }) => {
        const carsList = cars.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return { carsList, name };
    });

    const renderedCarsList = carsList.map((car) => {
        const fontWeight =
            name && car.name.toLowerCase().includes(name.toLowerCase()) ? 'font-bold' : '';
        return (
            <div
                key={car.id}
                className="flex justify-between w-full border border-black bg-gray-100 p-2 mb-3"
            >
                <h3 className={fontWeight}>
                    {car.name} - ${car.cost.toLocaleString()}
                </h3>
                <button
                    onClick={() => handleRemove(car.id)}
                    className="bg-white border border-black px-4 rounded"
                >
                    Delete
                </button>
            </div>
        );
    });
    return <>{renderedCarsList}</>;
}

export default CarList;
