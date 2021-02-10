import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HotToastModule } from '@ngneat/hot-toast'
import { WebUiToastService } from './web-ui-toast.service'

@NgModule({
  imports: [CommonModule, RouterModule, HotToastModule.forRoot()],
  providers: [WebUiToastService],
})
export class WebUiToastModule {}
