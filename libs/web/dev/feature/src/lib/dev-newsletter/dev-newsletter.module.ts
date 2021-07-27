import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevNewsletterComponent } from './dev-newsletter.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiNewsletterModule } from '@schema-driven/web/ui/newsletter'

@NgModule({
  declarations: [DevNewsletterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevNewsletterComponent }]),
    WebUiPreviewModule,
    WebUiNewsletterModule,
  ],
})
export class DevNewsletterModule {}
