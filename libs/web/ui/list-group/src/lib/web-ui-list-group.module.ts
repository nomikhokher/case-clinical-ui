import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiListGroupComponent } from './web-ui-list-group.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiListGroupComponent],
  exports: [WebUiListGroupComponent],
})
export class WebUiListGroupModule {}
