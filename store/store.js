import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../components/features/tickets/ticketSlice";
import whyReducer from "../components/features/whys/whySlice";
import takeAwaysReducer from "../components/features/take-aways/takeAwaySlice";
import genericReducer from "../components/wizards/genericSlice";

const store = configureStore({
    reducer: {
        generic: genericReducer,
        ticket: ticketReducer,
        whys: whyReducer,
        takeAways: takeAwaysReducer
    }
});

export default store;