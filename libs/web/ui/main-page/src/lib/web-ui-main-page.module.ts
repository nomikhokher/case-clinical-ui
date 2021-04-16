import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMainPageComponent } from './web-ui-main-page.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMainPageComponent],
  exports: [WebUiMainPageComponent],
})
export class WebUiMainPageModule {}
