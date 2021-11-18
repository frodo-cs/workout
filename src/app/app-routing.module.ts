import { DayComponent } from './day/day.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exercises', component: ExerciseListComponent },
  { path: 'routine/:id', component: DayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
