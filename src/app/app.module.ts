import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { View3dAreaComponent } from './pages/view-3d-area/view-3d-area.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '3dview', component: View3dAreaComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    View3dAreaComponent,
    SideBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
