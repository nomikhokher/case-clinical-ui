import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileSearchArtworkComponent } from './web-ui-mobile-search-artwork.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileSearchArtworkComponent],
  exports: [WebUiMobileSearchArtworkComponent],
})
export class WebUiMobileSearchArtworkModule {}
