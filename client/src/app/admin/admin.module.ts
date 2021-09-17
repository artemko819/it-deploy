import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './shared/classes/auth.guard';
import { OverviewPageComponent } from './overview-page/overview-page.component';

import { HistoryPageComponent } from './history-page/history-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CategoriesFormComponent } from './categories-page/categories-form/categories-form.component';
import { PositionsFormComponent } from './categories-page/categories-form/positions-form/positions-form.component';
import { PersonPageComponent } from './person-page/person-page.component';
import { ConsultPageComponent } from './consult-page/consult-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';

@NgModule({
  declarations: [
        AdminLayoutComponent, 
        LoginPageComponent, 
        AuthLayoutComponent, 
        RegisterPageComponent, 
        OverviewPageComponent, 
        HistoryPageComponent, 
        AnalyticsPageComponent,
        CategoriesPageComponent, 
        LoaderComponent,
        CategoriesFormComponent, 
        PositionsFormComponent,
        PersonPageComponent,
        ConsultPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: AuthLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          // { path: 'register', component: RegisterPageComponent },         
        ]
      },
      {
        path:'',component: AdminLayoutComponent,canActivate:[AuthGuard],children:[
          { path: 'owerview', component: OverviewPageComponent },
          { path: 'consult', component: ConsultPageComponent },
          {path:"person", component:PersonPageComponent},
          {path:'analitick',component:AnalyticsPageComponent},
          { path: 'categories', component: CategoriesPageComponent },
          { path: 'categories/new', component: CategoriesFormComponent },
          { path: 'categories/:id', component: CategoriesFormComponent },
        ]
      }

    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
