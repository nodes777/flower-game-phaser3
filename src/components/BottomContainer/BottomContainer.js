import React, { Component, Fragment } from "react";
import {
	TransitionGroup,
	CSSTransition,
	SwitchTransition,
} from "react-transition-group";

import FlowerTable from "../FlowerTable/FlowerTable";
import Punnett from "./Punnett";
import Dashboard from "../Dashboard/Dashboard";

import "../../css/App.css";
import "../../css/containerTransitions.css";
import AboutScreen from "./AboutScreen";

class BottomContainer extends Component {
	// viewsArr = ["flowertable", "punnett", "dashboard"];
	state = {
		view: 1,
		prevView: null,
	};

	viewGoLeft = () => {
		this.setState({ centerScreenExit: "item-exit-right-active" }, () => {
			this.setState({
				view: this.state.view - 1,
				prevView: this.state.view,
			});
		});
	};

	viewGoRight = () => {
		this.setState({ centerScreenExit: "item-exit-left-active" }, () => {
			this.setState({
				view: this.state.view + 1,
				prevView: this.state.view,
			});
		});
	};

	render() {
		return (
			<div className="App bottomContainer">
				<button
					className="arrowButtons"
					disabled={!this.state.view >= 1}
					onClick={this.viewGoLeft}
				>
					<div className="leftArrow">
						{(() => {
							switch (this.state.view) {
								case 0:
									return "";
								case 1:
									return "Flower Table";
								case 2:
									return "Punnett";
								case 3:
									return "Options";
							}
						})()}
					</div>
				</button>
				<SwitchTransition mode={"out-in"}>
					{(() => {
						switch (this.state.view) {
							case 0:
								return (
									<CSSTransition
										key={0}
										in={0 === this.state.view}
										timeout={300}
										classNames={{
											enter: "item-enter-left",
											enterActive: "item-enter-left-active",
											exit: "item-exit-left",
											exitActive: "item-exit-left-active",
										}}
									>
										<FlowerTable />
									</CSSTransition>
								);
							case 1:
								return (
									<CSSTransition
										key={1}
										in={1 === this.state.view}
										timeout={300}
										classNames={{
											enter: `${
												this.state.prevView == 0
													? "item-enter-right"
													: "item-enter-left"
											}`,
											enterActive: `${
												this.state.prevView == 0
													? "item-enter-right-active"
													: "item-enter-left-active"
											}`,
											exit: `item-exit`,
											exitActive: `${this.state.centerScreenExit}`,
										}}
									>
										<Punnett />
									</CSSTransition>
								);
							case 2:
								return (
									<CSSTransition
										key={2}
										in={2 === this.state.view}
										timeout={300}
										classNames={{
											enter: `${
												this.state.prevView == 1
													? "item-enter-right"
													: "item-enter-left"
											}`,
											enterActive: `${
												this.state.prevView == 1
													? "item-enter-right-active"
													: "item-enter-left-active"
											}`,
											exit: `item-exit`,
											exitActive: `${this.state.centerScreenExit}`,
										}}
									>
										<Dashboard />
									</CSSTransition>
								);
							case 3:
								return (
									<CSSTransition
										key={3}
										in={3 === this.state.view}
										timeout={300}
										classNames={{
											enter: "item-enter-right",
											enterActive: "item-enter-right-active",
											exit: "item-exit-right",
											exitActive: "item-exit-right-active",
										}}
									>
										<AboutScreen />
									</CSSTransition>
								);
							default:
								return null;
						}
					})()}
				</SwitchTransition>

				<button
					className="arrowButtons"
					disabled={this.state.view >= 3}
					onClick={this.viewGoRight}
				>
					<div className="rightArrow">
						{(() => {
							switch (this.state.view) {
								case 0:
									return "Punnett";
								case 1:
									return "Options";
								case 2:
									return "About";
								case 3:
									return "";
							}
						})()}
					</div>
				</button>
			</div>
		);
	}
}
export default BottomContainer;
