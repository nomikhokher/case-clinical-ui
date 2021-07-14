import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiTwoColumnStackedListComponent } from './web-ui-two-column-stacked-list.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiTwoColumnStackedListComponent],
  exports: [WebUiTwoColumnStackedListComponent],
})
export class WebUiTwoColumnStackedListModule {}
