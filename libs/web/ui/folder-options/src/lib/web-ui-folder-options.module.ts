import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiFolderOptionsComponent } from './web-ui-folder-options.component'
import { ClickOutsideModule } from 'ng-click-outside'

@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule],
  declarations: [WebUiFolderOptionsComponent],
  exports: [WebUiFolderOptionsComponent],
})
export class WebUiFolderOptionsModule {}
