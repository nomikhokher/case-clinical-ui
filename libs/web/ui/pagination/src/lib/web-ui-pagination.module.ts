import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiPaginationComponent } from './web-ui-pagination.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiPaginationComponent],
  exports: [WebUiPaginationComponent],
})
export class WebUiPaginationModule {}
