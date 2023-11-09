import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();
    const handleRemove = (id) => dispatch(removeCar(id));
    const carName = useSelector((state) => state.form.name);
    const searchTerm = useSelector((state) => state.cars.searchTerm);

    const carsList = useSelector((state) => state.cars.cars)
        .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((car) => {
            const fontWeight =
                car.name.toLowerCase().includes(carName.toLowerCase()) && carName.length > 0
                    ? 'font-bold'
                    : '';
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
    return <>{carsList}</>;
}

export default CarList;
