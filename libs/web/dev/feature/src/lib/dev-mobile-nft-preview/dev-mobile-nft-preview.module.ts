import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileNftPreviewComponent } from './dev-mobile-nft-preview.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileNftPreviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileNftPreviewComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileNftPreviewModule {}
