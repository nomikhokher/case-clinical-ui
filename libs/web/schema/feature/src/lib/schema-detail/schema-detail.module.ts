import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SchemaHeaderModule } from '@schema-driven/web/schema/ui'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { SchemaDetailComponent } from './schema-detail.component'

const routes: Routes = [{ path: '', component: SchemaDetailComponent }]

@NgModule({
  declarations: [SchemaDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SchemaHeaderModule, WebUiPageHeaderModule],
})
export class SchemaDetailModule {}
