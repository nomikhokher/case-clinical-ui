import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { DevToastComponent } from './dev-toast.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevToastComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevToastComponent }]),
    WebUiButtonModule,
    WebUiPreviewModule,
  ],
})
export class DevToastModule {}
