import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../components/features/tickets/ticketSlice";
import whyReducer from "../components/features/whys/whySlice";
import takeAways from "../components/features/take-aways/takeAwaySlice";

const store = configureStore({
    reducer: {
        ticket: ticketReducer,
        whys: whyReducer,
        takeAways: takeAways
    }
});

export default store;