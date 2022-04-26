import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeText } from "./testSlice";

export function Test() {
	const dispatch = useDispatch();
	const [text, setText] = useState("Bonjour");

	return (
		<>
			<span>{text}</span>
			<br />
			<input type='text' name='' id='' placeholder='Your new text' />
			<br />
			<button
				onClick={() => {
					const input = document.querySelector('input[type="text"]');
					const newText = input.value;

					setText(newText);
					dispatch(changeText(newText));
					input.value = "";
				}}
			>
				Change text
			</button>
		</>
	);
}
