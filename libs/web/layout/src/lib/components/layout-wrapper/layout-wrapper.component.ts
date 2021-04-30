import { Component, EventEmitter, Input, Output } from '@angular/core'
import { WebLayoutStore } from '../../web-layout.store'

@Component({
  selector: 'layout-wrapper',
  template: `
    <div
      class="fixed flex z-50 items-center justify-center right-0 w-10 h-10 shadow-lg rounded-l-lg z-999 cursor-pointer bg-red-600 bg-opacity-90 print:hidden"
      style="top: 275px"
      (click)="toggle()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-white animate-spin-slow"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <ui-slide-over-layout [slideOverHeader]="slideOverHeader" *ngIf="settingsDrawer">
      <section id="headerSlideOverLayout">
        <div class="py-6 px-4 bg-indigo-700 sm:px-6">
          <div class="flex flex-row items-center text-white bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-3 text-2xl font-semibold tracking-tight">Settings</div>
          </div>
        </div>
      </section>

      <section id="mainSlideOverLayout">
        <div class="flex flex-col p-6">
          <!-- Theme -->
          <div class="text-md font-semibold text-secondary">THEME</div>
          <div class="grid grid-cols-3 gap-3 mt-6">
            <ng-container *ngFor="let theme of themes">
              <div class="flex items-center px-4 py-3 rounded-full cursor-pointer bg-hover" style="background:#eceeef">
                <div class="w-4 h-4 rounded-full" [style.background-color]="theme[1].primary"></div>
                <div class="ml-2.5 font-medium leading-5" [class.text-secondary]="theme !== theme[0]">
                  {{ theme[0] | titlecase }}
                </div>
              </div>
            </ng-container>
          </div>
          <hr class="my-8" />
          <div class="text-md font-semibold text-secondary">SCHEME</div>
          <div class="grid grid-cols-3 gap-3 justify-items-start mt-6">
            <!-- Auto -->
            <div
              class="flex items-center py-3 pl-5 pr-6 rounded-full cursor-pointer"
              style="background:#eceeef"
              (click)="setScheme('auto')"
            >
              <div class="flex items-center rounded-full overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                  />
                </svg>
              </div>
              <div class="flex items-center ml-2 font-medium leading-5">Auto</div>
            </div>
            <!-- Dark -->
            <div
              class="flex items-center py-3 pl-5 pr-6 rounded-full cursor-pointer"
              style="background:#eceeef"
              (click)="setScheme('dark')"
            >
              <div class="flex items-center rounded-full overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <div class="flex items-center ml-2 font-medium leading-5">Dark</div>
            </div>
            <!-- Light -->
            <div
              class="flex items-center py-3 pl-5 pr-6 rounded-full cursor-pointer"
              style="background:#eceeef"
              (click)="setScheme('light')"
            >
              <div class="flex items-center rounded-full overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="flex items-center ml-2 font-medium leading-5">Light</div>
            </div>
          </div>

          <hr class="my-8" />
          <!-- Layout -->
          <div class="text-md font-semibold text-secondary">LAYOUT</div>
          <div class="grid grid-cols-3 gap-3 mt-6">
            <!-- Empty -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('empty')">
              <div class="flex flex-col h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="flex flex-col flex-auto bg-gray-50 dark:bg-gray-900"></div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Empty</div>
            </div>

            <!-- Classic -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('classic')">
              <div class="flex h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="w-8 bg-gray-100 dark:bg-gray-800">
                  <div class="mt-3 mx-1.5 space-y-1">
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto border-l">
                  <div class="h-3 bg-gray-100 dark:bg-gray-800">
                    <div class="flex items-center justify-end h-full mr-1.5">
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto border-t bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Classic</div>
            </div>

            <!-- Classy -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('classy')">
              <div class="flex h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="w-8 bg-gray-100 dark:bg-gray-800">
                  <div class="flex items-center mt-1 mx-1">
                    <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1 h-1 ml-auto rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1 h-1 ml-0.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                  <div class="w-4 h-4 mt-2.5 mx-auto rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div class="mt-2 mx-1 space-y-1">
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto border-l">
                  <div class="h-3 bg-gray-100 dark:bg-gray-800">
                    <div class="flex items-center justify-end h-full mr-2">
                      <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto border-t bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Classy</div>
            </div>

            <!-- Compact -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('compact')">
              <div class="flex h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="w-5 bg-gray-100 dark:bg-gray-800">
                  <div class="w-3 h-3 mt-2 mx-auto rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                  <div class="flex flex-col items-center w-full mt-2 space-y-1">
                    <div class="w-3 h-2.5 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-3 h-2.5 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-3 h-2.5 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto border-l">
                  <div class="h-3 bg-gray-100 dark:bg-gray-800">
                    <div class="flex items-center justify-end h-full mr-1.5">
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto border-t bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Compact</div>
            </div>

            <!-- Dense -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('dense')">
              <div class="flex h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="w-4 bg-gray-100 dark:bg-gray-800">
                  <div class="w-2 h-2 mt-2 mx-auto rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                  <div class="flex flex-col items-center w-full mt-2 space-y-1">
                    <div class="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto border-l">
                  <div class="h-3 bg-gray-100 dark:bg-gray-800">
                    <div class="flex items-center justify-end h-full mr-1.5">
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto border-t bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Dense</div>
            </div>

            <!-- Futuristic -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('futuristic')">
              <div class="flex h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="w-8 bg-gray-100 dark:bg-gray-800">
                  <div class="flex flex-col flex-auto h-full py-3 px-1.5 space-y-1">
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                    <div class="flex-auto"></div>
                    <div class="h-1 rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto border-l">
                  <div class="h-3 bg-gray-100 dark:bg-gray-800">
                    <div class="flex items-center justify-end h-full mr-1.5">
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto border-t bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Futuristic</div>
            </div>

            <!-- Thin -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('thin')">
              <div class="flex h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="w-3 bg-gray-100 dark:bg-gray-800">
                  <div class="w-1.5 h-1.5 mt-2 mx-auto rounded-sm bg-gray-300 dark:bg-gray-700"></div>
                  <div class="flex flex-col items-center w-full mt-2 space-y-1">
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto border-l">
                  <div class="h-3 bg-gray-100 dark:bg-gray-800">
                    <div class="flex items-center justify-end h-full mr-1.5">
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto border-t bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Thin</div>
            </div>

            <div class="col-span-2"></div>

            <!-- Centered -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('centered')">
              <div class="flex h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="flex flex-col flex-auto my-1 mx-2 border rounded-md overflow-hidden">
                  <div class="flex items-center h-3 bg-gray-100 dark:bg-gray-800">
                    <div class="flex ml-1.5">
                      <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-3 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-3 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-3 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                    <div class="flex items-center justify-end ml-auto mr-1.5">
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div class="flex flex-auto border-t bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Centered</div>
            </div>

            <!-- Enterprise -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('enterprise')">
              <div class="flex flex-col h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="flex items-center h-3 px-2 bg-gray-100 dark:bg-gray-800">
                  <div class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div class="flex items-center justify-end ml-auto space-x-1">
                    <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
                <div class="flex items-center h-3 px-2 border-t border-b space-x-1 bg-gray-100 dark:bg-gray-800">
                  <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <div class="flex flex-col flex-auto my-1 mx-2 border rounded overflow-hidden">
                  <div class="flex flex-auto bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Enterprise</div>
            </div>

            <!-- Material -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('material')">
              <div class="flex flex-col h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="flex flex-col flex-auto my-1 mx-2 border rounded overflow-hidden">
                  <div class="flex items-center h-4 px-2 bg-gray-100 dark:bg-gray-800">
                    <div class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="flex items-center justify-end ml-auto space-x-1">
                      <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div class="flex items-center h-2 px-2 space-x-1 bg-gray-100 dark:bg-gray-800">
                    <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                  <div class="flex flex-auto border-t bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Material</div>
            </div>

            <!-- Modern -->
            <div class="flex flex-col cursor-pointer" (click)="setLayout('modern')">
              <div class="flex flex-col h-20 rounded-md overflow-hidden border-2 hover:opacity-80">
                <div class="flex items-center h-4 px-2 border-b bg-gray-100 dark:bg-gray-800">
                  <div class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div class="flex items-center h-3 ml-2 space-x-1">
                    <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-3 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                  <div class="flex items-center justify-end ml-auto space-x-1">
                    <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto">
                  <div class="flex flex-auto bg-gray-50 dark:bg-gray-900"></div>
                </div>
              </div>
              <div class="mt-2 text-md font-medium text-center text-secondary">Modern</div>
            </div>
          </div>
        </div>
      </section>
    </ui-slide-over-layout>
  `,
})
export class LayoutWrapperComponent {
  @Output() themeModeChange = new EventEmitter()

  public slideOverHeader: boolean = true
  public settingsDrawer: boolean = false

  constructor(private readonly layoutStore: WebLayoutStore) {}

  setScheme(themeMode: 'dark' | 'light' | 'auto') {
    this.themeModeChange.emit(themeMode)
  }

  public themes: [string, any][] = [
    ['amber', { primary: '#f59e0b', accent: '#1e293b', warn: '#dc2626' }],
    ['brand', { primary: '#2196f3', accent: '#1e293b', warn: '#dc2626' }],
    ['default', { primary: '#4f46e5', accent: '#1e293b', warn: '#dc2626' }],
    ['indigo', { primary: '#0d9488', accent: '#1e293b', warn: '#dc2626' }],
    ['purple', { primary: '#9333ea', accent: '#1e293b', warn: '#dc2626' }],
    ['rose', { primary: '#f43f5e', accent: '#1e293b', warn: '#dc2626' }],
  ]

  ngOnInit() {}

  toggle() {
    this.settingsDrawer = !this.settingsDrawer
  }

  setLayout(value: string) {
    console.log(value)
  }
}
