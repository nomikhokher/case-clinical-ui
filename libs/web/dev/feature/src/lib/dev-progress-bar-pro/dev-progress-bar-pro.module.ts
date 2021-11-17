import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevProgressBarProComponent } from './dev-progress-bar-pro.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiProgressBarProModule } from '@schema-driven/web/ui/progress-bar-pro'

@NgModule({
  declarations: [DevProgressBarProComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevProgressBarProComponent }]),
    WebUiPreviewModule,
    WebUiProgressBarProModule,
  ],
})
export class DevProgressBarProModule {}
