import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { FieldFormComponent } from './field-form.component'

@NgModule({
  declarations: [FieldFormComponent],
  exports: [FieldFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class FieldFormModule {}
