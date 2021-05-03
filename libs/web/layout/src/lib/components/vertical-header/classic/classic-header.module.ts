import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ClassicHeaderComponent } from './classic-header.component'

@NgModule({
  declarations: [ClassicHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ClassicHeaderComponent],
})
export class ClassicHeaderLayoutModule {}
