import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { SchemaFormModule, SchemaHeaderModule } from '@metadata/web/schema/ui'
import { SchemaEditComponent } from './schema-edit.component'

const routes: Routes = [{ path: '', component: SchemaEditComponent }]

@NgModule({
  declarations: [SchemaEditComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SchemaFormModule, SchemaHeaderModule],
})
export class SchemaEditModule {}
