import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { WebUiWeatherUpdatesComponent } from './web-ui-weather-updates.component'

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  declarations: [WebUiWeatherUpdatesComponent],
  exports: [WebUiWeatherUpdatesComponent],
})
export class WebUiWeatherUpdatesModule {}
