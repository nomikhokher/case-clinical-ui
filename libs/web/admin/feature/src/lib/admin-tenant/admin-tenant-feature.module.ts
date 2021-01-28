import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./admin-tenant-list/admin-tenant-list.module').then((m) => m.AdminTenantListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./admin-tenant-create/admin-tenant-create.module').then((m) => m.AdminTenantCreateModule),
      },
      {
        path: ':tenantId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-tenant-detail/admin-tenant-detail.module').then((m) => m.AdminTenantDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./admin-tenant-edit/admin-tenant-edit.module').then((m) => m.AdminTenantEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminTenantFeatureModule {}
