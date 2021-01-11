import React, { Component, Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import FlowerTable from "../FlowerTable/FlowerTable";
import Punnett from "./Punnett";
import Dashboard from "../Dashboard/Dashboard";

import "../../css/App.css";
import "../../css/containerTransitions.css";

class BottomContainer extends Component {
	// viewsArr = ["flowertable", "punnett", "dashboard"];
	state = {
		view: 1,
		prevView: null,
	};

	viewGoLeft = () => {
		this.setState({ punnettExit: "punnett-exit-right-active" }, () => {
			this.setState({
				view: this.state.view - 1,
				prevView: this.state.view,
			});
		});
	};

	viewGoRight = () => {
		this.setState({ punnettExit: "punnett-exit-left-active" }, () => {
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
							}
						})()}
					</div>
				</button>
				<TransitionGroup>
					{(() => {
						switch (this.state.view) {
							case 0:
								return (
									<CSSTransition
										key={0}
										in={0 === this.state.view}
										timeout={500}
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
										timeout={500}
										classNames={{
											enter: `${
												this.state.prevView == 0
													? "punnett-enter-right"
													: "punnett-enter-left"
											}`,
											enterActive: `${
												this.state.prevView == 0
													? "punnett-enter-right-active"
													: "punnett-enter-left-active"
											}`,
											exit: `punnett-exit`,
											exitActive: `${this.state.punnettExit}`,
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
										timeout={500}
										classNames={{
											enter: "item-enter-right",
											enterActive: "item-enter-right-active",
											exit: "item-exit-right",
											exitActive: "item-exit-right-active",
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
					<div className="rightArrow">
						{(() => {
							switch (this.state.view) {
								case 0:
									return "Punnett";
								case 1:
									return "Options";
								case 2:
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
