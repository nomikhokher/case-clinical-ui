import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ClassicHeaderComponent } from './classic-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [ClassicHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
  exports: [ClassicHeaderComponent],
})
export class ClassicHeaderLayoutModule {}
