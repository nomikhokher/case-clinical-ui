import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiContainerComponent } from './web-ui-container.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiContainerComponent],
  exports: [WebUiContainerComponent],
})
export class WebUiContainerModule {}
