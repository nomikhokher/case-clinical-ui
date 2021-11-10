import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTextAreasComponent } from './dev-text-areas.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTextAreasModule } from '@schema-driven/web/ui/text-areas'

@NgModule({
  declarations: [DevTextAreasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTextAreasComponent }]),
    WebUiPreviewModule,
    WebUiTextAreasModule,
  ],
})
export class DevTextAreasModule {}
