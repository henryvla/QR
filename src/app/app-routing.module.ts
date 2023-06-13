import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaneraComponent } from './campanera/campanera.component';
import { SanAntonioComponent } from './san-antonio/san-antonio.component';
import { CongoComponent } from './congo/congo.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { MargaritaComponent } from './margarita/margarita.component';
import { TablaComponent } from './tabla/tabla.component';
import { ViviendaComponent } from './vivienda/vivienda.component';

const routes: Routes = [
  { path: 'Campanera', component: CampaneraComponent },
  { path: 'San-antonio', component: SanAntonioComponent },
  { path: 'Congo', component: CongoComponent },
  { path: 'Tarjeta', component: TarjetaComponent },
  { path: 'Margaritas', component: MargaritaComponent },
  { path: 'Tabla', component: TablaComponent },
  { path: 'Vivienda', component: ViviendaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
