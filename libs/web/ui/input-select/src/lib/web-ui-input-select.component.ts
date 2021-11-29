import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'ui-input-select',
  template: `
    <div>
      <form class="mt-6 sm:flex sm:items-center" [formGroup]="formData">
        <label for="emails" class="sr-only">Email addresses</label>
        <div class="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          <input
            type="text"
            id="emails"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-32 sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter an email"
            name="email"
            formControlName="email"
            (input)="changeValue()"
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <span class="h-4 w-px bg-gray-200" aria-hidden="true"></span>
            <label for="role" class="sr-only">Role</label>
            <select
              id="role"
              formControlName="user"
              name="user"
              (input)="changeValue()"
              class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-4 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option *ngFor="let item of options">{{ item.opt }}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  `,
})
export class WebUiInputSelectComponent {
  @Input() options: {
    opt: string
  }[]
  @Output() sendData = new EventEmitter<any>()
  public formData: FormGroup

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formData = this.fb.group({
      email: [null],
      user: [null],
    })

    this.formData.patchValue({ user: this.options[1].opt })
  }

  changeValue(): void {
    this.formData.valueChanges.subscribe((val) => {
      this.sendData.emit(val)
    })
  }
}
