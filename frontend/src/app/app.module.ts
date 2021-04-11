import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { StaffComponent } from './pages/staff/staff.component';
import { LecturesTableComponent } from './components/lectures-table/lectures-table.component';
import { PersonComponent } from './components/person/person.component';
import { GradesComponent } from './pages/grades/grades.component';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'staff', component: StaffComponent},
  { path: 'grades', component: GradesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ResourcesComponent,
    StaffComponent,
    LecturesTableComponent,
    PersonComponent,
    GradesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
