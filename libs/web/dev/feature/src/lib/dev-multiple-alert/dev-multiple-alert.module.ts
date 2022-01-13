import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMultipleAlertComponent } from './dev-multiple-alert.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMultipleAlertModule } from 'libs/web/ui/multiple-alert/src'
@NgModule({
  declarations: [DevMultipleAlertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMultipleAlertComponent }]),
    WebUiPreviewModule,
    WebUiMultipleAlertModule,
  ],
})
export class DevMultipleAlertModule {}
