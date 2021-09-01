import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'

import { WebUiStoreNavigationComponent } from './web-ui-store-navigation.component'

@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule],
  declarations: [WebUiStoreNavigationComponent],
  exports: [WebUiStoreNavigationComponent],
})
export class WebUiStoreNavigationModule {}
