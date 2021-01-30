import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SchemaFormModule } from '@schema-driven/web/schema/ui'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { SchemaEditComponent } from './schema-edit.component'

const routes: Routes = [{ path: '', component: SchemaEditComponent }]

@NgModule({
  declarations: [SchemaEditComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SchemaFormModule, WebUiPageHeaderModule],
})
export class SchemaEditModule {}
