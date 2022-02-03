import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiSideNavBarComponent } from './web-ui-side-nav-bar.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiSideNavBarComponent],
  exports: [WebUiSideNavBarComponent],
})
export class WebUiSideNavBarModule {}
