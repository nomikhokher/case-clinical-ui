import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-file-input',
  template: `
    <div class="flex justify-center">
      <div class="mb-3 w-96">
        <label for="formFile" class="form-label inline-block mb-2 text-gray-700">File Input Example</label>
        <input
          class="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-{{ this.background }} bg-{{ this.background }}
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
          id="formFile"
        />
      </div>
    </div>
  `,
})
export class WebUiFileInputComponent {
  @Input() background?: string
}