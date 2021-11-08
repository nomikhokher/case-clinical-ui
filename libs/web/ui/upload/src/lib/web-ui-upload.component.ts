import { Component, Input, ViewChild } from '@angular/core'

@Component({
  selector: 'ui-upload',
  template: `
    <form class="space-y-8">
      <div class="space-y-8 sm:space-y-5">
        <div>
          <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div class="sm:grid sm:grid-cols-3 sm:gap-8 sm:items-start sm:border-gray-200 sm:pt-5">
              <div class="flex" [ngClass]="imgAlign == 'right' ? 'order-last justify-center' : ''">
                <img class="w-{{ imgSize }} h-{{ imgSize }}" [src]="url" />
              </div>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div
                  class="w-full flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white dark:bg-gray-800 border rounded-md font-medium text-indigo-600 hover:text-indigo-500 border-none focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          #myFileInput
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                          (change)="onSelectFile($event)"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-300">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex mx-4" [ngClass]="[buttonPostion == 'left' ? 'justify-start' : 'justify-end']">
          <button
            type="button"
            (click)="removeImage($event)"
            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  `,
})
export class WebUiUploadComponent {
  @Input() buttonPostion?: string
  @Input() imgSize?: string
  @Input() imgAlign?: string
  @ViewChild('myFileInput') myFileInput
  url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdMMNr-jGsD7ay5zinTzDUs5RTL7wHTetAA&usqp=CAU'

  onSelectFile(e): void {
    if (e.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event: any) => {
        this.url = event.target.result
        this.myFileInput.nativeElement.value = ''
      }
    }
  }

  removeImage(event): void {
    event.preventDefault()
    this.url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdMMNr-jGsD7ay5zinTzDUs5RTL7wHTetAA&usqp=CAU'
    this.myFileInput.nativeElement.value = ''
  }
}
