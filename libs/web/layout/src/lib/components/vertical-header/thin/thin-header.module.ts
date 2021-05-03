import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ThinHeaderComponent } from './thin-header.component'

@NgModule({
  declarations: [ThinHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ThinHeaderComponent],
})
export class ThinHeaderLayoutModule {}
