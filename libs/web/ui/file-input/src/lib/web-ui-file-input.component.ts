import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-file-input',
  template: `
    <div class="w-3/12 mx-auto">
      <h1 class="p-4 text-center text-2xl dark:text-white">Upload your files</h1>
      <div
        *ngFor="let item of icon"
        class="relative rounded-lg h-36 rounded-lg themeBorder  flex justify-center items-center bg-white dark:bg-gray-800 border-dashed border-2 border-indigo-600 dark:border-white"
      >
        <div class="absolute">
          <div class="flex flex-col items-center">
            <ui-icon icon="{{ item.tempIcon }}"></ui-icon>
            <span class="block text-gray-500 text-sm font-normal dark:text-white">Drop files here to upload</span>
          </div>
        </div>
        <input
          type="file"
          class="h-full w-full opacity-0 cursor-pointer"
          id="formFile"
          accept="image/png, image/gif, image/jpeg"
        />
      </div>
    </div>
  `,
})
export class WebUiFileInputComponent {
  @Input() icon?: Icon[]

  ngOnInit() {
    console.log(this.icon)
  }
}
export interface Icon {
  tempIcon?: string
}
