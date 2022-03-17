import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileNftCompleteComponent } from './dev-mobile-nft-complete.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileNftCompleteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileNftCompleteComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileNftCompleteModule {}
