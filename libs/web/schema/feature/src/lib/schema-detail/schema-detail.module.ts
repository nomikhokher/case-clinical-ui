import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EntityFormModule } from '@schema-driven/web/schema/ui'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { SchemaDetailComponent } from './schema-detail.component'

const routes: Routes = [
  {
    path: '',
    component: SchemaDetailComponent,
    children: [
      {
        path: ':entityId',
        loadChildren: () =>
          import('../schema-entity-detail/schema-entity-detail.module').then((m) => m.SchemaEntityDetailModule),
      },
    ],
  },
]

@NgModule({
  declarations: [SchemaDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebUiPageHeaderModule,
    WebUiIconModule,
    WebUiButtonModule,
    EntityFormModule,
  ],
})
export class SchemaDetailModule {}
