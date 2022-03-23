import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileSearchCollectionComponent } from './dev-mobile-search-collection.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileSearchCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileSearchCollectionComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileSearchCollectionModule {}
