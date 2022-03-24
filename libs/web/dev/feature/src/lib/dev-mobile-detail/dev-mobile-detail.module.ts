import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileDetailComponent } from './dev-mobile-detail.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
//import { WebUiMobileDetailModule } from '@schema-driven/web/ui/mobile-detail'

@NgModule({
  declarations: [DevMobileDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileDetailComponent }]),
    WebUiMobilePreviewModule,
    // WebUiMobileDetailModule,
  ],
})
export class DevMobileDetailModule {}
