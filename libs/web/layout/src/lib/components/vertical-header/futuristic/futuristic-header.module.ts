import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { FuturisticHeaderComponent } from './futuristic-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [FuturisticHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule, ClickOutsideModule],
  exports: [FuturisticHeaderComponent],
})
export class FuturisticHeaderLayoutModule {}
