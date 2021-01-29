import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { EntityFormComponent } from './entity-form.component'

@NgModule({
  declarations: [EntityFormComponent],
  exports: [EntityFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class EntityFormModule {}
