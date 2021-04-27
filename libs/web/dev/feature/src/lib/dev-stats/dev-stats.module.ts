import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevStatsComponent } from './dev-stats.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiStatsModule } from '@schema-driven/web/ui/stats'

@NgModule({
  declarations: [DevStatsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevStatsComponent }]),
    WebUiPreviewModule,
    WebUiStatsModule,
  ],
})
export class DevStatsModule {}
