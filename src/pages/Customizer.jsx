import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import config from "../config/config";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
	ColorPicker,
	AIPicker,
	FilePicker,
	Tab,
	CustomButton,
} from "../components";

const Customizer = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			{!snap.intro && (
				<>
					<motion.div
						key="custom"
						className="absolute top-0 left-0 z-10"
						{...slideAnimation("left")}
					>
						<div className="flex items-center min-h-screen">
							<div className="editortabs-container tabs">
								{EditorTabs.map((tab) => (
									<Tab key={tab.name} tab={tab} handleClick={() => {}} />
								))}
							</div>
						</div>
					</motion.div>
					<motion.div
						className="absolute z-10 top-5 right-5"
						{...fadeAnimation}
					>
						<CustomButton
							type="filled"
							title="Go Back"
							customStyles="w-fit px-4 py-2.5 font-bold text-sm"
							handleClick={() => (state.intro = true)}
						/>
					</motion.div>

					<motion.div
						className="filtertabs-container"
						{...slideAnimation("up")}
					>
						{FilterTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								isFilterTab
								isACtiveTab=""
								handleClick={() => {}}
							/>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
export default Customizer;
