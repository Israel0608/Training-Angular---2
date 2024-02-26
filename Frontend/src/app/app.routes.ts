import { Routes } from '@angular/router';
import { InsertComponent } from './components/data-area/insert/insert.component';
import { ListComponent } from './components/data-area/list/list.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { Page404Component } from './components/layout-area/page404/page404.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "list", component: ListComponent },
    { path: "add", component: InsertComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404Component }
];
