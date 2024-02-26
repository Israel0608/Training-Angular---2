import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import GameModel from "../3-models/game-model";
import StatusCode from "../3-models/status-codes";

const router = express.Router();

router.get("/audiences", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const audiences = await dataService.getAllAudiences();
        response.json(audiences)
    }
    catch (err: any) { next(err); }
});

router.get("/games-by-audiences/:audienceId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const audienceId = +request.params.audienceId;
        const games = await dataService.getGamesByAudienceId(audienceId);
        response.json(games)
    }
    catch (err: any) { next(err); }
});

router.post("/games", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const game = new GameModel(request.body)
        const addedGame = await dataService.addGame(game);
        response.status(StatusCode.Created).json(addedGame);
    }
    catch (err: any) { next(err); }
});

router.delete("/games/:gameId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gameId = +request.params.gameId
        await dataService.deleteGame(gameId)
        response.sendStatus(StatusCode.NoContent)
    }
    catch (err: any) { next(err); }
});


export default router;
