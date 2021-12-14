import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCountdownComponent } from './dev-countdown.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCountdownModule } from 'libs/web/ui/countdown/src'

@NgModule({
  declarations: [DevCountdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCountdownComponent }]),
    WebUiPreviewModule,
    WebUiCountdownModule,
  ],
})
export class DevCountdownModule {}
