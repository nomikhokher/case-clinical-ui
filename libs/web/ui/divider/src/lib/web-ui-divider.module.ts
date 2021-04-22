import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiDividerComponent } from './web-ui-divider.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiDividerComponent],
  exports: [WebUiDividerComponent],
})
export class WebUiDividerModule {}
