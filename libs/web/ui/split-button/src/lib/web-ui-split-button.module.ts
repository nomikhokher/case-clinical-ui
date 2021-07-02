import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiSplitButtonComponent } from './web-ui-split-button.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiSplitButtonComponent],
  exports: [WebUiSplitButtonComponent],
})
export class WebUiSplitButtonModule {}
