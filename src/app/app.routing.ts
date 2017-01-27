import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlohamoraComponent } from './alohamora/alohamora.component';
import { AboutComponent }   from './about/about.component';
import { MembersComponent }   from './members/members.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AlohamoraComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members',
    component: MembersComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
