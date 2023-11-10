import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
    const dispatch = useDispatch();
    const { carName, carCost } = useSelector((state) => {
        return {
            carName: state.form.name,
            carCost: state.form.cost,
        };
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addCar({
                id: crypto.randomUUID(),
                name: carName,
                cost: carCost,
            })
        );
        // dispatch(changeName(''));
        // dispatch(changeCost(0));
    };

    return (
        <div className="border-b border-black">
            <form className="flex items-end justify-between w-[500px] my-3">
                <div className="flex flex-col">
                    <label htmlFor="name">Car Name</label>
                    <input
                        type="text"
                        name="name"
                        value={carName}
                        onChange={(e) => dispatch(changeName(e.target.value))}
                        className="border border-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Car Value</label>
                    <input
                        type="number"
                        name="value"
                        value={carCost || ''}
                        onChange={(e) => dispatch(changeCost(Number(e.target.value)))}
                        className="border border-black"
                    />
                </div>
                <button className="border border-black px-8 rounded h-6" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CarForm;
