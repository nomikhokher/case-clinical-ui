import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileCollectionComponent } from './web-ui-mobile-collection.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileCollectionComponent],
  exports: [WebUiMobileCollectionComponent],
})
export class WebUiMobileCollectionModule {}
