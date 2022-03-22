import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileSearchArtworkComponent } from './dev-mobile-search-artwork.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileSearchArtworkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileSearchArtworkComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileSearchArtworkModule {}
