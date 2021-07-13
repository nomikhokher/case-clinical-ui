import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiPaginationComponent } from './web-ui-pagination.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiPaginationComponent],
  exports: [WebUiPaginationComponent],
})
export class WebUiPaginationModule {}
