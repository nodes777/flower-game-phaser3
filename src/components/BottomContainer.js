import React, { Component, Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import FlowerTable from "./FlowerTable/FlowerTable";
import Punnett from "./Punnett";
import Dashboard from "./Dashboard/Dashboard";

import "../css/App.css";

class BottomContainer extends Component {
	viewsArr = ["flowertable", "punnett", "dashboard"];
	state = {
		view: 1
	};

	viewGoLeft = () => {
		this.setState({ view: this.state.view - 1 });
	};

	viewGoRight = () => {
		this.setState({ view: this.state.view + 1 });
	};

	render() {
		return (
			<div className="App bottomContainer">
				<button
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
										timeout={500}
										unmountOnExit
										classNames="item"
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
										unmountOnExit
										classNames="item"
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
										unmountOnExit
										classNames="item"
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
