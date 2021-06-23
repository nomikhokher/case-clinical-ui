import { Component, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core'

enum DisplayMode {
  Preview,
  Code,
}

export interface ComponentProp {
  label?: string
  description?: string
  dataType?: string
  prop?: string
}

@Component({
  selector: 'ui-preview',
  template: `
    <ui-page containerClass="bg-gray-50 dark:bg-gray-900" [headerTitle]="title" [headerMeta]="directoryMeta">
      <div>
        <div class="flex items-center justify-between py-2">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">{{ title }}</h3>
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
                    [class.dark:text-gray-400]="DISPLAY_MODE.Preview !== activeTab"
                    [class.dark:hover:text-gray-300]="DISPLAY_MODE.Preview !== activeTab"
                    [class.dark:theme-bg-800]="DISPLAY_MODE.Preview === activeTab"
                    [class.dark:theme-color-100]="DISPLAY_MODE.Preview === activeTab"
                    [class.text-gray-500]="DISPLAY_MODE.Preview !== activeTab"
                    [class.hover:text-gray-700]="DISPLAY_MODE.Preview !== activeTab"
                    aria-current="page"
                  >
                    <ui-icon icon="eye" class="h-5 w-5 mr-1"></ui-icon>
                    Preview
                  </button>
                  <button
                    (click)="handleTabClick(DISPLAY_MODE.Code)"
                    class="flex items-center px-3 py-2 font-medium text-sm rounded-md"
                    [class.theme-bg-50]="DISPLAY_MODE.Code === activeTab"
                    [class.theme-color-700]="DISPLAY_MODE.Code === activeTab"
                    [class.text-gray-500]="DISPLAY_MODE.Code !== activeTab"
                    [class.dark:text-gray-400]="DISPLAY_MODE.Code !== activeTab"
                    [class.dark:hover:text-gray-300]="DISPLAY_MODE.Code !== activeTab"
                    [class.dark:theme-bg-800]="DISPLAY_MODE.Code === activeTab"
                    [class.dark:theme-color-100]="DISPLAY_MODE.Code === activeTab"
                    [class.hover:text-gray-700]="DISPLAY_MODE.Code !== activeTab"
                    aria-current="page"
                  >
                    <ui-icon icon="code" class="h-5 w-5 mr-1"></ui-icon>
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
        <div class="p-8 dark:bg-gray-800 bg-gray-200 bg-opacity-70 sm:rounded-lg">
          <ng-container *ngIf="activeTab === DISPLAY_MODE.Preview">
            <ng-content></ng-content>
          </ng-container>
          <ng-container *ngIf="activeTab === DISPLAY_MODE.Code">
            <ui-code [copyButton]="false" [code]="code" [language]="'json'"></ui-code>
          </ng-container>
        </div>
      </div>

      <div *ngIf="component_inputs?.length > 0" class="flex flex-col mt-10">
        <div class="-my-2 overflow-x-auto">
          <div class="pb-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Inputs</h3>
          </div>
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-white dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Data Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Attribute
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr *ngFor="let input of component_inputs">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      {{ input.label }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {{ input.description }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-pink-500">
                      <code>
                        {{ input.dataType }}
                      </code>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                      <code>
                        {{ input.prop }}
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div *ngIf="component_outputs?.length > 0" class="flex flex-col mt-10">
        <div class="-my-2 overflow-x-auto">
          <div class="pb-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Outputs</h3>
          </div>
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-white dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Data Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Attribute
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr *ngFor="let outputs of component_outputs">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      {{ outputs.label }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {{ outputs.description }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-pink-500">
                      <code>
                        {{ outputs.dataType }}
                      </code>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                      <code>
                        {{ outputs.prop }}
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ui-page>
  `,
})
export class WebUiPreviewComponent implements OnInit {
  DISPLAY_MODE: typeof DisplayMode = DisplayMode

  @Input() title?: string
  @Input() code?: string
  @Input() lang?: string
  @Input() component_preview?: string
  @Input() component_inputs?: ComponentProp[]
  @Input() component_outputs?: ComponentProp[]
  @Input() directory?: string

  activeTab: DisplayMode = DisplayMode.Preview
  code_toggle = false

  get directoryMeta() {
    return [{ icon: 'folder', label: this.directory }]
  }

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
