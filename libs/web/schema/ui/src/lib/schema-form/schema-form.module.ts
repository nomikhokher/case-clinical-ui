import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@metadata/web/ui/form'
import { SchemaFormComponent } from './schema-form.component'

@NgModule({
  declarations: [SchemaFormComponent],
  exports: [SchemaFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class SchemaFormModule {}
