import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    fix: "",
    introductionSource: "",
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
        updateIntroductionSource: (state, action) => {
            state.introductionSource = action.payload
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

export const { updateFix, updatePhase, updateFutureBugs, updateAllBugsAddressed, updateIntroductionSource } = takeAwaySlice.actions;
export default takeAwaySlice.reducer;