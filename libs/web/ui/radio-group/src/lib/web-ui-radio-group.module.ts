import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiRadioGroupComponent } from './web-ui-radio-group.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiRadioGroupComponent],
  exports: [WebUiRadioGroupComponent],
})
export class WebUiRadioGroupModule {}
