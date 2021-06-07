import { Component } from '@angular/core'

@Component({
  selector: 'ui-calendar',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="h-screen flex overflow-hidden bg-white">
        <div class="flex-1 relative z-0 flex overflow-hidden">
          <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last border">
            <!-- Start main area-->
            <div class="absolute inset-0">
              <div class="h-auto">
                <div x-cloak>
                  <div class="container mx-auto">
                    <!-- <div class="font-bold text-gray-800 text-xl mb-4">
                      Schedule Tasks
                    </div> -->

                    <div class="bg-white shadow overflow-hidden">
                      <div class="flex items-center justify-between py-2 px-6">
                        <div class="flex">
                          <span class="text-lg font-bold text-gray-800">{{ MONTH_NAMES[month] }}</span>
                          <span class="ml-1 text-lg text-gray-600 font-normal">{{ year }}</span>
                          <div class="ml-3">
                            <button
                              type="button"
                              class="leading-none rounded-full transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
                              [ngClass]="{ 'cursor-not-allowed opacity-25': month == 0 }"
                              [disabled]="month == 0 ? true : false"
                              (click)="getNoOfDaysFnDecrement()"
                            >
                              <svg
                                class="h-5 w-5 text-gray-500 inline-flex leading-none"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 19l-7-7 7-7"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="leading-none rounded-full transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
                              [ngClass]="{ 'cursor-not-allowed opacity-25': month == 11 }"
                              [disabled]="month == 11 ? true : false"
                              (click)="getNoOfDaysFnIncrement()"
                            >
                              <svg
                                class="h-5 w-5 text-gray-500 inline-flex leading-none"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="p-1">
                          <div class="relative inline-block text-left">
                            <div>
                              <button
                                type="button"
                                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                                (click)="menuCalendar = !menuCalendar"
                              >
                                Options
                                <!-- Heroicon name: solid/chevron-down -->
                                <svg
                                  class="-mr-1 ml-2 h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>

                            <!--
                                    Dropdown menu, show/hide based on menu state.

                                    Entering: "transition ease-out duration-100"
                                      From: "transform opacity-0 scale-95"
                                      To: "transform opacity-100 scale-100"
                                    Leaving: "transition ease-in duration-75"
                                      From: "transform opacity-100 scale-100"
                                      To: "transform opacity-0 scale-95"
                                  -->
                            <div
                              class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              tabindex="-1"
                              *ngIf="menuCalendar"
                            >
                              <div class="py-1" role="none">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <a
                                  href="#"
                                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-indigo-100 hover:text-indigo-500"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-0"
                                  >Month</a
                                >
                                <a
                                  href="#"
                                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-indigo-100 hover:text-indigo-500"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-1"
                                  >Week</a
                                >
                                <a
                                  href="#"
                                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-indigo-100 hover:text-indigo-500"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-2"
                                  >Day</a
                                >
                                <a
                                  href="#"
                                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-indigo-100 hover:text-indigo-500"
                                  role="menuitem"
                                  tabindex="-1"
                                  id="menu-item-2"
                                  >Schedule</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="-mx-1 -mb-1 border">
                        <div class="flex flex-wrap">
                          <ng-container *ngFor="let day of DAYS; let i = index">
                            <div style="width: 14.26%" class="px-2 py-2">
                              <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
                                {{ day }}
                              </div>
                            </div>
                          </ng-container>
                        </div>

                        <div class="flex flex-wrap border-t border-l">
                          <ng-container *ngFor="let blankday of blankdays">
                            <div
                              style="width: 14.28%;"
                              class="text-center border-r h-40 border-b px-4 pt-2 cursor-not-allowed bg-gray-200"
                            ></div>
                          </ng-container>
                          <ng-container *ngFor="let date of no_of_days; let i = index">
                            <div
                              style="width: 14.28%; background:'#F1F5F9';"
                              class="px-4 pt-2 border-r h-40 border-b relative text-center"
                              (click)="showEventModal(date)"
                            >
                              <div
                                class="inline-flex w-6 h-6  items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100"
                                [ngClass]="{
                                  'bg-blue-500 text-white': isToday(date) == true,
                                  'text-gray-700 hover:bg-blue-200': isToday(date) == false
                                }"
                              >
                                {{ date }}
                              </div>
                              <div style="height: 80px;" class="overflow-y-auto mt-1">
                                <!-- <div 
                                    class="absolute top-0 right-0 mt-2 mr-2 inline-flex items-center justify-center rounded-full text-sm w-6 h-6 bg-gray-700 text-white leading-none"
                                    x-show="events.filter(e => e.event_date === new Date(year, month, date).toDateString()).length"
                                    x-text="events.filter(e => e.event_date === new Date(year, month, date).toDateString()).length"></div> -->

                                <ng-container *ngFor="let event of events">
                                  <div
                                    *ngIf="event.onlyDate === date"
                                    class="px-2 py-1 rounded-lg mt-1 overflow-hidden border"
                                    [ngClass]="{
                                      'border-blue-200 text-blue-800 bg-blue-100': event.event_theme === 'blue',
                                      'border-red-200 text-red-800 bg-red-100': event.event_theme === 'red',
                                      'border-yellow-200 text-yellow-800 bg-yellow-100': event.event_theme === 'yellow',
                                      'border-green-200 text-green-800 bg-green-100': event.event_theme === 'green',
                                      'border-purple-200 text-purple-800 bg-purple-100': event.event_theme === 'purple'
                                    }"
                                  >
                                    <p class="text-sm truncate leading-tight">
                                      {{ event.event_title }}
                                    </p>
                                  </div>
                                </ng-container>
                              </div>
                            </div>
                          </ng-container>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal -->
            <div class="fixed z-50 top-0 right-0 left-0 bottom-0 h-full w-full" *ngIf="openEventModal">
              <div class="p-4 max-w-xl mx-auto absolute left-0 right-0 overflow-hidden mt-24">
                <div
                  class="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
                  (click)="openEventModal = !openEventModal"
                >
                  <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
                    />
                  </svg>
                </div>

                <div class="shadow w-full rounded-lg bg-white overflow-hidden block p-8">
                  <h2 class="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">Add Event Details</h2>

                  <div class="mb-4">
                    <label class="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event title</label>
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      type="text"
                      [(ngModel)]="event_title"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event date</label>
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      type="text"
                      [(ngModel)]="event_date"
                      value="{{ event_date }}"
                      readonly
                    />
                  </div>

                  <div class="inline-block w-64 mb-4">
                    <label class="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Select a theme</label>
                    <div class="relative">
                      <select
                        (change)="event_theme = $event.target.value"
                        [(ngModel)]="event_theme"
                        class="block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700"
                      >
                        <ng-container *ngFor="let theme of themes">
                          <option value="{{ theme.value }}">{{ theme.label }}</option>
                        </ng-container>
                      </select>
                      <!-- <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div> -->
                    </div>
                  </div>

                  <div class="mt-8 text-right">
                    <button
                      type="button"
                      class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2"
                      (click)="openEventModal = !openEventModal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm"
                      (click)="addEvent()"
                    >
                      Save Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Modal -->
            <!-- End main area -->
          </main>
          <aside class="relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-52 border">
            <!-- Start secondary column (hidden on smaller screens) -->
            <div class="absolute inset-0">
              <div class="h-screen relative flex flex-col mx-5">
                <h1 class="text-4xl font-bold medium py-5">Calendar</h1>
                <p class="text-lg py-5">Calendars</p>
                <ng-container *ngFor="let item of menuData">
                  <div class="flex items-center py-3" (mouseover)="item.show = true" (mouseout)="item.show = false">
                    <input type="checkbox" />
                    <span class="text-sm text-justify ml-3">{{ item.name }}</span>
                    <span class="absolute right-2" *ngIf="item.show"
                      ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fill-rule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clip-rule="evenodd"
                        /></svg
                    ></span>
                  </div>
                </ng-container>
                <div class="absolute bottom-5 cursor-pointer hover:bg-indigo-50 w-full rounded-full py-3 px-2">
                  <div class="flex items-center text-gray-500 medium">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p class="ml-5">Settings</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End secondary column -->
          </aside>
        </div>
      </div>
    </div>
  `,
})
export class WebUiCalendarComponent {
  menuData = [
    {
      id: 1,
      name: 'Personal',
      icon: 'edit',
      show: false,
    },
    {
      id: 2,
      name: 'Work',
      icon: 'edit',
      show: false,
    },
    {
      id: 3,
      name: 'Appointments',
      icon: 'edit',
      show: false,
    },
  ]

  menuCalendar: boolean = false
  hoverIcon: boolean = false
  MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  month
  year
  no_of_days: any
  blankdays: any
  datepickerValue: any
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  events: any = [
    {
      event_date: new Date(2020, 3, 1),
      event_title: "April Fool's Day",
      event_theme: 'blue',
      onlyDate: '',
    },

    {
      event_date: new Date(2020, 3, 10),
      event_title: 'Birthday',
      event_theme: 'red',
      onlyDate: '',
    },

    {
      event_date: new Date(2020, 3, 16),
      event_title: 'Upcoming Event',
      event_theme: 'green',
      onlyDate: '',
    },
  ]
  event_title: ''
  event_date: ''
  event_theme: 'blue'

  themes = [
    {
      value: 'blue',
      label: 'Blue Theme',
    },
    {
      value: 'red',
      label: 'Red Theme',
    },
    {
      value: 'yellow',
      label: 'Yellow Theme',
    },
    {
      value: 'green',
      label: 'Green Theme',
    },
    {
      value: 'purple',
      label: 'Purple Theme',
    },
  ]

  openEventModal: boolean = false
  date: any
  onlyDate: any

  ngOnInit() {
    this.initDate()
    this.getNoOfDays()
  }

  initDate() {
    let today = new Date()
    this.month = today.getMonth()
    this.year = today.getFullYear()
    this.datepickerValue = new Date(this.year, this.month, today.getDate()).toDateString()
  }

  isToday(date) {
    const today = new Date()
    const d = new Date(this.year, this.month, date)

    return today.toDateString() === d.toDateString() ? true : false
  }

  showEventModal(date) {
    // open the modal
    this.openEventModal = true
    this.event_date = new Date(this.year, this.month, date).toDateString() as any
    this.onlyDate = date
  }

  addEvent() {
    if (this.event_title == '') {
      return
    }

    this.events.push({
      event_date: this.event_date,
      event_title: this.event_title,
      event_theme: this.event_theme,
      onlyDate: this.onlyDate,
    })

    console.log(this.events)

    // clear the form data
    this.event_title = ''
    this.event_date = ''
    this.event_theme = 'blue'

    //close the modal
    this.openEventModal = false
  }

  getNoOfDays() {
    let daysInMonth = new Date(this.year, this.month + 1, 0).getDate()

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.month).getDay()
    let blankdaysArray = []
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i)
    }

    let daysArray = []
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i)
    }

    this.blankdays = blankdaysArray
    this.no_of_days = daysArray
  }

  getNoOfDaysFnDecrement() {
    this.month--
    this.getNoOfDays()
  }
  getNoOfDaysFnIncrement() {
    this.month++
    this.getNoOfDays()
  }
}
