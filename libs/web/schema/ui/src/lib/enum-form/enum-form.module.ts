import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { EnumFormComponent } from './enum-form.component'

@NgModule({
  declarations: [EnumFormComponent],
  exports: [EnumFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class EnumFormModule {}
