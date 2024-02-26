import { Component, OnInit } from '@angular/core';
import AudienceModel from '../../../models/audience-model';
import GameModel from '../../../models/game-model';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent implements OnInit {

  public game = new GameModel();
  public audiences: AudienceModel[];

  public constructor(private dataService: DataService, private router: Router) { } // DI
  public async ngOnInit() {
    try {
      this.audiences = await this.dataService.getAllAudeinces();
    } catch (err: any) { alert(err.message) }
  }

  public async send() {
    try {
      await this.dataService.addGame(this.game);
      alert("Game has been added.")
      this.router.navigateByUrl("/list")

    } catch (err: any) { alert(err.message) }
  }
}
