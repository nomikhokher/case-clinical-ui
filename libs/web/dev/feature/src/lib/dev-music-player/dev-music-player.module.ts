import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMusicPlayerComponent } from './dev-music-player.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMusicPlayerModule } from '@schema-driven/web/ui/music-player'

@NgModule({
  declarations: [DevMusicPlayerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMusicPlayerComponent }]),
    WebUiPreviewModule,
    WebUiMusicPlayerModule,
  ],
})
export class DevMusicPlayerModule {}
