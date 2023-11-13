import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ lightGlow, setLightGlow ] = useState("")
	return (
		<div className="center">
			<div>
				<div className="trafficPole"></div>
				<div className="trafficLight">
					<div onClick={() => setLightGlow("red")} className={"light red"+((lightGlow === "red") ? " glow" : "")}></div>
					<div onClick={() => setLightGlow("yellow")} className={"light yellow"+((lightGlow === "yellow") ? " glow" : "")}></div>
					<div onClick={() => setLightGlow("green")} className={"light green"+((lightGlow === "green") ? " glow" : "")}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
