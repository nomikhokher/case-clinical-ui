import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevRepeatComponent } from './dev-repeat.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFormModule } from '@schema-driven/web/ui/form'

@NgModule({
  declarations: [DevRepeatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevRepeatComponent }]),
    WebUiPreviewModule,
    WebUiFormModule,
  ],
})
export class DevRepeatModule {}
