import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiSideNavBarComponent } from './web-ui-side-nav-bar.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiSideNavBarComponent],
  exports: [WebUiSideNavBarComponent],
})
export class WebUiSideNavBarModule {}
