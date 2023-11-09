import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.cars.push(action.payload);
        },
        removeCar(state, action) {
            for (let i = 0; i < state.cars.length; i++) {
                if (state.cars[i].id === action.payload) {
                    state.cars.splice(i, 1);
                }
            }
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
