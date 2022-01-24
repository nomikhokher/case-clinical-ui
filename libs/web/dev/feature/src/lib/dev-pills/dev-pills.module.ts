import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevPillsComponent } from './dev-pills.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiPillsModule } from '@schema-driven/web/ui/pills'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [DevPillsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevPillsComponent }]),
    WebUiPreviewModule,
    WebUiPillsModule,
    WebUiIconModule,
  ],
})
export class DevPillsModule {}
