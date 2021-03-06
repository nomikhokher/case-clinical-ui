import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  EntityFieldIconModule,
  EntityFormModule,
  EntityRelationIconModule,
  FieldFormModule,
  RelationFormModule,
} from '@schema-driven/web/schema/ui'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { SchemaEntityDetailComponent } from './schema-entity-detail.component'

const routes: Routes = [{ path: '', component: SchemaEntityDetailComponent }]

@NgModule({
  declarations: [SchemaEntityDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebUiPageHeaderModule,
    WebUiIconModule,
    EntityFieldIconModule,
    FieldFormModule,
    WebUiButtonModule,
    EntityFormModule,
    RelationFormModule,
    EntityRelationIconModule,
  ],
})
export class SchemaEntityDetailModule {}
