import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevSectionHeadingsComponent } from './dev-section-headings.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiSectionHeadingsModule } from '@schema-driven/web/ui/section-headings'

@NgModule({
  declarations: [DevSectionHeadingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevSectionHeadingsComponent }]),
    WebUiPreviewModule,
    WebUiSectionHeadingsModule,
  ],
})
export class DevSectionHeadingsModule {}
