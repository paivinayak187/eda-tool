import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trigger: "",
    whyThisCustomer: "",
    whys: Array(5).fill({ text: "" })
};

const whySlice = createSlice({
    name: "why",
    initialState: initialState,
    reducers: {
        updateTrigger: (state, action) => {
            state.trigger = action.payload
        },
        updateWhyThisCustomer: (state, action) => {
            state.whyThisCustomer = action.payload
        },
        updateWhys: (state, action) => {
            console.log(`VPAI updateWhys: action = ${JSON.stringify(action)}`);
            console.log(`VPAI updateWhys: state.whys = ${JSON.stringify(state.whys)}`);
            const why = state.whys[action.payload.index];
            why.text = action.payload.value;
        },
        addNewWhy: (state, action) => {
            console.log(`VPAI addNewWhy: action = ${JSON.stringify(action)}`);
            console.log(`VPAI addNewWhy: state.whys = ${JSON.stringify(state.whys)}`);
            state.whys.push({ text: "" });
        },
    }
});

export const { updateTrigger, updateWhyThisCustomer, updateWhys, addNewWhy } = whySlice.actions;
export default whySlice.reducer;