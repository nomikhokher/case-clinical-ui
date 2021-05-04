import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ClassyHeaderLayout } from './classy-header.component'

@NgModule({
  declarations: [ClassyHeaderLayout],
  imports: [CommonModule, RouterModule],
  exports: [ClassyHeaderLayout],
})
export class ClassyHeaderLayoutModule {}
