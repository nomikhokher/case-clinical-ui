import { Component, Input } from '@angular/core'
@Component({
  selector: 'ui-file-input',
  template: `
    <div class="flex flex-wrap w-full">
      <div class="w-3/12 pr-2">
        <div
          class="w-full h-40 mb-1 border rounded-lg overflow-hidden relative bg-gray-100 dark:bg-gray-500 border-dashed border-2 border-indigo-600"
        >
          <div
            class="absolute top-0 left-0 right-0 bottom-0 w-full h-40 cursor-pointer flex items-center justify-center"
            onClick="document.getElementById('fileInput').click()"
            *ngFor="let item of icon"
          >
            <button
              type="button"
              style="background-color: rgba(255, 255, 255, 0.65)"
              class="hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-sm border border-gray-300 rounded-lg shadow-sm h-14"
            >
              <ui-icon size="sm" class="h-1 w-1" icon="{{ item.tempIcon }}"></ui-icon>
            </button>
          </div>
        </div>
        <input
          name="photo"
          id="fileInput"
          accept="image/*"
          class="hidden"
          type="file"
          multiple
          (change)="getFileDetails($event)"
        />
      </div>
      <div class="w-3/12 pr-2" id="img" *ngFor="let file of myFiles; let i = index">
        <div
          class="w-full h-40 mb-1 border rounded-lg overflow-hidden relative bg-gray-100 border-dashed border-2 border-indigo-600 dark:bg-gray-500"
        >
          <ui-icon size="sm" class="absolute right-0 h-6 w-6" id="cross" icon="x_circle" (click)="remove(i)"></ui-icon>
          <img id="image" class="object-cover w-full h-40" [src]="localUrl[i]" />
        </div>
        <div class="flex justify-between text-xs dark:text-white">
          <h3 id="name">{{ file.name }}</h3>
          <h3 id="size">{{ file.size }}kb</h3>
        </div>
      </div>
    </div>
  `,
})
export class WebUiFileInputComponent {
  @Input() icon?: Icon[]
  myFiles: string[] = []
  localUrl: string[] = []
  ngOnInit() {}
  remove(i) {
    this.myFiles.splice(i, 1)
    this.localUrl.splice(i, 1)
  }
  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.localUrl.push(e.target.result as string)
      }
      this.myFiles.push(e.target.files[i])
      reader.readAsDataURL(e.target.files[i])
      console.log(e.target.files[i])
    }
    console.log(reader.result)
  }
}
export interface Icon {
  tempIcon?: string
}
