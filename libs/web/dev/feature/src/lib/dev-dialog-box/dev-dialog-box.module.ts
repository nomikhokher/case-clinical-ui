import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDialogBoxComponent } from './dev-dialog-box.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDialogBoxModule } from '@schema-driven/web/ui/dialog-box'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [DevDialogBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDialogBoxComponent }]),
    WebUiPreviewModule,
    WebUiDialogBoxModule,
    FormsModule,
  ],
})
export class DevDialogBoxModule {}
