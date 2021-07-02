import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiToolbarComponent } from './web-ui-toolbar.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiToolbarComponent],
  exports: [WebUiToolbarComponent],
})
export class WebUiToolbarModule {}
