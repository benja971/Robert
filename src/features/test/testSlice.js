import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	text: "",
};

export const TextSlice = createSlice({
	name: "showText",
	initialState,

	reducers: {
		changeText: (state, action) => {
			state.text = action.payload;
		},
	},
});

export const { changeText } = TextSlice.actions;

export const selectText = state => {
	console.log(state);
	return state.showText.text;
};

export default TextSlice.reducer;
