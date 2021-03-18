import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { EntityEnumIconComponent } from './entity-enum-icon.component'

@NgModule({
  declarations: [EntityEnumIconComponent],
  exports: [EntityEnumIconComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class EntityEnumIconModule {}
