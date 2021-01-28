import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiSidebarPageModule } from '@schema-driven/web/ui/sidebar-page'
import { WebAdminFeatureComponent } from './web-admin-feature.component'

@NgModule({
  declarations: [WebAdminFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebAdminFeatureComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
          {
            path: 'dashboard',
            loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
          },
          {
            path: 'tenants',
            loadChildren: () =>
              import('./admin-tenant/admin-tenant-feature.module').then((m) => m.AdminTenantFeatureModule),
          },
          {
            path: 'users',
            loadChildren: () => import('./admin-user/admin-user-feature.module').then((m) => m.AdminUserFeatureModule),
          },
        ],
      },
    ]),
    WebUiSidebarPageModule,
  ],
})
export class WebAdminFeatureModule {}
