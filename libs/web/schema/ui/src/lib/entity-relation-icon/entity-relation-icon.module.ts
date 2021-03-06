import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { EntityRelationIconComponent } from './entity-relation-icon.component'

@NgModule({
  declarations: [EntityRelationIconComponent],
  exports: [EntityRelationIconComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class EntityRelationIconModule {}
