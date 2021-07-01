import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiSidebarComponent } from './web-ui-sidebar.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiSidebarComponent],
  exports: [WebUiSidebarComponent],
})
export class WebUiSidebarModule {}
