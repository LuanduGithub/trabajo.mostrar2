import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: 'detalleMenu',
    loadChildren: () => import('./detalle-menu/detalle-menu.module').then(m => m.DetalleMenuModule)
  },
  {
    path: 'detalleMenuDelivery',
    loadChildren: () => import('./detalle-menu-delivery/detalle-menu-delivery.module').then(m => m.DetalleMenuDeliveryModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { preload: true }
  },
  {
    path: 'detalleMenuItems',
    loadChildren: () => import('./detalle-menu-items/detalle-menu-items.module').then(m => m.DetalleMenuItemsModule)
  },
  {
    path: 'detalleMenuDeliveryItems',
    loadChildren: () =>
    import('./detalle-menu-delivery-items/detalle-menu-items-delivery.module').then(m => m.DetalleMenuDeliveryItemsModule)
  },
  {
    path: 'comanda',
    loadChildren: () => import('./comanda/comanda.module').then(m => m.ComandaModule)
  },
  {
    path: 'comandaDelivery',
    loadChildren: () => import('./comandaDelivery/comanda-delivery.module').then(m => m.ComandaDeliveryModule)
  },
  {
    path: 'pedidoConfirmar',
    loadChildren: () => import('./pedidoConfirmar/pedido-confirmar.module').then(m => m.PedidoConfirmarModule)
  },
  {
    path: 'pagoConfirmado',
    loadChildren: () => import('./pedidoConfirmado/pedido-confirmado.module').then(m => m.PedidoConfirmadoModule)
  },
  {
    path: 'pagoFallido',
    loadChildren: () => import('./pedidoFallido/pedido-Fallido.module').then(m => m.PedidoFallidoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,  useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
