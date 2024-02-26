import { Component, OnInit } from '@angular/core';
import AudienceModel from '../../../models/audience-model';
import { DataService } from '../../../services/data.service';
import GameModel from '../../../models/game-model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface GameService {
  deleteGame(gameId: number): Observable<any>;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  public audiences: AudienceModel[];
  public games: GameModel[];


  public constructor(private dataService: DataService, private router: Router) { } // DI

  public async ngOnInit() {
    try {
      this.audiences = await this.dataService.getAllAudeinces();
    } catch (err: any) { alert(err.message) }
  }

  public async showGames(args: Event) {
    try {
      const select = args.target as HTMLSelectElement; // Elemnt raising the event;
      const audienceId = +select.value
      this.games = await this.dataService.getGamesByAudience(audienceId)
    } catch (err: any) { alert(err.message) }
  }

  public async deleteGame(gameId: number) {
    try {
      await this.dataService.delete(gameId)
      alert("Game has been deleted.")
      this.router.navigateByUrl("/home")
    } catch (err: any) {
      alert(err.message)
    }
  }
}
