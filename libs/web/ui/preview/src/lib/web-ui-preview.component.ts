import { Component, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core'

enum DisplayMode {
  Preview,
  Code,
}

@Component({
  selector: 'ui-preview',
  template: `
    <div>
      <div>
        <div class="flex items-center justify-between py-2">
          <h3 class="text-lg font-medium text-gray-700">Simple Stats</h3>
          <div class="flex items-center">
            <div>
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select
                  id="tabs"
                  name="tabs"
                  class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                >
                  <option selected>Preview</option>
                  <option>Code</option>
                </select>
              </div>
              <div class="hidden sm:block">
                <nav class="flex space-x-2  " aria-label="Tabs">
                  <button
                    (click)="handleTabClick(DISPLAY_MODE.Preview)"
                    class=" flex items-center px-3 py-2 font-medium text-sm rounded-md"
                    [class.theme-bg-50]="DISPLAY_MODE.Preview === activeTab"
                    [class.theme-color-700]="DISPLAY_MODE.Preview === activeTab"
                    [class.text-gray-500]="DISPLAY_MODE.Preview !== activeTab"
                    [class.hover:text-gray-700]="DISPLAY_MODE.Preview !== activeTab"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Preview
                  </button>
                  <button
                    (click)="handleTabClick(DISPLAY_MODE.Code)"
                    class="flex items-center px-3 py-2 font-medium text-sm rounded-md"
                    [class.theme-bg-50]="DISPLAY_MODE.Code === activeTab"
                    [class.theme-color-700]="DISPLAY_MODE.Code === activeTab"
                    [class.text-gray-500]="DISPLAY_MODE.Code !== activeTab"
                    [class.hover:text-gray-700]="DISPLAY_MODE.Code !== activeTab"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Code
                  </button>
                </nav>
              </div>
            </div>
            <div class="border-l border-gray-200 ml-4 pl-4">
              <button class="text-gray-400 h-6 w-6 flex items-center justify-center hover:theme-color-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="p-8 dark:bg-gray-800 bg-gray-50 bg-opacity-70 rounded-lg">
          <ng-container *ngIf="activeTab === DISPLAY_MODE.Preview">
            <ng-content></ng-content>
          </ng-container>
          <ng-container *ngIf="activeTab === DISPLAY_MODE.Code">
            <ui-code [copyButton]="false" [code]="code" [language]="'json'"></ui-code>
          </ng-container>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPreviewComponent implements OnInit {
  DISPLAY_MODE: typeof DisplayMode = DisplayMode

  @Input() code?: string
  @Input() lang?: string
  @Input() component_preview?: string
  @Input() component_props?: any

  activeTab: DisplayMode = DisplayMode.Preview

  code_toggle = false

  ngOnInit() {
    this.lang = this.lang !== undefined ? this.lang : 'html'
  }

  code_toggler(value) {
    this.code_toggle = value
  }

  handleTabClick(mode: DisplayMode) {
    this.activeTab = mode
  }
}
