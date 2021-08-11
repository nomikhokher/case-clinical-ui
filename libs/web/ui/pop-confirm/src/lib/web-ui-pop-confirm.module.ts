import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'

import { WebUiPopConfirmComponent } from './web-ui-pop-confirm.component'

@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule],
  declarations: [WebUiPopConfirmComponent],
  exports: [WebUiPopConfirmComponent],
})
export class WebUiPopConfirmModule {}
