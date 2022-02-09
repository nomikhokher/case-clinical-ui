import { Component, Input } from '@angular/core'
@Component({
  selector: 'ui-file-input',
  template: `
    <div class="flex gap-10">
      <div class="w-3/12">
        <div
          class="w-full h-40 mb-1 border rounded-lg overflow-hidden relative bg-gray-100 border-dashed border-2 border-indigo-600"
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
          onChange="let file = this.files[0];
					var reader = new FileReader();

					reader.onload = function (e) {
						document.getElementById('image').src = e.target.result;
            document.getElementById('name').textContent = file.name;
            document.getElementById('size').textContent = file.size + 'kb';
            document.getElementById('img').hidden = false;
					};

					reader.readAsDataURL(file);
				"
        />
      </div>
      <div class="w-3/12" hidden id="img">
        <div
          class="w-full h-40 mb-1 border rounded-lg overflow-hidden relative bg-gray-100 border-dashed border-2 border-indigo-600"
        >
          <ui-icon size="sm" class="absolute right-0 h-6 w-6" id="cross" icon="x_circle"></ui-icon>
          <img id="image" class="object-cover w-full h-40" src="https://placehold.co/300x300/e2e8f0/e2e8f0" />
        </div>
        <div class="flex justify-between text-xs">
          <h3 id="name"></h3>
          <h3 id="size"></h3>
        </div>
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
