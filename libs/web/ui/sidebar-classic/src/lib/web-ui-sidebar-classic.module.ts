import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiSidebarClassicComponent } from './web-ui-sidebar-classic.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiVerticalNavigationModule } from '@schema-driven/web/ui/vertical-navigation'

@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule, WebUiIconModule, WebUiVerticalNavigationModule],
  declarations: [WebUiSidebarClassicComponent],
  exports: [WebUiSidebarClassicComponent],
})
export class WebUiSidebarClassicModule {}
