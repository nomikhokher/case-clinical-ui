import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiCardWithDetailComponent } from './web-ui-card-with-detail.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiCardWithDetailComponent],
  exports: [WebUiCardWithDetailComponent],
})
export class WebUiCardWithDetailModule {}
