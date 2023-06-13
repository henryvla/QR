import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaneraComponent } from './campanera/campanera.component';
import { SanAntonioComponent } from './san-antonio/san-antonio.component';
import { CongoComponent } from './congo/congo.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { MargaritaComponent } from './margarita/margarita.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  { path: 'Campanera', component: CampaneraComponent },
  { path: 'San-antonio', component: SanAntonioComponent },
  { path: 'Congo', component: CongoComponent },
  { path: 'Tarjeta', component: TarjetaComponent },
  { path: 'Margaritas', component: MargaritaComponent },
  { path: 'Cuadricula', component: TablaComponent },
  { path: 'Tabla', component: TablaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
