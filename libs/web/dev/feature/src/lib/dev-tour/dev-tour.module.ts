import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTourComponent } from './dev-tour.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTourModule } from '@schema-driven/web/ui/tour'

@NgModule({
  declarations: [DevTourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTourComponent }]),
    WebUiPreviewModule,
    WebUiTourModule,
  ],
})
export class DevTourModule {}
