import { Component, ElementRef, ViewChild } from '@angular/core'
import { WebLayoutStore } from './web-layout.store'
import colors from 'tailwindcss/colors'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col h-full">
        <div>
          <ui-stacked-simple
            *ngIf="layout === 'empty'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-stacked-simple>

          <ui-sidebar-classy
            *ngIf="layout === 'classy'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-sidebar-classy>

          <ui-sidebar-classic
            *ngIf="layout === 'classic'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-sidebar-classic>

          <ui-sidebar-compact
            *ngIf="layout === 'compact'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-sidebar-compact>

          <ui-stacked-modern
            *ngIf="layout === 'modern'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-stacked-modern>

          <ui-stacked-enterprise
            *ngIf="layout === 'enterprise'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-stacked-enterprise>

          <ui-stacked-centered
            *ngIf="layout === 'centered'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-stacked-centered>

          <ui-sidebar-dense
            *ngIf="layout === 'dense'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-sidebar-dense>

          <ui-sidebar-futuristic
            *ngIf="layout === 'futuristic'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-sidebar-futuristic>

          <ui-sidebar-thin
            *ngIf="layout === 'thin'"
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm?.links?.profile"
          ></ui-sidebar-thin>
        </div>

        <div
          class="fixed flex z-50 items-center justify-center right-0 w-10 h-10 shadow-lg rounded-l-lg z-999 cursor-pointer theme-bg-600 bg-opacity-90 print:hidden"
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

        <ui-slide-over-layout
          [slideOverHeader]="slideOverHeader"
          #sideOverlay
          (click)="clickOutside($event)"
          *ngIf="settingsDrawer"
        >
          <section id="headerSlideOverLayout">
            <div class="py-6 px-4 theme-bg-700 sm:px-6">
              <div class="flex flex-row items-center text-white bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="ml-3 text-2xl font-seminole tracking-tight dark:text-gray-300">Settings</div>
              </div>
            </div>
          </section>

          <section id="mainSlideOverLayout">
            <div class="flex flex-col p-6">
              <!-- Theme -->
              <div class="text-md font-seminole text-secondary dark:text-gray-300">THEME</div>
              <div class="grid grid-cols-2 gap-2 mt-6">
                <ng-container *ngFor="let theme of themes">
                  <div
                    class="flex items-center px-4 py-3 cursor-pointer bg-hover"
                    style="background:#eceeef"
                    [ngClass]="theme.colorActive && 'theme-border-color-600 border-2'"
                    [style.color]="theme.hashCode && theme.hashCode"
                    (click)="setTheme(theme.color, theme.id)"
                  >
                    <div class="w-4 h-4 rounded-full" [style.background-color]="theme.hashCode"></div>
                    <div class="ml-2.5 font-medium leading-5">
                      {{ theme.color | titlecase }}
                    </div>
                  </div>
                </ng-container>
              </div>
              <hr class="my-8" />
              <div class="text-md font-semibold text-secondary dark:text-gray-300">SCHEME</div>
              <div class="grid grid-cols-3 gap-3 justify-items-start mt-6">
                <!-- Auto -->
                <div
                  class="flex items-center py-3 pl-5 pr-6 cursor-pointer"
                  style="background:#eceeef"
                  [ngClass]="isActive === 'auto' && 'theme-color-600 theme-ring-color-600 ring-2'"
                  (click)="setScheme('auto')"
                >
                  <div class="flex items-center overflow-hidden">
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
                  class="flex items-center py-3 pl-5 pr-6 cursor-pointer"
                  style="background:#eceeef"
                  [ngClass]="isActive === 'dark' && 'theme-color-600 theme-ring-color-600 ring-2'"
                  (click)="setScheme('dark')"
                >
                  <div class="flex items-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  </div>
                  <div class="flex items-center ml-2 font-medium leading-5">Dark</div>
                </div>
                <!-- Light -->
                <div
                  class="flex items-center py-3 pl-5 pr-6 cursor-pointer"
                  style="background:#eceeef"
                  [ngClass]="isActive === 'light' && 'theme-color-600 theme-ring-color-600 ring-2'"
                  (click)="setScheme('light')"
                >
                  <div class="flex items-center overflow-hidden">
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
              <div class="text-md font-semibold text-secondary dark:text-gray-300">LAYOUT</div>
              <div class="grid grid-cols-3 gap-3 mt-6">
                <!-- Empty -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('empty')">
                  <div
                    class="flex flex-col h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'empty' && 'border-2 theme-border-color-600'"
                  >
                    <div class="flex flex-col flex-auto bg-gray-50 dark:bg-gray-900"></div>
                  </div>
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'empty' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Empty
                  </div>
                </div>

                <!-- Classic -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('classic')">
                  <div
                    class="flex h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'classic' && 'border-2 theme-border-color-600'"
                  >
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'classic' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Classic
                  </div>
                </div>

                <!-- Classy -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('classy')">
                  <div
                    class="flex h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'classy' && 'border-2 theme-border-color-600'"
                  >
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'classy' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Classy
                  </div>
                </div>

                <!-- Compact -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('compact')">
                  <div
                    class="flex h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'compact' && 'border-2 theme-border-color-600'"
                  >
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'compact' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Compact
                  </div>
                </div>

                <!-- Dense -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('dense')">
                  <div
                    class="flex h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'dense' && 'border-2 theme-border-color-600'"
                  >
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'dense' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Dense
                  </div>
                </div>

                <!-- Futuristic -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('futuristic')">
                  <div
                    class="flex h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'futuristic' && 'border-2 theme-border-color-600'"
                  >
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'futuristic' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Futuristic
                  </div>
                </div>

                <!-- Thin -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('thin')">
                  <div
                    class="flex h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'thin' && 'border-2 theme-border-color-600'"
                  >
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'thin' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Thin
                  </div>
                </div>

                <div class="col-span-2"></div>

                <!-- Centered -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('centered')">
                  <div
                    class="flex h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'centered' && 'border-2 theme-border-color-600'"
                  >
                    <div class="flex flex-col flex-auto my-1 mx-2 border overflow-hidden">
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'centered' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Centered
                  </div>
                </div>

                <!-- Enterprise -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('enterprise')">
                  <div
                    class="flex flex-col h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'enterprise' && 'border-2 theme-border-color-600'"
                  >
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'enterprise' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Enterprise
                  </div>
                </div>

                <!-- Modern -->
                <div class="flex flex-col cursor-pointer" (click)="setLayout('modern')">
                  <div
                    class="flex flex-col h-20 overflow-hidden border-2 hover:opacity-80"
                    [ngClass]="layout === 'modern' && 'border-2 theme-border-color-600'"
                  >
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
                  <div
                    class="mt-2 text-md font-medium text-center text-secondary dark:text-gray-300"
                    [ngClass]="layout === 'modern' && 'dark:theme-color-600 theme-color-600'"
                  >
                    Modern
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ui-slide-over-layout>
      </div>
    </ng-container>
  `,
  providers: [WebLayoutStore],
})
export class WebLayoutComponent {
  vm$ = this.layoutStore.vm$
  links$ = this.layoutStore.links$

  public layout: string = localStorage.getItem('layout') ? localStorage.getItem('layout') : 'classy'
  public showMenu: boolean = false
  public isActive: string = localStorage?.getItem('mode')

  @ViewChild('sideOverlay') modalOverlay: ElementRef

  constructor(private readonly layoutStore: WebLayoutStore) {}

  setScheme(themeValue) {
    this.isActive = themeValue
    localStorage.setItem('mode', themeValue)
    this.layoutStore.updateThemeMode(themeValue)
  }

  setTheme(themeColor, id) {
    let rootSelecttor = document.querySelector(':root') as any

    let arr = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

    for (let x = 0; x < arr.length; x++) {
      rootSelecttor.style.setProperty('--theme-color-' + arr[x], colors[themeColor][arr[x]])
    }

    this.themes.map((x) => {
      if (x.id === id) {
        return (x.colorActive = true)
      }
      return (x.colorActive = false)
    })
  }

  setLayout(layout) {
    this.layout = layout
    localStorage.setItem('layout', this.layout)
  }

  public slideOverHeader: boolean = true
  public settingsDrawer: boolean = false

  openMenu() {
    this.showMenu = !this.showMenu
  }

  public themes: { id: number; color: string; hashCode: string; colorActive: boolean }[] = [
    { id: 1, color: 'gray', hashCode: '#52525B', colorActive: false },
    { id: 2, color: 'red', hashCode: '#DC2626', colorActive: false },
    { id: 3, color: 'yellow', hashCode: '#CA8A04', colorActive: false },
    { id: 4, color: 'green', hashCode: '#16A34A', colorActive: false },
    { id: 5, color: 'blue', hashCode: '#2563EB', colorActive: false },
    { id: 6, color: 'indigo', hashCode: '#4F46E5', colorActive: false },
    { id: 7, color: 'purple', hashCode: '#9333EA', colorActive: false },
    { id: 8, color: 'pink', hashCode: '#DB2777', colorActive: false },
    { id: 9, color: 'rose', hashCode: '#E11D48', colorActive: false },
    { id: 10, color: 'fuchsia', hashCode: '#C026D3', colorActive: false },
    { id: 11, color: 'violet', hashCode: '#7C3AED', colorActive: false },
    { id: 12, color: 'lightBlue', hashCode: '#0284C7', colorActive: false },
    { id: 13, color: 'cyan', hashCode: '#0891B2', colorActive: false },
    { id: 14, color: 'teal', hashCode: '#0D9488', colorActive: false },
    { id: 15, color: 'emerald', hashCode: '#059669', colorActive: false },
    { id: 16, color: 'lime', hashCode: '#65A30D', colorActive: false },
    { id: 17, color: 'orange', hashCode: '#EA580C', colorActive: false },
    { id: 18, color: 'warmGray', hashCode: '#57534E', colorActive: false },
    { id: 19, color: 'trueGray', hashCode: '#525252', colorActive: false },
    { id: 20, color: 'coolGray', hashCode: '#4B5563', colorActive: false },
    { id: 21, color: 'blueGray', hashCode: '#475569', colorActive: false },
  ]

  ngOnInit() {}

  toggle() {
    this.settingsDrawer = !this.settingsDrawer
  }

  clickOutside(event: Event) {
    const target = event.target
    this.settingsDrawer = this.modalOverlay.nativeElement == event.target
  }
}
