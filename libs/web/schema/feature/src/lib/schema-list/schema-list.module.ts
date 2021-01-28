import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SchemaTableModule } from '@schema-driven/web/schema/ui'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { SchemaListComponent } from './schema-list.component'

const routes: Routes = [{ path: '', component: SchemaListComponent }]

@NgModule({
  declarations: [SchemaListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SchemaTableModule, WebUiPageHeaderModule],
})
export class SchemaListModule {}
