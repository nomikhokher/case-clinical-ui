import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFaqSectionComponent } from './dev-faq-section.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFaqSectionModule } from '@schema-driven/web/ui/faq-section'

@NgModule({
  declarations: [DevFaqSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevFaqSectionComponent }]),
    WebUiPreviewModule,
    WebUiFaqSectionModule,
  ],
})
export class DevFaqSectionModule {}
