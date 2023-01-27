import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
// {
//     product: [],
// }

const cartReducer = createSlice({
    name: 'cart',
    initialState: { initialState },
    reducers: {
        cartData: (state, { payload }) => {
            state.initialState = payload;
        },
    },
});

export default cartReducer.reducer;
export const { cartData } = cartReducer.actions;