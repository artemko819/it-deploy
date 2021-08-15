import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Web1Component } from './web1/web1.component';
import { Web2Component } from './web2/web2.component';
import { Web3Component } from './web3/web3.component';
import { Web4Component } from './web4/web4.component';
import { Web5Component } from './web5/web5.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {CityPageComponent} from './city-page/city-page.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PositionPageComponent } from './city-page/position-page/position-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: Web1Component, data: {animation: 'web1'} },
      { path: 'web-2', component: Web2Component, data: {animation: 'web2'} },
      { path: 'web-3', component: Web3Component, data: {animation: 'web3'} },
      { path: 'web-4', component: Web4Component, data: {animation: 'web4'} },
      { path: 'city', component: Web5Component, data: {animation: 'web5'} },
      { path: 'city/:id', component: CityPageComponent, data: {animation: 'city'} },
      {
        path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)
      },
      { path: 'city/:id/:position', component: PositionPageComponent, data: {animation: 'course'} },
      // { path: 'city/:id/junior', component: JuniorPageComponent, data: {animation: 'course'}},
      // { path: 'city/:id/evolution', component: EvolutionPageComponent, data: {animation: 'course'}},
      // { path: 'city/:id/seniors', component: SeniorsPageComponent, data: {animation: 'course'}},
      // { path: 'city/:id/individual', component: IndividulPageComponent, data: {animation: 'course'}},
      {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
     
      // { path: '404', component: PageNotFoundComponent},
      // {path: '**', redirectTo: '/404'}

    ]
  },
 
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
