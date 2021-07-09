import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiEditorComponent } from './web-ui-editor.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import 'froala-editor/js/plugins.pkgd.min.js'
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  declarations: [WebUiEditorComponent],
  exports: [WebUiEditorComponent],
})
export class WebUiEditorModule {}
