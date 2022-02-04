import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-file-input',
  template: `
    <!-- <div class="flex justify-center">
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
          accept="image/png, image/gif, image/jpeg"
        />
      </div>
    </div> -->
    <div class="w-3/12 mx-auto">
      <H1 class="p-4 text-center text-2xl dark:text-white">Upload your files</H1>
      <div
        class="relative rounded-lg h-36 rounded-lg themeBorder  flex justify-center items-center bg-white dark:bg-gray-800 border-dashed border-2 border-indigo-600 dark:border-white"
      >
        <div class="absolute">
          <div class="flex flex-col items-center">
            <ui-icon icon="folderOpen"></ui-icon>
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-14 mb-4 w-14 text-blue-600 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
              />
            </svg> -->
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
  @Input() background?: string
}
