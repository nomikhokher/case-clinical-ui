import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@schema-driven/web/ui/page'

import { WebUiMainPageComponent } from './web-ui-main-page.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiPageModule],
  declarations: [WebUiMainPageComponent],
  exports: [WebUiMainPageComponent],
})
export class WebUiMainPageModule {}
