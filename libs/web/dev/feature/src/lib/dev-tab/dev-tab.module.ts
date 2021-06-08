import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiTabModule } from '@schema-driven/web/ui/tab'
import { DevTabComponent } from './dev-tab.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevTabComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTabComponent }]),
    WebUiTabModule,
    WebUiPreviewModule,
  ],
})
export class DevTabModule {}
