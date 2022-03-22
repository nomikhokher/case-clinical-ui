import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileSearchArtworkComponent } from './dev-mobile-search-artwork.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileSearchArtworkModule } from '@schema-driven/web/ui/mobile-search-artwork'
@NgModule({
  declarations: [DevMobileSearchArtworkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileSearchArtworkComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileSearchArtworkModule,
  ],
})
export class DevMobileSearchArtworkModule {}
