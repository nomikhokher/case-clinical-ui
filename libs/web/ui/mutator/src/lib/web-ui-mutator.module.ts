import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMutatorComponent } from './web-ui-mutator.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMutatorComponent],
  exports: [WebUiMutatorComponent],
})
export class WebUiMutatorModule {}
