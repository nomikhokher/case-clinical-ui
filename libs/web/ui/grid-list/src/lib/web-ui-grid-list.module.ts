import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiGridListComponent } from './web-ui-grid-list.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiGridListComponent],
  exports: [WebUiGridListComponent],
})
export class WebUiGridListModule {}
