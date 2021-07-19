import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTestimonialsComponent } from './dev-testimonials.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTestimonialsModule } from '@schema-driven/web/ui/testimonials'

@NgModule({
  declarations: [DevTestimonialsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTestimonialsComponent }]),
    WebUiPreviewModule,
    WebUiTestimonialsModule,
  ],
})
export class DevTestimonialsModule {}
