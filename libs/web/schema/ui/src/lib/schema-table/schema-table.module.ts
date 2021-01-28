import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { SchemaTableComponent } from './schema-table.component'

@NgModule({
  declarations: [SchemaTableComponent],
  exports: [SchemaTableComponent],
  imports: [CommonModule, RouterModule, WebUiButtonModule],
})
export class SchemaTableModule {}
