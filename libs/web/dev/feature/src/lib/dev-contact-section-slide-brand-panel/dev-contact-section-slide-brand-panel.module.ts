import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevContactSectionSlideBrandPanelComponent } from './dev-contact-section-slide-brand-panel.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiContactSectionSlideBrandPanelModule } from 'libs/web/ui/contact-section-slide-brand-panel/src'

@NgModule({
  declarations: [DevContactSectionSlideBrandPanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevContactSectionSlideBrandPanelComponent }]),
    WebUiPreviewModule,
    WebUiContactSectionSlideBrandPanelModule,
  ],
})
export class DevContactSectionSlideBrandPanelModule {}
