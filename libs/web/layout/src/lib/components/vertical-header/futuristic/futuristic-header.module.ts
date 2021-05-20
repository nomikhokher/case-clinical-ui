import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FuturisticHeaderComponent } from './futuristic-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [FuturisticHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
  exports: [FuturisticHeaderComponent],
})
export class FuturisticHeaderLayoutModule {}
