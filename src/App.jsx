import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';
import './App.css';

function App() {
    return (
        <div className="m-auto flex flex-col items-center w-[500px]">
            <CarForm />

            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    );
}

export default App;
