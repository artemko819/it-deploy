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
import { OrderPageComponent } from './order-page/order-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CategoriesFormComponent } from './categories-page/categories-form/categories-form.component';
import { PositionsFormComponent } from './categories-page/categories-form/positions-form/positions-form.component';
import { OrderCategoriesComponent } from './order-page/order-categories/order-categories.component';
import { OrderPositionsComponent } from './order-page/order-positions/order-positions.component';
import { PersonPageComponent } from './person-page/person-page.component';
import { ConsultPageComponent } from './consult-page/consult-page.component';

@NgModule({
  declarations: [
        AdminLayoutComponent, 
        LoginPageComponent, 
        AuthLayoutComponent, 
        RegisterPageComponent, 
        OverviewPageComponent, 
        HistoryPageComponent, 
        OrderPageComponent, 
        CategoriesPageComponent, 
        LoaderComponent,
        CategoriesFormComponent, 
        PositionsFormComponent,
        OrderCategoriesComponent, 
        OrderPositionsComponent,
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
          // { path: 'order', component: OrderPageComponent, children:[
          //   {path:"",component:OrderCategoriesComponent},
          //   {path:":id",component:OrderPositionsComponent}
          // ]},
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
