import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiTableListsComponent } from './web-ui-table-lists.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiTableListsComponent],
  exports: [WebUiTableListsComponent],
})
export class WebUiTableListsModule {}
