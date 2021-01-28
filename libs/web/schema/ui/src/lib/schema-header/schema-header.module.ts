import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { SchemaHeaderComponent } from './schema-header.component'

@NgModule({
  declarations: [SchemaHeaderComponent],
  exports: [SchemaHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class SchemaHeaderModule {}
