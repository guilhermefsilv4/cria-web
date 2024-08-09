import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    loadComponent: () => import("@screens/home/home.component").then((m) => m.HomeComponent)
  },
  {
    path: "portfolio",
    loadComponent: () => import("@screens/portfolio/portfolio.component").then((m) => m.PortfolioComponent)
  },
  {
    path: "sobre",
    loadComponent: () => import("@screens/aboutus/aboutus.component").then((m) => m.AboutusComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];
