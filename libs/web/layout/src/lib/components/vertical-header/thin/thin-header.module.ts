import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ThinHeaderComponent } from './thin-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [ThinHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
  exports: [ThinHeaderComponent],
})
export class ThinHeaderLayoutModule {}
