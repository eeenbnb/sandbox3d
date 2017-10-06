import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { View3dAreaComponent } from './pages/view-3d-area/view-3d-area.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './pages/home/home.component';

import { PageEventService } from './services/page-event/page-event.service';
import { PageAnimationDirective } from './directives/page-animation/page-animation.directive';
import { TopAreaComponent } from './components/top-area/top-area.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '3dview', component: View3dAreaComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    View3dAreaComponent,
    SideBarComponent,
    HomeComponent,
    PageAnimationDirective,
    TopAreaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [PageEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
