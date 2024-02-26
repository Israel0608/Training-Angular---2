import cors from "cors";
import express from "express";
import appConfig from "./2-utils/app-config";
import catchAll from "./4-middleware/catch-all";
import routeNotFound from "./4-middleware/route-not-found";
import dataController from "./6-controllers/data-controller";

// Alt+Shift+O

// Creating the server: 
const server = express();

// Allow CORS access: 
server.use(cors());

// Creating a request.body object containing the request body data:
server.use(express.json());

// Connect our controllers: 
server.use("/api", dataController);

// Route not found: 
server.use(routeNotFound);

// Catch all middleware: 
server.use(catchAll);

// Running the server: 
server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port));
