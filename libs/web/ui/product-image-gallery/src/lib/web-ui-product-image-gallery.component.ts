import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-product-image-gallery',
  template: `
    <div class="bg-white">
      <div>
        <div>
          <!-- Image gallery -->
          <div class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                <button
                  *ngFor="let image of images"
                  id="tabs-1-tab-1"
                  class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                  (click)="showImage(image.url)"
                >
                  <p class="sr-only">Angled view</p>
                  <div class="absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src="{{ image.url }}"
                      alt="Angled front view with bag zipped and handles upright."
                      class="w-full h-full object-center object-cover"
                    />
                  </div>
                  <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                  <div
                    class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    aria-hidden="true"
                  ></div>
                </button>

                <!-- More images... -->
              </div>
            </div>

            <div class="w-full">
              <!-- Tab panel, show/hide based on tab state. -->

              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <img
                  src="{{ url }}"
                  alt="Angled front view with bag zipped and handles upright."
                  class="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </div>

              <!-- More images... -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiProductImageGalleryComponent {
  @Input() images: URL[]

  url: string

  ngOnInit(): void {
    this.url = this.images[0].url
  }

  showImage(url) {
    this.url = url
  }
}

interface URL {
  url?: string
}
