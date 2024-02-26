import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import AudienceModel from "../3-models/audience-model";
import GameModel from "../3-models/game-model";

class DataService {

    public async getAllAudiences(): Promise<AudienceModel[]> {
        const sql = "SELECT * FROM audiences";
        const audiences = await dal.execute(sql)
        return audiences;
    }

    public async getGamesByAudienceId(audienceId: number): Promise<GameModel[]> {
        const sql = "SELECT * FROM games WHERE audienceId = ?";
        const games = await dal.execute(sql, [audienceId])
        return games;
    }

    public async addGame(game: GameModel): Promise<GameModel> {
        game.validate();
        const sql = `INSERT INTO games(audienceId, name, description, price) VALUES ( ?, ?, ?, ?)`;
        const info: OkPacket = await dal.execute(sql, [game.audienceId, game.name, game.description, game.price])
        game.gameId = info.insertId;
        return game;
    }

    public async deleteGame(gameId: number): Promise<void> {
        const sql = `DELETE FROM game WHERE gameId = ?`;
        await dal.execute(sql, [gameId])
    }

}

const dataService = new DataService();

export default dataService;
