import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevWeatherUpdatesComponent } from './dev-weather-updates.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiWeatherUpdatesModule } from '@schema-driven/web/ui/weather-updates'

@NgModule({
  declarations: [DevWeatherUpdatesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevWeatherUpdatesComponent }]),
    WebUiPreviewModule,
    WebUiWeatherUpdatesModule,
  ],
})
export class DevWeatherUpdatesModule {}
