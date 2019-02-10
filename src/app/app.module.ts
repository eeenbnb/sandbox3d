import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopAreaComponent } from './components/top-area/top-area.component';

import { HomeComponent } from './pages/home/home.component';
import { PinBallComponent } from './pages/pin-ball/pin-ball.component';
import { View3dAreaComponent } from './pages/view-3d-area/view-3d-area.component';

import { PageEventService } from './services/page-event/page-event.service';
import { PageAnimationDirective } from './directives/page-animation/page-animation.directive';
import { PageFixedDirective,PageFixedSideBarDirective } from './directives/page-fixed/page-fixed.directive';
import { PosteffectComponent } from './pages/posteffect/posteffect.component';
import { MovieOneComponent } from './pages/movie-one/movie-one.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '3dview', component: View3dAreaComponent },
  { path: 'pinball', component: PinBallComponent },
  { path: 'posteffect', component: PosteffectComponent },
  { path: 'movie1', component: MovieOneComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    View3dAreaComponent,
    SideBarComponent,
    HomeComponent,
    PageAnimationDirective,
    TopAreaComponent,
    PageFixedDirective,
    PageFixedSideBarDirective,
    PinBallComponent,
    PosteffectComponent,
    MovieOneComponent
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
