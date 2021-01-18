import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { SchemaFormModule, SchemaHeaderModule } from '@metadata/web/schema/ui'
import { SchemaCreateComponent } from './schema-create.component'

const routes: Routes = [{ path: '', component: SchemaCreateComponent }]

@NgModule({
  declarations: [SchemaCreateComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SchemaFormModule, SchemaHeaderModule],
})
export class SchemaCreateModule {}
