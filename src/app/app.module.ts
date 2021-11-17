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

import { DayCardComponent } from './home/day-card/day-card.component';
import { HomeComponent } from './home/home.component';
import { ExerciseCardComponent } from './home/exercise-card/exercise-card.component';
import { HomeAddDayComponent } from './home/home-add-day/home-add-day.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    DayCardComponent,
    HomeComponent,
    ExerciseCardComponent,
    HomeAddDayComponent,
    NavigationComponent
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
    ]),
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  entryComponents: [HomeAddDayComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }