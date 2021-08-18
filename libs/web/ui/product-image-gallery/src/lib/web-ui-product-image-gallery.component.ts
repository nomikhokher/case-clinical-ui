import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-product-image-gallery',
  styles: [
    `
      .previous-btn {
        width: 54px;
        height: 31px !important;
        margin-top: 32px;
        padding: 20px 40px;
      }
      .next-btn {
        position: relative;
      }
      .next-btn {
        font-family: -webkit-pictograph;
        position: absolute !important;
        right: 34px !important;
        width: 54px;
        height: 31px !important;
        margin-top: 32px;
        padding: 20px 40px;
      }
    `,
  ],
  template: `
    <div class="bg-white">
      <div>
        <div>
          <!-- Image gallery -->
          <div class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div class="grid grid-cols-5 gap-6" aria-orientation="horizontal" role="tablist">
                <button
                  class="previous-btn relative h-16 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                  [disabled]="nextSlide == 3 ? true : false"
                  (click)="prev()"
                >
                  Prev
                </button>
                <ng-container *ngFor="let image of images; let i = index">
                  <button
                    *ngIf="i >= prevSlide && i < nextSlide"
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
                </ng-container>
                <button
                  class="next-btn relative h-16 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                  [disabled]="images.length <= nextSlide ? true : false"
                  (click)="next()"
                >
                  Next
                </button>
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

  url: String
  nextSlide: number = 3
  prevSlide: number = 0

  ngOnInit(): void {
    this.url = this.images[0].url
  }

  showImage(url) {
    this.url = url
  }

  next() {
    this.prevSlide = this.nextSlide
    this.nextSlide += 3
  }

  prev() {
    this.prevSlide -= 3
    this.nextSlide -= 3
  }
}

interface URL {
  url?: string
}
