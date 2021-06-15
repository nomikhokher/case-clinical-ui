import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiVerticalNavigationComponent } from './web-ui-vertical-navigation.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiVerticalNavigationComponent],
  exports: [WebUiVerticalNavigationComponent],
})
export class WebUiVerticalNavigationModule {}
