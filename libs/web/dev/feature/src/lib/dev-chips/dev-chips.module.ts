import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevChipsComponent } from './dev-chips.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiChipsModule } from '@schema-driven/web/ui/chips'

@NgModule({
  declarations: [DevChipsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevChipsComponent }]),
    WebUiPreviewModule,
    WebUiChipsModule,
  ],
})
export class DevChipsModule {}
