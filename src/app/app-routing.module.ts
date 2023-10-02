import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { CrewComponent } from './crew/crew.component';

const routes: Routes = [
  { path: 'destination', component: DestinationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'crew', component: CrewComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
