import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//componentes
import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadosPage } from '../pages/terminados/terminados';
import { AgregarListaPage } from '../pages/agregar-lista/agregar-lista';

//services
import { DeseosService } from '../providers/deseos.service';

//pipes
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarListaPage,
    FiltroCompletadoPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
