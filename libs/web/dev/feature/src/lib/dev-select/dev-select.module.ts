import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevSelectComponent } from './dev-select.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFormModule } from '@schema-driven/web/ui/form'

@NgModule({
  declarations: [DevSelectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevSelectComponent }]),
    WebUiPreviewModule,
    WebUiFormModule,
  ],
})
export class DevSelectModule {}
