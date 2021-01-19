import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { UiFormFieldModule } from '../../wrappers/form-field/ui-form-field.module'
import { UiFormRepeatComponent } from './ui-form-repeat.component'

@NgModule({
  declarations: [UiFormRepeatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: UiFormRepeatComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class UiFormRepeatModule {}
