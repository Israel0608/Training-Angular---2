import Joi, { string } from "joi";
import { Validation } from "./error-models";

class GameModel {
    public gameId: number;
    public audienceId: number;
    public name: string;
    public description: string;
    public price: number;

    public constructor(game: GameModel) {
        this.gameId = game.gameId;
        this.audienceId = game.audienceId;
        this.name = game.name;
        this.description = game.description;
        this.price = game.price;
    }

    private static ValidateSchema = Joi.object({
        gameId: Joi.number().forbidden(),
        audienceId: Joi.number().integer().required(),
        name: Joi.string().required().min(2).max(200),
        description: Joi.string().required().min(2).max(100),
        price: Joi.number().required().min(0).max(1000)
    })

    public validate(): void {
        const result = GameModel.ValidateSchema.validate(this);
        if (result.error?.message) throw new Validation(result.error.message)
    }
}


export default GameModel;