import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiListContainerComponent } from './web-ui-list-container.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiListContainerComponent],
  exports: [WebUiListContainerComponent],
})
export class WebUiListContainerModule {}
