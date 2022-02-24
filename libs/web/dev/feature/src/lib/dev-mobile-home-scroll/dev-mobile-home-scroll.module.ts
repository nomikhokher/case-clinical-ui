import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileHomeScrollComponent } from './dev-mobile-home-scroll.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileHomeScrollComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileHomeScrollComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileHomeScrollModule {}
