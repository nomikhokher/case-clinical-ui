import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevProgressBarComponent } from './dev-progress-bar.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

import { WebUiProgressBarModule } from '@schema-driven/web/ui/progress-bar'

@NgModule({
  declarations: [DevProgressBarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevProgressBarComponent }]),
    WebUiPreviewModule,
    WebUiProgressBarModule,
  ],
})
export class DevProgressBarModule {}
