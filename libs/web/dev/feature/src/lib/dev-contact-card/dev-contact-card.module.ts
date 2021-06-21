import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevContactCardComponent } from './dev-contact-card.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiContactCardModule } from '@schema-driven/web/ui/contact-card'

@NgModule({
  declarations: [DevContactCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevContactCardComponent }]),
    WebUiPreviewModule,
    WebUiContactCardModule,
  ],
})
export class DevContactCardModule {}
