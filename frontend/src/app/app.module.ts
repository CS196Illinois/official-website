import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { StaffComponent } from './pages/staff/staff.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'staff', component: StaffComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ResourcesComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
