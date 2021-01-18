import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { WebUserDataAccessService } from './web-user-data-access.service'

@NgModule({
  imports: [CommonModule],
  providers: [WebUserDataAccessService],
})
export class WebUserDataAccessModule {}
