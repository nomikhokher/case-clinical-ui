import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { WebUiWeatherUpdatesComponent } from './web-ui-weather-updates.component'
import { WebUiLoaderModule } from '@schema-driven/web/ui/loader'

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, WebUiLoaderModule],
  declarations: [WebUiWeatherUpdatesComponent],
  exports: [WebUiWeatherUpdatesComponent],
})
export class WebUiWeatherUpdatesModule {}
