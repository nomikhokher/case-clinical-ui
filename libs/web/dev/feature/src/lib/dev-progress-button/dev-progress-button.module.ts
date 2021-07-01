import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevProgressButtonComponent } from './dev-progress-button.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiProgressButtonModule } from '@schema-driven/web/ui/progress-button'

@NgModule({
  declarations: [DevProgressButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevProgressButtonComponent }]),
    WebUiPreviewModule,
    WebUiProgressButtonModule,
  ],
})
export class DevProgressButtonModule {}
