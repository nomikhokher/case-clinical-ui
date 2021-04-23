import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiDividerToolbarComponent } from './web-ui-divider-toolbar.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiDividerToolbarComponent],
  exports: [WebUiDividerToolbarComponent],
})
export class WebUiDividerToolbarModule {}
