import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-folder-options',
  template: `
    <div class="mx-2">
      <div class="w-{{ width }} px-3 pb-3">
        <div
          (clickOutside)="isEditing = false"
          class="flex items-center bg-{{
            defaultColor
          }}-500 rounded-md p-3 text-white cursor-pointer transition duration-300 ease-in-out hover:shadow hover:bg-{{
            defaultColor
          }}-600"
        >
          <div>
            <svg fill="currentColor" class="w-10 h-10" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"></path>
            </svg>
          </div>
          <div class="px-3 mr-auto">
            <div>
              <h4 *ngIf="!isEditing" class="font-bold">{{ folder.title }}</h4>
              <input
                *ngIf="isEditing"
                type="text"
                class="text-gray-100 px-4 h-8 text-md border-transparent rounded-md bg-{{
                  defaultColor
                }}-400 focus:bg-{{ defaultColor }}-100 focus:text-gray-600"
                [value]="folder.title"
                (change)="changeTitle($event)"
              />
            </div>
            <small class="text-xs">{{ folder.description }}</small>
          </div>
          <div class="relative" (clickOutside)="isActive = false; colorPalette = false">
            <a href="javascript:void(0)" (click)="isActive = !isActive; colorPalette = false">
              <svg fill="currentColor" class="w-5 h-5" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                ></path>
              </svg>
            </a>

            <div
              [ngClass]="isActive ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-0'"
              class="transition ease-in-out duration-150 options absolute bg-white text-gray-600 origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg overflow-hidden z-10"
            >
              <a
                (click)="isEditing = true; isActive = false"
                class="flex py-3 px-2 text-sm font-bold hover:bg-gray-100 "
              >
                <span class="mr-auto">Edit</span>
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  ></path>
                </svg>
              </a>
              <a
                (click)="downloadMyFile()"
                href="javascript:;"
                class="flex py-3 px-2 text-sm font-bold hover:bg-gray-100"
              >
                <span class="mr-auto">Download</span>
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="javascript:;"
                (click)="colorPalette = !colorPalette"
                class="flex py-3 px-2 text-sm font-bold hover:bg-gray-100"
              >
                <span class="mr-auto">Change Color</span>
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                  <path
                    fill-rule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <div *ngIf="colorPalette" class="flex flex-wrap p-2">
                <div class="w-1/5 h-8 hover:bg-gray-600 bg-gray-500" (click)="getColor('gray')"></div>
                <div class="w-1/5 h-8 hover:bg-blue-600 bg-blue-500" (click)="getColor('blue')"></div>
                <div class="w-1/5 h-8 hover:bg-red-600 bg-red-500" (click)="getColor('red')"></div>
                <div class="w-1/5 h-8 hover:bg-yellow-600 bg-yellow-500" (click)="getColor('yellow')"></div>
                <div class="w-1/5 h-8 hover:bg-green-600 bg-green-500" (click)="getColor('green')"></div>
                <div class="w-1/5 h-8 hover:bg-indigo-600 bg-indigo-500" (click)="getColor('indigo')"></div>
                <div class="w-1/5 h-8 hover:bg-purple-600 bg-purple-500" (click)="getColor('purple')"></div>
                <div class="w-1/5 h-8 hover:bg-pink-600 bg-pink-500" (click)="getColor('pink')"></div>
              </div>
              <a href="javascript:;" class="flex py-3 px-2 text-sm font-bold bg-red-400 text-white">
                <span class="mr-auto">Delete</span>
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiFolderOptionsComponent {
  @Input() folder?: Folder
  @Input() download?: Download
  @Input() width?: string
  isActive = false
  defaultColor = 'indigo'
  colorPalette = false
  isEditing = false
  getColor(color: string): void {
    this.defaultColor = color
  }
  changeTitle(title) {
    this.folder.title = title.target.value
    this.folder.title === '' ? (this.folder.title = 'Unknown') : []
    this.isEditing = false
  }
  downloadMyFile() {
    const link = document.createElement('a')
    link.setAttribute('target', '_blank')
    link.setAttribute('href', this.download.path + this.download.fileName)
    link.setAttribute('download', this.download.fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
}

interface Folder {
  title?: string
  description?: string
}
interface Download {
  path?: string
  fileName?: string
}
