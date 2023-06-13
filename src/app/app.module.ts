import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';

//QR
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';

//primeng
import {CardModule} from 'primeng/card';
import { CampaneraComponent } from './campanera/campanera.component';
import { SanAntonioComponent } from './san-antonio/san-antonio.component';
import { CongoComponent } from './congo/congo.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { MargaritaComponent } from './margarita/margarita.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CampaneraComponent,
    SanAntonioComponent,
    CongoComponent,
    TarjetaComponent,
    MargaritaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
