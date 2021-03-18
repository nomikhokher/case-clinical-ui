import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EnumFormModule } from '@schema-driven/web/schema/ui'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { SchemaEnumDetailComponent } from './schema-enum-detail.component'

const routes: Routes = [{ path: '', component: SchemaEnumDetailComponent }]

@NgModule({
  declarations: [SchemaEnumDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebUiPageHeaderModule,
    WebUiIconModule,
    WebUiButtonModule,
    EnumFormModule,
  ],
})
export class SchemaEnumDetailModule {}
