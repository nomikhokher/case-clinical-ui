import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CompactHeaderComponent } from './compact-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [CompactHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
  exports: [CompactHeaderComponent],
})
export class CompactHeaderLayoutModule {}
