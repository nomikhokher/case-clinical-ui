import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'

import { WebUiModalComponent } from './web-ui-modal.component'

@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule],
  declarations: [WebUiModalComponent],
  exports: [WebUiModalComponent],
})
export class WebUiModalModule {}
