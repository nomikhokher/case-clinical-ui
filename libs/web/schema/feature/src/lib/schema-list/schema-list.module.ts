import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { SchemaHeaderModule, SchemaTableModule } from '@metadata/web/schema/ui'
import { SchemaListComponent } from './schema-list.component'

const routes: Routes = [{ path: '', component: SchemaListComponent }]

@NgModule({
  declarations: [SchemaListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SchemaTableModule, SchemaHeaderModule],
})
export class SchemaListModule {}
