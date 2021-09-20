import { NgModule } from '@angular/core';
import { FadeComponent } from './fade/fade.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { SlideComponent } from './slide/slide.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'parallax',
    component: ParallaxComponent
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'fade',
    component: FadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
