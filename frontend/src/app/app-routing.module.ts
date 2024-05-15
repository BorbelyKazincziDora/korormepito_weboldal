import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutComponent} from "./components/about/about.component";
import {ServicesComponent} from "./components/services/services.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {PricesComponent} from "./components/prices/prices.component";
import {ReservationComponent} from "./components/reservation/reservation.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
