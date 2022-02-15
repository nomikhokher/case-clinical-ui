import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevPageHeadingsComponent } from './dev-page-headings.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiPageHeadingsModule } from '@schema-driven/web/ui/page-headings'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'

@NgModule({
  declarations: [DevPageHeadingsComponent],
  imports: [
    CommonModule,
    WebUiButtonModule,
    RouterModule.forChild([{ path: '', component: DevPageHeadingsComponent }]),
    WebUiPreviewModule,
    WebUiPageHeaderModule,
    WebUiPageHeadingsModule,
    WebUiMobilePreviewModule,
  ],
})
export class DevPageHeadingsModule {}
