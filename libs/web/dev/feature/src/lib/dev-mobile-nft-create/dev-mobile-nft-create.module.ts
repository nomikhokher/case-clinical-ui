import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileNftCreateComponent } from './dev-mobile-nft-create.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileNftCreateModule } from '@schema-driven/web/ui/mobile-nft-create'
@NgModule({
  declarations: [DevMobileNftCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileNftCreateComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileNftCreateModule,
  ],
})
export class DevMobileNftCreateModule {}
