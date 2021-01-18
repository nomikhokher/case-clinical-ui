import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SchemaHeaderModule } from '@metadata/web/schema/ui'
import { SchemaDetailComponent } from './schema-detail.component'

const routes: Routes = [{ path: '', component: SchemaDetailComponent }]

@NgModule({
  declarations: [SchemaDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SchemaHeaderModule],
})
export class SchemaDetailModule {}
