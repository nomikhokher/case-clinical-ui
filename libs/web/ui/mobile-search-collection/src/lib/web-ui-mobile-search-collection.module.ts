import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileSearchCollectionComponent } from './web-ui-mobile-search-collection.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileSearchCollectionComponent],
  exports: [WebUiMobileSearchCollectionComponent],
})
export class WebUiMobileSearchCollectionModule {}
