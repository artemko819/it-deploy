import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParticlesModule } from 'angular-particle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Web1Component } from './web1/web1.component';
import { Web2Component } from './web2/web2.component';
import { Web3Component } from './web3/web3.component';
import { Web4Component } from './web4/web4.component';
import { Web5Component } from './web5/web5.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CityPageComponent } from './city-page/city-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './admin/shared/classes/token.interceptor';
import { PositionPageComponent } from './city-page/position-page/position-page.component';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MasterklassComponent } from './masterklass/masterklass.component';


@NgModule({
  declarations: [
    AppComponent,
    Web1Component,
    Web2Component,
    Web3Component,
    Web4Component,
    Web5Component,
    MainLayoutComponent,
    CityPageComponent,
    PageNotFoundComponent,
    PositionPageComponent,
    MasterklassComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // BackButtonDisableModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi:true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
