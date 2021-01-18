import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebTenantFeatureComponent } from './web-tenant-feature.component'

@NgModule({
  declarations: [WebTenantFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebTenantFeatureComponent,
        children: [
          { path: '', loadChildren: () => import('./tenant-list/tenant-list.module').then((m) => m.TenantListModule) },
          {
            path: 'create',
            loadChildren: () => import('./tenant-create/tenant-create.module').then((m) => m.TenantCreateModule),
          },
          {
            path: ':tenantId',
            children: [
              {
                path: '',
                loadChildren: () => import('./tenant-detail/tenant-detail.module').then((m) => m.TenantDetailModule),
              },
              {
                path: 'edit',
                loadChildren: () => import('./tenant-edit/tenant-edit.module').then((m) => m.TenantEditModule),
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export class WebTenantFeatureModule {}
