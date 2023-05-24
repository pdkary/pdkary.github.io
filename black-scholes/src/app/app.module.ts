import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import {  MatListModule } from '@angular/material/list';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { MatDividerModule } from '@angular/material/divider';
import { LinksComponent } from './links/links.component';
import { TitleComponent } from './title/title.component';
import { MatCardModule } from '@angular/material/card';
import { BlackScholesComponent } from './black-scholes/black-scholes.component';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { RubixComponent } from './rubix/rubix.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MinkowskiComponent } from './minkowski/minkowski.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { GraphComponent } from './graph/graph.component';
import { LilRobotComponent } from './lil-robot/lil-robot.component';
import { LilRobotsComponent } from './lil-robots/lil-robots.component';
import { RobotStateTransitionCardComponent } from './robot-state-transition-card/robot-state-transition-card.component';
import { GraphingComponent } from './graphing/graphing.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ProfessionalComponent,
    PersonalComponent,
    LinksComponent,
    TitleComponent,
    BlackScholesComponent,
    RubixComponent,
    MinkowskiComponent,
    GraphComponent,
    LilRobotComponent,
    LilRobotsComponent,
    RobotStateTransitionCardComponent,
    GraphingComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
