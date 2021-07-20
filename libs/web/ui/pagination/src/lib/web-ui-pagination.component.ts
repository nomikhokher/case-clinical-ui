import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-pagination',
  template: `
    <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div class="flex-1 flex justify-between sm:hidden">
        <a
          href="javascript:void(0)"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="javascript:void(0)"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ n + 1 }}</span>
            to
            <span class="font-medium">{{ n + difference >= pages ? pages : n + difference }}</span>
            of
            <span class="font-medium">{{ pages }}</span>
            results
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              (click)="onPervious()"
              href="javascript:void(0)"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Previous</span>
              <ui-icon size="lg" class="h-6 w-6" icon="chevronLeft"></ui-icon>
            </a>
            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
            <a
              href="javascript:void(0)"
              aria-current="page"
              class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {{ n + 1 }}
            </a>
            <a
              href="javascript:void(0)"
              class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {{ n + 2 }}
            </a>
            <a
              href="javascript:void(0)"
              class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              {{ n + 3 }}
            </a>
            <span
              *ngIf="n + 3 < pages"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
            >
              ...
            </span>
            <a
              href="javascript:void(0)"
              *ngIf="n + 3 < pages"
              class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              {{ n + difference - 2 }}
            </a>
            <a
              href="javascript:void(0)"
              *ngIf="n + 3 < pages"
              class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {{ n + difference - 1 }}
            </a>
            <a
              href="javascript:void(0)"
              *ngIf="n + 3 < pages"
              class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {{ n + difference }}
            </a>
            <a
              (click)="onNext()"
              href="javascript:void(0)"
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Next</span>
              <ui-icon size="lg" class="h-6 w-6" icon="chevronRight"></ui-icon>
            </a>
          </nav>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPaginationComponent {
  @Input() pages?: number
  @Input() difference?: number

  public threeDots = false
  ngOnInit() {
    if (this.pages > 3) {
      this.threeDots = true
    }
  }

  public n = 0
  public onNext() {
    this.n += this.difference
    if (this.n + this.difference + 3 > this.pages) {
      this.n = this.pages - 3
    }
  }
  public onPervious() {
    if (this.n - this.difference >= 0) {
      this.n = this.n - this.difference
    } else if (this.n - this.difference < 0) {
      this.n = 0
    }
  }
}
