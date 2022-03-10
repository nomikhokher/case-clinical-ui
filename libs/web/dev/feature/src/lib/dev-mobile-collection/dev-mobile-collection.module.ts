import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileCollectionComponent } from './dev-mobile-collection.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
//import { WebUiMobileCollectionModule } from '@schema-driven/web/ui/mobile-collection'

@NgModule({
  declarations: [DevMobileCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileCollectionComponent }]),
    WebUiMobilePreviewModule,
    // WebUiMobileCollectionModule,
  ],
})
export class DevMobileCollectionModule {}
