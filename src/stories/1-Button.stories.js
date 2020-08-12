import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { useEffect } from "@storybook/client-api";


export default {
	title: "Button",
	argTypes: {
		children: { control: "text" },
	},
};

export const PrimaryButton = () => {
	useEffect(() => {
		document.getElementById("button").style.backgroundColor = "#FCB406";
		document.getElementById("button").style.height = "55px";
		document.getElementById("button").style.width = "160px";
		document.getElementById("button").style.borderRadius = "30px";
		document.getElementById("button").style.color = "black";
		document.getElementById("button").style.fontFamily = "Roboto";
		document.getElementById("button").style.padding = "0.9375rem 1.875rem";
		document.getElementById("button").style.cursor = "pointer";
		document.getElementById("button").addEventListener("mousemove", 
			function( event ) {   
				// highlight the mouseover target
				event.target.style.backgroundColor = "#f8ce14";});
	});

	return "<button id='button'>Admission &raquo;</button>";
};

const Template = ({ onClick, children }) => {
	const btn = document.createElement("button");
	btn.type = "button";
	btn.innerText = children;
	btn.addEventListener("click", onClick);
	return btn;
};

export const Text = Template.bind({});
Text.args = {
	children: "Button",
	onClick: action("onClick"),
};

export const Emoji = Template.bind({});
Emoji.args = {
	children: "😀 😎 👍 💯",
};

export const TextWithAction = () => {
	const btn = document.createElement("button");
	btn.type = "button";
	btn.innerText = "Trigger Action";
	btn.addEventListener("click", () => action("This was clicked")());
	return btn;
};

TextWithAction.storyName = "With an action";
TextWithAction.parameters = { notes: "My notes on a button with emojis" };

export const ButtonWithLinkToAnotherStory = () => {
	const btn = document.createElement("button");
	btn.type = "button";
	btn.innerText = "Go to Welcome Story";
	btn.addEventListener("click", linkTo("example-introduction--page"));
	return btn;
};

ButtonWithLinkToAnotherStory.storyName = "button with link to another story";
