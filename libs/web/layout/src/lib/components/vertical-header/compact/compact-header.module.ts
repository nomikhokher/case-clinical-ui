import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CompactHeaderComponent } from './compact-header.component'

@NgModule({
  declarations: [CompactHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [CompactHeaderComponent],
})
export class CompactHeaderLayoutModule {}
