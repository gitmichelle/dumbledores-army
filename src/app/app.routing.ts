import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlohamoraComponent } from './alohamora/alohamora.component';
import { AboutComponent }   from './about/about.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AlohamoraComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
