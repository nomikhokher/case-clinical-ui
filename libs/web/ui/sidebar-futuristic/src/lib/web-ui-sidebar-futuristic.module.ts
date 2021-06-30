import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiSidebarFuturisticComponent } from './web-ui-sidebar-futuristic.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiVerticalNavigationModule } from '@schema-driven/web/ui/vertical-navigation'
@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule, WebUiIconModule, WebUiVerticalNavigationModule],
  declarations: [WebUiSidebarFuturisticComponent],
  exports: [WebUiSidebarFuturisticComponent],
})
export class WebUiSidebarFuturisticModule {}
