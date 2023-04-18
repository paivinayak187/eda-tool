import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    fix: "",
    phase: "",
    futureBugs: "",
    allBugsAddressed: ""
}

const takeAwaySlice = createSlice({
    name: "takeAway",
    initialState: initialState,
    reducers: {
        updateFix: (state, action) => {
            state.fix = action.payload
        },
        updatePhase: (state, action) => {
            state.phase = action.payload
        },
        updateFutureBugs: (state, action) => {
            state.futureBugs = action.payload
        },
        updateAllBugsAddressed: (state, action) => {
            state.allBugsAddressed = action.payload
        }
    }
});

export const { updateFix, updatePhase, updateFutureBugs, updateAllBugsAddressed } = takeAwaySlice.actions;
export default takeAwaySlice.reducer;