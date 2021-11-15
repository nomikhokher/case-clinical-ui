import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMusicPlayerComponent } from './web-ui-music-player.component'
import { TimeConversionPipe } from '../time-conversion.pipe'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMusicPlayerComponent, TimeConversionPipe],
  exports: [WebUiMusicPlayerComponent],
})
export class WebUiMusicPlayerModule {}
