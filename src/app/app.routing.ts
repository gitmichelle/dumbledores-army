import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlohamoraComponent } from './alohamora/alohamora.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AlohamoraComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
