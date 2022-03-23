import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileSearchCollectionComponent } from './dev-mobile-search-collection.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileSearchCollectionModule } from '@schema-driven/web/ui/mobile-search-collection'
@NgModule({
  declarations: [DevMobileSearchCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileSearchCollectionComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileSearchCollectionModule,
  ],
})
export class DevMobileSearchCollectionModule {}
