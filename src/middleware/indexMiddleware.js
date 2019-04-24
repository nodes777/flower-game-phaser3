import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

const indexMiddleware = applyMiddleware(thunk, logger);

export default indexMiddleware;
