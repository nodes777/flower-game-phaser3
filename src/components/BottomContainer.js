import React, { Component, Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import FlowerTable from "./FlowerTable/FlowerTable";
import Punnett from "./Punnett";
import Dashboard from "./Dashboard/Dashboard";

import "../css/App.css";

class BottomContainer extends Component {
	viewsArr = ["flowertable", "punnett", "dashboard"];
	state = {
		view: 1,
		prevView: null
	};

	viewGoLeft = () => {
		this.setState({ view: this.state.view - 1, prevView: this.state.view });
	};

	viewGoRight = () => {
		this.setState({ view: this.state.view + 1, prevView: this.state.view });
	};

	render() {
		console.log(this.state);
		return (
			<div className="App bottomContainer">
				<button
					className="arrowButtons"
					disabled={!this.state.view >= 1}
					onClick={this.viewGoLeft}
				>
					Left
				</button>
				<TransitionGroup>
					{(() => {
						switch (this.state.view) {
							case 0:
								return (
									<CSSTransition
										key={0}
										in={0 === this.state.view}
										timeout={1000}
										unmountOnExit
										classNames={{
											enter: "item-enter-left",
											enterActive:
												"item-enter-left-active",
											exit: "item-exit-left",
											exitActive: "item-exit-left-active"
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
										timeout={1000}
										unmountOnExit
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
											exit: "",
											exitActive: ""
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
										timeout={1000}
										unmountOnExit
										classNames={{
											enter: "item-enter-right",
											enterActive:
												"item-enter-right-active",
											exit: "item-exit-right",
											exitActive: "item-exit-right-active"
										}}
									>
										<Dashboard />
									</CSSTransition>
								);
							default:
								return null;
						}
					})()}
				</TransitionGroup>

				<button
					className="arrowButtons"
					disabled={this.state.view >= 2}
					onClick={this.viewGoRight}
				>
					right
				</button>
			</div>
		);
	}
}
export default BottomContainer;

// {(() => {
// 					switch (this.state.view) {
// 						case 0:
// 							return <FlowerTable />;
// 						case 1:
// 							return <Punnett />;
// 						case 2:
// 							return <Dashboard />;
// 						default:
// 							return null;
// 					}
// 				})()}
