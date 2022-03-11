import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileCollectionCreateComponent } from './dev-mobile-collection-create.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'

@NgModule({
  declarations: [DevMobileCollectionCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileCollectionCreateComponent }]),
    WebUiMobilePreviewModule,
  ],
})
export class DevMobileCollectionCreateModule {}
