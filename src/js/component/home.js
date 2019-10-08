import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}
	render() {
		console.log(this.state);
		let redExtraClass = "";
		if (this.state.clickedLight == "red") redExtraClass = "selected";
		let yellowExtraClass = "";
		if (this.state.clickedLight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = "";
		if (this.state.clickedLight == "green") greenExtraClass = "selected";

		return (
			<div>
				<div className="TrafficLight">
					<div
						className={"RedLight " + redExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
						id="lights"
					/>
					<div
						className={"YellowLight " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
						id="lights"
					/>
					<div
						className={"GreenLight " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
						id="lights"
					/>
				</div>
			</div>
		);
	}
}
