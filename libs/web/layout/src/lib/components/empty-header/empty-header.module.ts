import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { EmptyHeaderComponent } from './empty-header.component'

@NgModule({
  declarations: [EmptyHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [EmptyHeaderComponent],
})
export class EmptyHeaderLayoutModule {}
