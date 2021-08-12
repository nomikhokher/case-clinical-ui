import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'

import { WebUiMultiSelectComponent } from './web-ui-multi-select.component'

@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule],
  declarations: [WebUiMultiSelectComponent],
  exports: [WebUiMultiSelectComponent],
})
export class WebUiMultiSelectModule {}
