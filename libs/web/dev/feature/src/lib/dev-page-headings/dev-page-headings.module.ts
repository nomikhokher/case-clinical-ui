import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevPageHeadingsComponent } from './dev-page-headings.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiPageHeadingsModule } from '@schema-driven/web/ui/page-headings'

@NgModule({
  declarations: [DevPageHeadingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevPageHeadingsComponent }]),
    WebUiPreviewModule,
    WebUiPageHeadingsModule,
  ],
})
export class DevPageHeadingsModule {}
