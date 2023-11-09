import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.cars.searchTerm);
    return (
        <div className="flex justify-between my-5 w-full">
            <h3 className="font-semibold">My Cars</h3>
            <div>
                Search
                <input
                    type="text"
                    className="border border-black ml-2"
                    value={searchTerm}
                    onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                />
            </div>
        </div>
    );
}

export default CarSearch;
