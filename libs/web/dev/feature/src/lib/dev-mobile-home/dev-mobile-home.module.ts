import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileHomeComponent } from './dev-mobile-home.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'

@NgModule({
  declarations: [DevMobileHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileHomeComponent }]),
    WebUiMobilePreviewModule,
  ],
})
export class DevMobileHomeModule {}
