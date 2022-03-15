import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileNftCreateComponent } from './dev-mobile-nft-create.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileNftCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileNftCreateComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileNftCreateModule {}
