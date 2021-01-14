import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebAuthDataAccessModule, IsLoggedInGuard } from '@metadata/web/auth/data-access'
import { WebCoreDataAccessModule } from '@metadata/web/core/data-access'
import { WebLayoutComponent } from '@metadata/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@metadata/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@metadata/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
    ],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '',
    loadChildren: () => import('@metadata/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), WebCoreDataAccessModule, WebAuthDataAccessModule],
})
export class WebShellFeatureModule {}
