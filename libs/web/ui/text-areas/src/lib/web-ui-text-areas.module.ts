import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiTextAreasComponent } from './web-ui-text-areas.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiTextAreasComponent],
  exports: [WebUiTextAreasComponent],
})
export class WebUiTextAreasModule {}
