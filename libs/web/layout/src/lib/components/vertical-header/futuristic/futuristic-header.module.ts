import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FuturisticHeaderComponent } from './futuristic-header.component'

@NgModule({
  declarations: [FuturisticHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [FuturisticHeaderComponent],
})
export class FuturisticHeaderLayoutModule {}
