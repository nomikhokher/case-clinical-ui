import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiVerticalNavigationComponent } from './web-ui-vertical-navigation.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiVerticalNavigationComponent],
  exports: [WebUiVerticalNavigationComponent],
})
export class WebUiVerticalNavigationModule {}
