import React from "react";
import Tooltip from "@atlaskit/tooltip";
import logo from "~images/logo.svg";
import { container, logoContainer, logoStyle } from "./Home.module.scss";

export default () => (
	<div className={container}>
		<div className={logoContainer}>
			<img className={logoStyle} src={logo} alt="" />
			<Tooltip content="Hire me.">
				<h1>Hover over me to show tooltip!</h1>
			</Tooltip>
		</div>
	</div>
);
