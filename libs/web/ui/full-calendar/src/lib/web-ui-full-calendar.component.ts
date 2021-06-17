import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core'
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarComponent } from '@fullcalendar/angular'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import * as moments from 'moment'
import { Calendar as FullCalendar } from '@fullcalendar/core'

@Component({
  selector: 'ui-full-calendar',
  styleUrls: ['./ui-full-calendar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="demo-app border" *ngIf="isCalendar">
      <!-- <div class="demo-app-sidebar">
      <div class="demo-app-sidebar-section">
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <div class="demo-app-sidebar-section">
        <label>
          <input type="checkbox" [checked]="calendarVisible" (change)="handleCalendarToggle()" />
          toggle whole calendar
        </label>
      </div>
      <div class="demo-app-sidebar-section">
        <label>
          <input type="checkbox" [checked]="calendarOptions.weekends" (change)="handleWeekendsToggle()" />
          toggle weekends
        </label>
      </div>
      <div class="demo-app-sidebar-section">
        <h2>All Events ({{ currentEvents.length }})</h2>
        <ul>
          <li *ngFor="let event of currentEvents">
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div> -->
      <div class="demo-app-sidebar">
        <div class="flex flex-col  min-h-full p-8">
          <div class="pb-6 text-3xl font-extrabold tracking-tight">Calendar</div>
          <div class="group flex items-center justify-between mb-3 calender">
            <span class="text-lg font-medium">Calendars</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 only-show-on-hover cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="group flex items-center justify-between mt-2 ng-star-inserted personal" style="">
            <div class="flex items-center">
              <input type="checkbox" id="personal" />
              <span class="dots ml-2 bg-green-500"></span>
              <label class="ml-2 leading-none" for="personal">Personal</label>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 personal-show-icon cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <div class="group flex items-center justify-between mt-2 ng-star-inserted work">
            <div class="flex items-center">
              <input type="checkbox" id="work" />
              <span class="dots ml-2 bg-indigo-500"></span>
              <label class="ml-2 leading-none" for="work">Work</label>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 work-show-icon cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <div
            class="group flex items-center justify-between mt-2 ng-star-inserted appointment cursor-pointer"
            style=""
          >
            <div class="flex items-center">
              <input type="checkbox" id="appoitment" />
              <span class="dots ml-2 bg-pink-500"></span>
              <label class="ml-2 leading-none" for="appoitment">Appointment</label>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 appointment-show-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <div class="-mx-4 mt-auto setting" (click)="onSetting()">
            <a class="flex items-center w-full py-3 px-4 rounded-full hover:bg-hover" href="javascript:void(0)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="ml-2 font-medium leading-none">Settings</span></a
            >
          </div>
        </div>
      </div>
      <div class="demo-app-main">
        <full-calendar *ngIf="calendarVisible" [options]="calendarOptions" #fullCalendar></full-calendar>
      </div>
    </div>
    <div *ngIf="isSetting">
      <div class="m-4 flex items-center upperSetting">
        <span class="backIcon p-3 cursor-pointer" (click)="onBack()"
          ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            /></svg
        ></span>
        <span class="mx-2 text-lg">Setting</span>
      </div>
      <div class="mt-5 ml-4">
        <div class="grid grid-cols-4 ">
          <form action="">
            <div class="mb-4">
              <label for="location" class="block text-sm font-medium text-gray-700">Date Format</label>
              <select
                id="location"
                name="location"
                class="mt-1 block w-full pl-3 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option selected>Aug 20, 2021</option>
                <option>2/31/2021</option>
                <option>31/2/2021</option>
                <option>2021-31-2</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="location" class="block text-sm font-medium text-gray-700">Time Format</label>
              <select
                id="location"
                name="location"
                class="mt-1 block w-full pl-3 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option selected>1:00 PM</option>
                <option>13:00</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="location" class="block text-sm font-medium text-gray-700">Start week on</label>
              <select
                id="location"
                name="location"
                class="mt-1 block w-full pl-3 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option selected>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
              </select>
            </div>
            <div class="text-center">
              <button
                type="button"
                class="items-center px-5 w-full my-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- modal title -->

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed z-10 overflow-y-auto modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="p-3 w-full">
                <label class="ml-2 text-lg" for="addEvt">Add Event</label>
                <br />
                <input
                  class="w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md "
                  type="text"
                  name="title"
                  id="addEvt"
                  [(ngModel)]="title"
                />
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              (click)="addEventHandle()"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Add
            </button>
            <button
              type="button"
              (click)="remoModal()"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Remove Date Modal -->

    <div class="fixed z-10 overflow-y-auto remove-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="p-3 text-center">Are you sure do you want to remove the event?</div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              (click)="removeEventHandle()"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Remove
            </button>
            <button
              type="button"
              (click)="removeModal()"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Modal -->
    <div class="fixed z-10 overflow-y-auto info-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        >
          <div>
            <div class="flex-auto p-8 ng-star-inserted">
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mat-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div class="flex flex-auto justify-between ml-6">
                  <div>
                    <div class="text-3xl font-semibold tracking-tight leading-none">Consulting</div>
                    <div class="mt-0.5 text-secondary">Tuesday, June 8</div>
                    <div class="text-secondary"></div>
                  </div>
                  <div class="flex -mt-2 -mr-2 ml-10">
                    <button
                      class="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                      (click)="updateEvent()"
                    >
                      <span class="mat-button-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      class="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                      (click)="removeEvent()"
                    >
                      <span class="mat-button-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex mt-6 ng-star-inserted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <div class="flex-auto ml-6">Sarah and Jessica will be joining the call</div>
              </div>
              <div class="flex mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div class="flex flex-auto items-center ml-6">
                  <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <div class="ml-3 leading-none">Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- update modal -->
    <div class="fixed z-10 overflow-y-auto update-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        >
          <div>
            <form
              novalidate=""
              class="flex flex-col w-full p-6 pt-8 sm:pt-10 sm:pr-8 ng-untouched ng-pristine ng-valid ng-star-inserted"
            >
              <input type="hidden" [(ngModel)]="updateId" [ngModelOptions]="{ standalone: true }" />
              <div class="flex items-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <div class="flex flex-auto">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="w-full ml-3 pl-3 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="Event title"
                    [(ngModel)]="updateTile"
                  />
                </div>
              </div>
              <div class="flex items-start mt-5">
                <div class="mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="flex flex-auto">
                  <input
                    autocomplete="off"
                    type="text"
                    class="w-full pl-3 ml-3 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    matInput
                    ngxDaterangepickerMd
                    [autoApply]="options.autoApply"
                    [linkedCalendars]="options.linkedCalendars"
                    [singleDatePicker]="options.singleDatePicker"
                    applyLabel="Okay"
                    [showDropdowns]="true"
                    startKey="start"
                    endKey="end"
                    [(ngModel)]="selected"
                    [showWeekNumbers]="options.showWeekNumbers"
                    [showCancel]="options.showCancel"
                    [showClearButton]="options.showClearButton"
                    [showISOWeekNumbers]="options.showISOWeekNumbers"
                    [customRangeDirection]="options.customRangeDirection"
                    [lockStartDate]="options.lockStartDate"
                    [closeOnAutoApply]="options.closeOnAutoApply"
                    firstMonthDayClass="first-day"
                    lastMonthDayClass="last-day"
                    emptyWeekRowClass="empty-week"
                    lastDayOfPreviousMonthClass="last-previous-day"
                    firstDayOfNextMonthClass="first-next-day"
                    name="daterange"
                  />
                </div>
              </div>
              <div class="flex justify-items-center items-center pt-5" id="mat-checkbox-5">
                <label class="flex justify-center" for="mat-checkbox-5-input">
                  <input
                    type="checkbox"
                    class="mat-checkbox-input cdk-visually-hidden"
                    id="mat-checkbox-5-input"
                    tabindex="0"
                    aria-checked="false"
                  />
                  <span class="flex justify-center pl-3 mat-checkbox-label"
                    ><span style="display: none;">&nbsp;</span> All day
                  </span>
                </label>
              </div>
              <div class="flex items-center mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <div
                  class="flex flex-auto items-center h-12 ml-3 rounded-md border cursor-pointer shadow-sm border-gray-300 dark:bg-black dark:bg-opacity-5 dark:border-gray-500"
                >
                  <div class="flex-auto pl-3 w-full">Does not repeat</div>
                </div>
              </div>
              <div class="flex items-center mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <div class="ml-3 w-full">
                  <div>
                    <select
                      id="location"
                      name="location"
                      class="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option>USA</option>
                      <option selected>Canada</option>
                      <option>EU</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <div class="flex flex-auto ml-3">
                  <textarea
                    class="resize-none border rounded-md w-full"
                    placeholder="Event description"
                    id="mat-input-9"
                    data-placeholder="Event description"
                    aria-invalid="false"
                    aria-required="false"
                  >
                  </textarea>
                </div>
              </div>
              <div class="ml-auto mt-6">
                <button
                  type="button"
                  class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  (click)="updateEventHandle()"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiFullCalendarComponent {
  @ViewChild('fullCalendar') fullCalendar: FullCalendarComponent

  dropDownMenu: boolean = false
  isCalendar = true
  isSetting = false
  views: any
  viewTitle: string
  title: string
  _calendarApi
  _removeEvt
  _clickInfo: EventClickArg
  _selectInfo: DateSelectArg
  updateTile: string
  updateId: string
  currentEvents: EventApi[] = []
  _fullCalendarApi: FullCalendar
  getEventById: any
  getDate = JSON.parse(localStorage.getItem('events'))

  options: any = {
    autoApply: false,
    alwaysShowCalendars: false,
    showCancel: false,
    showClearButton: false,
    linkedCalendars: true,
    singleDatePicker: false,
    showWeekNumbers: false,
    showISOWeekNumbers: false,
    customRangeDirection: true,
    lockStartDate: false,
    closeOnAutoApply: true,
  }

  selected: { startDate; endDate }

  change(data) {
    if (data.startDate == null || data.endDate == null) {
      return
    }
    {
      console.log(moments(data.startDate._d).format('YYYY-MM-DD'))
      console.log(moments(data.endDate._d).format('YYYY-MM-DD'))
    }
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (!localStorage.getItem('events')) {
      localStorage.setItem('events', JSON.stringify(INITIAL_EVENTS))
    }

    setTimeout(function () {
      window.dispatchEvent(new Event('resize'))
    }, 1)
  }

  ngAfterViewInit(): void {
    this._fullCalendarApi = this.fullCalendar.getApi()
  }

  calendarVisible = true
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: this.getDate, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this
    calendarOptions.weekends = !calendarOptions.weekends
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    this.elementRef.nativeElement.querySelector('.modal').classList.add('inset-0')
    this._calendarApi = selectInfo.view.calendar
    this._selectInfo = selectInfo
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.elementRef.nativeElement.querySelector('.info-modal').classList.add('inset-0')
    this._removeEvt = clickInfo.view.calendar
    this._clickInfo = clickInfo
    this.updateId = clickInfo.event._def.publicId
    this.getEventById = clickInfo.view.calendar.getEventById(this.updateId)
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events
  }

  public onSetting() {
    this.isCalendar = false
    this.isSetting = true
  }
  public onBack() {
    this.isSetting = false
    this.isCalendar = true
  }
  remoModal(): void {
    this.elementRef.nativeElement.querySelector('.modal').classList.remove('inset-0')
  }
  removeModal() {
    this.elementRef.nativeElement.querySelector('.remove-modal').classList.remove('inset-0')
  }

  addEventHandle(): void {
    this._calendarApi.unselect() // clear date selection

    if (this.title) {
      let event = {
        id: createEventId(),
        title: this.title,
        start: this._selectInfo.startStr,
        end: this._selectInfo.endStr,
        allDay: this._selectInfo.allDay,
      }
      this._calendarApi.addEvent(event)

      this.getDate.push(event)
      localStorage.setItem('events', JSON.stringify(this.getDate))
    }
    this.elementRef.nativeElement.querySelector('.modal').classList.remove('inset-0')
  }

  updateEventHandle() {
    const data = JSON.parse(localStorage.getItem('events'))

    this.getDate = data.map((x) => {
      if (x.id == this.updateId) {
        return {
          ...x,
          title: this.updateTile,
        }
      }
      return x
    })

    localStorage.setItem('events', JSON.stringify(this.getDate))

    this._removeEvt.removeAllEvents()
    this._removeEvt.addEventSource(this.getDate)
    this.elementRef.nativeElement.querySelector('.update-modal').classList.remove('inset-0')
    this.elementRef.nativeElement.querySelector('.info-modal').classList.remove('inset-0')
  }

  removeEvent(): void {
    this.elementRef.nativeElement.querySelector('.remove-modal').classList.add('inset-0')
    this.elementRef.nativeElement.querySelector('.info-modal').classList.remove('inset-0')
  }

  updateEvent(): void {
    this.elementRef.nativeElement.querySelector('.update-modal').classList.add('inset-0')
  }

  removeEventHandle(): void {
    this._removeEvt.unselect()
    this._clickInfo.event.remove()
    this.removeModal()
  }
}
