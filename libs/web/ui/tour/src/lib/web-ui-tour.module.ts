import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiTourComponent } from './web-ui-tour.component'
import { TourMatMenuModule } from './ngx-ui-tour-md-tw-menu'

@NgModule({
  imports: [CommonModule, RouterModule, TourMatMenuModule.forRoot()],
  declarations: [WebUiTourComponent],
  exports: [WebUiTourComponent],
})
export class WebUiTourModule {}
