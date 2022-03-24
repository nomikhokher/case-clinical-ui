import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileDetailComponent } from './dev-mobile-detail.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileDetailComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileDetailModule {}
