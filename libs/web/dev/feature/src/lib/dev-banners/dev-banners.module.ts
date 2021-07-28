import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevBannersComponent } from './dev-banners.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiBannersModule } from '@schema-driven/web/ui/banners'

@NgModule({
  declarations: [DevBannersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevBannersComponent }]),
    WebUiPreviewModule,
    WebUiBannersModule,
  ],
})
export class DevBannersModule {}
