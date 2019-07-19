import thunk from "redux-thunk";
import logger from "./logger";
import recessivizer from "./recessivizerMiddleware";
import { applyMiddleware } from "redux";

const indexMiddleware = applyMiddleware(thunk, recessivizer, logger);

export default indexMiddleware;
