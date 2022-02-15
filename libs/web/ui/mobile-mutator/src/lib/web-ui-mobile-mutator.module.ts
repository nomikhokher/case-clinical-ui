import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileMutatorComponent } from './web-ui-mobile-mutator.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileMutatorComponent],
  exports: [WebUiMobileMutatorComponent],
})
export class WebUiMobileMutatorModule {}
