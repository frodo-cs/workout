import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

import { DayComponent } from './day/day.component';
import { HomeComponent } from './home/home.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { HomeAddDayComponent } from './home/home-add-day/home-add-day.component';


@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    HomeComponent,
    ExerciseComponent,
    ExerciseCardComponent,
    HomeAddDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ])
  ],
  entryComponents: [HomeAddDayComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
