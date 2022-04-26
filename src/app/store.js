import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/test/testSlice";

export const store = configureStore({
	reducer: {
		showText: textReducer,
	},
});
