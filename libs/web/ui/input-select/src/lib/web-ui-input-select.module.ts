import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { WebUiInputSelectComponent } from './web-ui-input-select.component'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [WebUiInputSelectComponent],
  exports: [WebUiInputSelectComponent],
})
export class WebUiInputSelectModule {}
