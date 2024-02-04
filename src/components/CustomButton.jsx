import { useSnapshot } from "valtio";
import state from "../store";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ type, title, handleClick, customStyles }) => {
	const snap = useSnapshot(state);
	const generateStyles = (type) => {
		if (type === "filled") {
			return {
				backgroundColor: snap.color,
				color: "#fff",
			};
		}
	};
	return (
		<>
			<button
				className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
				style={generateStyles(type)}
				onClick={handleClick}
			>
				{title}
			</button>
		</>
	);
};
export default CustomButton;
