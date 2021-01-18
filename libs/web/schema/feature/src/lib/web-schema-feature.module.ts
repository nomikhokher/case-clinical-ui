import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebSchemaFeatureComponent } from './web-schema-feature.component'

@NgModule({
  declarations: [WebSchemaFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebSchemaFeatureComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./tenant-picker/tenant-picker.module').then((m) => m.TenantPickerModule),
          },

          {
            path: ':tenantId',
            children: [
              {
                path: '',
                loadChildren: () => import('./schema-list/schema-list.module').then((m) => m.SchemaListModule),
              },
              {
                path: 'create',
                loadChildren: () => import('./schema-create/schema-create.module').then((m) => m.SchemaCreateModule),
              },
              {
                path: ':schemaId',
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                      import('./schema-detail/schema-detail.module').then((m) => m.SchemaDetailModule),
                  },
                  {
                    path: 'edit',
                    loadChildren: () => import('./schema-edit/schema-edit.module').then((m) => m.SchemaEditModule),
                  },
                ],
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export class WebSchemaFeatureModule {}
