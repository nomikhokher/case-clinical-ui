import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core'
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
  preventDefault,
  FullCalendarComponent,
} from '@fullcalendar/angular'
import { INITIAL_EVENTS, createEventId } from './event-utils'

@Component({
  selector: 'ui-full-calendar',
  styleUrls: ['./ui-full-calendar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="demo-app" *ngIf="isCalendar">
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

    <div
      class="fixed z-10 overflow-y-auto modal"
      id="_modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
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
  `,
})
export class WebUiFullCalendarComponent {
  private _selectInfo: DateSelectArg
  constructor(private elementRef: ElementRef) {}

  dropDownMenu: boolean = false

  view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listYear' = 'dayGridMonth'
  views: any
  viewTitle: string
  title: string
  _calendarApi: any
  _removeEvt: any
  _clickInfo: any

  @ViewChild('fullCalendar', { static: true }) fullCalendar: FullCalendarComponent

  ngOnInit() {
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'))
    }, 1)
  }
  rerender() {
    let calendarApi = this.fullCalendar.getApi()
    calendarApi.render()
  }

  ngAfterViewInit() {
    var dropDown = this.elementRef.nativeElement.querySelector('.fc-header-toolbar')
    dropDown.insertAdjacentHTML(
      'beforeend',
      `
    `,
    )

    let el = this.elementRef.nativeElement.querySelectorAll('.custom-click')
    el.forEach((element) => {
      element.addEventListener('click', this.changeView)
      console.log(element)
    })
  }

  calendarVisible = true
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
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
  currentEvents: EventApi[] = []
  private _fullCalendarApi: any

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this
    calendarOptions.weekends = !calendarOptions.weekends
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    let el = this.elementRef.nativeElement.querySelector('.modal')
    el.classList.add('inset-0')

    this._calendarApi = selectInfo.view.calendar
    this._selectInfo = selectInfo
  }

  handleEventClick(clickInfo: EventClickArg) {
    let el = this.elementRef.nativeElement.querySelector('#_modal')
    el.classList.add('inset-0')

    this._removeEvt = clickInfo.view.calendar
    this._clickInfo = clickInfo

    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //  clickInfo.event.remove()
    //}
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events
  }

  changeView(view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listYear'): void {
    // Store the view
    this.view = view
    console.log(view)

    // If the FullCalendar API is available...
    if (this._fullCalendarApi) {
      // Set the view
      this._fullCalendarApi.changeView(view)

      // Update the view title
      this.viewTitle = this._fullCalendarApi.view.title
    }
  }
  public isCalendar = true
  public isSetting = false
  public onSetting() {
    this.isCalendar = false
    this.isSetting = true
  }
  public onBack() {
    this.isSetting = false
    this.isCalendar = true
  }
  remoModal(): void {
    let el = this.elementRef.nativeElement.querySelector('.modal')
    el.classList.remove('inset-0')
  }
  removeModal() {
    let el = this.elementRef.nativeElement.querySelector('#_modal')
    el.classList.remove('inset-0')
  }

  addEventHandle(): void {
    this._calendarApi.unselect() // clear date selection

    if (this.title) {
      this._calendarApi.addEvent({
        id: createEventId(),
        title: this.title,
        start: this._selectInfo.startStr,
        end: this._selectInfo.endStr,
        allDay: this._selectInfo.allDay,
      })
    }
    let el = this.elementRef.nativeElement.querySelector('.modal')
    el.classList.remove('inset-0')
  }

  removeEventHandle(): void {
    this._removeEvt.unselect()
    this._clickInfo.event.remove()
    this.removeModal()
  }
}
