import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiGroupButtonComponent } from './web-ui-group-button.component'
import { from } from 'rxjs'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiGroupButtonComponent],
  exports: [WebUiGroupButtonComponent],
})
export class WebUiGroupButtonModule {}
