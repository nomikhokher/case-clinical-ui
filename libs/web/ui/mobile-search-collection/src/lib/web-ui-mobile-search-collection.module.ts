import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileSearchCollectionComponent } from './web-ui-mobile-search-collection.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileSearchCollectionComponent],
  exports: [WebUiMobileSearchCollectionComponent],
})
export class WebUiMobileSearchCollectionModule {}
