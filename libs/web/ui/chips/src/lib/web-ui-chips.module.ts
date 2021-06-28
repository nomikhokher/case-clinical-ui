import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiChipsComponent } from './web-ui-chips.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiChipsComponent],
  exports: [WebUiChipsComponent],
})
export class WebUiChipsModule {}
