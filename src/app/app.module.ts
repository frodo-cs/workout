import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle'

import { DayCardComponent } from './home/day-card/day-card.component';
import { HomeComponent } from './home/home.component';
import { ExerciseCardComponent } from './shared/exercise-card/exercise-card.component';
import { HomeAddDayComponent } from './home/home-add-day/home-add-day.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseAddComponent } from './exercise-list/exercise-add/exercise-add.component';
import { ExerciseDayAddComponent } from './day/exercise-day-add/exercise-day-add.component';
import { DayComponent } from './day/day.component';
import { SetComponent } from './day/set/set.component';
import { SetCardComponent } from './day/set-card/set-card.component';
import { ExerciseFullCardComponent } from './day/exercise-full-card/exercise-full-card.component';
import { AddCardComponent } from './shared/add-card/add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DayCardComponent,
    HomeComponent,
    ExerciseCardComponent,
    HomeAddDayComponent,
    NavigationComponent,
    ExerciseListComponent,
    ExerciseAddComponent,
    ExerciseDayAddComponent,
    DayComponent,
    SetComponent,
    SetCardComponent,
    ExerciseFullCardComponent,
    AddCardComponent
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
    MatCheckboxModule,
    MatSelectModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  entryComponents: [HomeAddDayComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }