import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import AudienceModel from '../models/audience-model';
import { appConfig } from '../utils/app-config';
import GameModel from '../models/game-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    deleteGame(gameId: number) {
        throw new Error('Method not implemented.');
    }

    public constructor(private http: HttpClient) { }

    public async getAllAudeinces(): Promise<AudienceModel[]> {
        const observable = this.http.get<AudienceModel[]>(appConfig.audiencesUrl)
        const audiences = await firstValueFrom(observable)
        return audiences
    }

    public async getGamesByAudience(audienceId: number): Promise<GameModel[]> {
        const observable = this.http.get<GameModel[]>(appConfig.gamesByAudiencesUrl + audienceId)
        const gifts = await firstValueFrom(observable)
        return gifts
    }

    public async addGame(games: GameModel): Promise<void> {
        const observable = this.http.post<GameModel>(appConfig.gamesUrl, games)
        await firstValueFrom(observable)
    }

    public async delete(gameId: number): Promise<void> {
        const observable = this.http.delete<GameModel>(appConfig.gamesUrl + gameId)
        await firstValueFrom(observable)
      }
}
