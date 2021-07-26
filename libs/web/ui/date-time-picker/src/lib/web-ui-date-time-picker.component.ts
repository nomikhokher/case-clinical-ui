import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'ui-date-time-picker',
  template: `
    <div class="antialiased sans-serif" (clickOutside)="showDatepicker = false">
      <div *ngIf="singleCalendar && doubleCalendar == false">
        <div class="container mx-auto px-4 py-2 md:py-10">
          <div class="w-64">
            <label for="datepicker" class="font-bold mb-1 text-gray-700 block">Select Date</label>
            <div class="relative">
              <input type="hidden" name="date" id="date" />
              <input
                type="text"
                readonly
                [(ngModel)]="datepickerValue"
                (click)="showDatepicker = !showDatepicker"
                class="w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                placeholder="Select date"
              />

              <div class="absolute top-0 right-2 px-3 py-2">
                <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <!-- <div x-text="no_of_days.length"></div>
                          <div x-text="32 - new Date(year, month, 32).getDate()"></div>
                          <div x-text="new Date(year, month).getDay()"></div> -->

              <div
                *ngIf="showDatepicker"
                class="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0 transition ease-in-out duration-500"
                style="width: 16rem"
              >
                <div class="flex justify-between items-center mb-2">
                  <div>
                    <span class="text-lg font-bold text-gray-800">{{ months[month] }}</span>
                    <span class="ml-1 text-lg text-gray-600 font-normal">{{ year }}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="transition ease-in-out duration-500 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                      [ngClass]="{ 'cursor-not-allowed opacity-25': month == 0 }"
                      [disabled]="month == 0 ? true : false"
                      (click)="getNoOfDays('leftArrow')"
                    >
                      <svg
                        class="h-6 w-6 text-gray-500 inline-flex"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                      [ngClass]="{ 'cursor-not-allowed opacity-25': month == 11 }"
                      [disabled]="month == 11 ? true : false"
                      (click)="getNoOfDays('rightArrow')"
                    >
                      <svg
                        class="h-6 w-6 text-gray-500 inline-flex"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="flex flex-wrap mb-3 -mx-1">
                  <ng-container *ngFor="let day of days">
                    <div style="width: 14.26%" class="px-1">
                      <div class="text-gray-800 font-medium text-center text-xs">
                        {{ day }}
                      </div>
                    </div>
                  </ng-container>
                </div>

                <div class="flex flex-wrap -mx-1">
                  <ng-container *ngFor="let blankday of blankdays">
                    <div style="width: 14.28%" class="text-center border p-1 border-transparent text-sm"></div>
                  </ng-container>
                  <ng-container *ngFor="let date of no_of_days">
                    <div style="width: 14.28%" class="px-1 mb-1">
                      <div
                        (click)="getDateValue(date)"
                        class="cursor-pointer text-center text-sm rounded-full leading-loose transition ease-in-out duration-100"
                        [ngClass]="{
                          'bg-indigo-200': isToday(date) == true,
                          'text-gray-600 hover:bg-indigo-200': isToday(date) == false && isSelectedDate(date) == false,
                          'bg-indigo-500 text-white hover:bg-opacity-75': isSelectedDate(date) == true
                        }"
                      >
                        {{ date }}
                      </div>
                    </div>
                  </ng-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--============================ double calendar========================= -->
      <div *ngIf="doubleCalendar && singleCalendar == false">
        <div class="container mx-auto px-4 py-2 md:py-10">
          <label for="datepicker" class="font-bold mb-1 text-gray-700 block">Select Date Range</label>
          <div class="relative z-10">
            <div class="flex items-center">
              <input
                type="text"
                (click)="initDate(); showDatepicker = !showDatepicker"
                [(ngModel)]="dateFromandTo"
                class="w-64 pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                placeholder="Select date"
              />
              <svg
                *ngIf="icon"
                class="h-6 w-6 text-gray-400 m-5 absolute left-48"
                style="top : -12px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                (click)="initDate(); showDatepicker = !showDatepicker"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <!-- first picker -->
            <div
              *ngIf="showDatepicker"
              class="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0 transition ease-in-out duration-500"
              style="width: 37rem"
            >
              <div class="flex">
                <div>
                  <!-- first picker starts here -->
                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <button
                        type="button"
                        class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                        (click)="getNoOfDays('leftArrow')"
                      >
                        <svg
                          class="h-6 w-6 text-gray-500 inline-flex"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    </div>

                    <div>
                      <span class="text-lg font-bold text-gray-800 text-center">{{ months[month] }}</span>
                      <span class="ml-1 text-lg text-gray-600 font-normal">{{ year }}</span>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                        (click)="getNoOfDays('rightArrow')"
                      >
                        <svg
                          class="h-6 w-6 text-gray-500 inline-flex"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-wrap mb-3 -mx-1">
                    <ng-container *ngFor="let day of days">
                      <div style="width: 14.26%" class="px-1">
                        <div class="text-gray-800 font-medium text-center text-xs">
                          {{ day }}
                        </div>
                      </div>
                    </ng-container>
                  </div>

                  <div class="flex flex-wrap -mx-1">
                    <ng-container *ngFor="let blankday of blankdays">
                      <div style="width: 14.28%" class="text-center border p-1 border-transparent text-sm"></div>
                    </ng-container>
                    <ng-container *ngFor="let date of no_of_days">
                      <div style="width: 14.28%" class="px-1 mb-1">
                        <div
                          (click)="getDateValue(date, 1)"
                          (mouseover)="hoverDate(date, 1)"
                          class="p-1 cursor-pointer text-center text-sm hover:bg-blue-200 leading-loose transition ease-in-out duration-100"
                          [ngClass]="{
                            'bg-blue-800 text-gray-50 opacity-90 rounded-l-full': isToday(date) == true,
                            'bg-blue-900 text-white opacity-90 rounded-r-full': isDateTo(date, 1) == true,
                            'bg-blue-200': isInRange(date, 1) == true,
                            'cursor-not-allowed opacity-25': isDisabledPrevDays(date)
                          }"
                        >
                          {{ date }}
                        </div>
                      </div>
                    </ng-container>
                  </div>

                  <ng-container>
                    <div class="flex items-center w-full">
                      <div class="mt-2 w-full" *ngIf="timePicker">
                        <div class="grid" [ngClass]="amPmFormat ? 'grid-cols-3' : 'grid-cols-2'">
                          <select
                            name="hours"
                            class="outline-none focus:ring-0 focus:border-gray-500 h-10 focus:outline-none rounded"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">10</option>
                            <option value="12">12</option>
                          </select>
                          <select
                            name="minutes"
                            class="outline-none mx-1 focus:ring-0 focus:border-gray-500 focus:outline-none h-10 px-1 rounded"
                          >
                            <option value="0">00</option>
                            <option value="30">30</option>
                          </select>
                          <select
                            name="ampm"
                            class="outline-none focus:ring-0 focus:border-gray-500 focus:outline-none rounded h-10"
                            *ngIf="amPmFormat"
                          >
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </ng-container>
                </div>

                <div class="ml-5">
                  <!-- second picker starts here -->
                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <button
                        type="button"
                        class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                        (click)="nextgetNoOfDays('leftArrow')"
                      >
                        <svg
                          class="h-6 w-6 text-gray-500 inline-flex"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <span class="text-lg font-bold text-gray-800 text-center">{{ months[nextMonth] }}</span>
                      <span class="ml-1 text-lg text-gray-600 font-normal">{{ nextYear }}</span>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                        (click)="nextgetNoOfDays('rightArrow')"
                      >
                        <svg
                          class="h-6 w-6 text-gray-500 inline-flex"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-wrap mb-3 -mx-1">
                    <ng-container *ngFor="let day of days">
                      <div style="width: 14.26%" class="px-1">
                        <div class="text-gray-800 font-medium text-center text-xs">
                          {{ day }}
                        </div>
                      </div>
                    </ng-container>
                  </div>

                  <div class="flex flex-wrap -mx-1">
                    <ng-container *ngFor="let blankday of nextblankdays">
                      <div style="width: 14.28%" class="text-center border p-1 border-transparent text-sm"></div>
                    </ng-container>
                    <ng-container *ngFor="let date of next_no_of_days">
                      <div style="width: 14.28%" class="px-1 mb-1">
                        <div
                          (click)="getDateValue(date, 2)"
                          (mouseover)="hoverDate(date, 2)"
                          class="p-1 cursor-pointer text-center text-sm hover:bg-blue-200 leading-loose transition ease-in-out duration-100"
                          [ngClass]="{
                            'bg-blue-800 text-white rounded-r-full': isDateTo(date, 2) == true,
                            'bg-blue-200': isInRange(date, 2) == true
                          }"
                        >
                          {{ date }}
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
    </div>

    <div class="px-4 py-2 bg-gray-100 border-b order-2 mt-5">
      <fieldset>
        <div class="flex flex-wrap -mx-3 align-bottom">
          <div class="mx-3">
            <label class="text-xs font-medium uppercase text-gray-500 leading-none">Week start</label>
            <div class="">
              <select
                class="pl-3 pr-10 py-1 text-sm block text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="0">Sunday</option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
              </select>
            </div>
          </div>
          <div class="mx-3">
            <label class="text-xs font-medium uppercase text-gray-500 leading-none">User format</label>
            <div class="">
              <select
                class="pl-3 pr-10 py-1 text-sm block text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="F j, Y">F j, Y</option>
                <option value="Z">Z</option>
                <option value="Y-m-d">Y-m-d</option>
                <option value="Y-m-d H:i:S">Y-m-d H:i:S</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 align-bottom">
          <label class="flex items-center px-3 py-2 mt-4 "
            ><input
              checked="checked"
              value="true"
              type="checkbox"
              name="inline"
              class="text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize"> Inline </span></label
          >
          <label class="flex items-center px-3 py-2 mt-4 "
            ><input
              (change)="rangeCalendar($event)"
              value="true"
              type="checkbox"
              name="range"
              class="text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize"> Range </span></label
          >
          <label class="flex items-center px-3 py-2 mt-4 "
            ><input
              (change)="showTime($event)"
              value="true"
              type="checkbox"
              name="timepicker"
              class="text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize"> Timepicker </span></label
          >
          <label class="flex items-center px-3 py-2 mt-4 "
            ><input
              (change)="timeFormat($event)"
              checked="checked"
              value="true"
              type="checkbox"
              name="amPm"
              [disabled]="!timePicker"
              class="text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 capitalize"> AM/PM </span></label
          >
        </div>
      </fieldset>
    </div>
  `,
})
export class WebUiDateTimePickerComponent {
  timePicker: boolean = false
  amPmFormat: boolean = false
  doubleCalendar: boolean = false
  singleCalendar: boolean = true

  constructor(public elm: ElementRef) {}

  ngOnInit() {
    this.initDate()
  }

  // variable declaration
  startStopHover: boolean = true
  dateToAndFrom: boolean = false
  endToShow: boolean = false
  showDatepicker: boolean
  dateFromandTo: any
  dateFromValue: any
  dateToValue: any
  currentDate: any
  dateFrom: any
  dateTo: any
  color: string = ''
  month: any
  year: any
  no_of_days = []
  blankdays = []
  dateFormat: string = 'DDMMYYYY'
  icon: boolean = true

  // next month
  nextMonth: any
  nextYear: any
  next_no_of_days = []
  nextblankdays = []

  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // convet the simple date to formated date
  convertToDateFormat(dateObject) {
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const date = dateObject.getDate()
    if (this.dateFormat == 'DDMMYYYY') {
      return ('0' + date).slice(-2) + '-' + ('0' + month).slice(-2) + '-' + year
    } else if (this.dateFormat == 'MMDDYYYY') {
      return ('0' + month).slice(-2) + '-' + ('0' + date).slice(-2) + '-' + year
    } else if (this.dateFormat == 'YYYYMMDD') {
      return year + '-' + ('0' + month).slice(-2) + '-' + ('0' + date).slice(-2)
    } else {
      if (this.dateFrom && this.dateToAndFrom == true) {
        this.dateToAndFrom = false
        return this.dateFrom.toDateString()
      }
      if (this.dateTo) {
        return this.dateTo.toDateString()
      }
    }
  }

  // give initial value to the variables
  initDate() {
    this.currentDate = new Date()
    let currentMonth = this.currentDate.getMonth()
    let currentYear = this.currentDate.getFullYear()
    if (this.month !== currentMonth || this.year !== currentYear) {
      this.month = currentMonth
      this.nextMonth = this.month + 1
      this.year = currentYear
      this.nextYear = currentYear
      this.getNoOfDays()
      this.nextgetNoOfDays()
    }
    this.setDateValues()
  }

  // get current day
  isToday(date) {
    const today = new Date()
    const d = new Date(this.year, this.month, date)
    if (today.toDateString() === d.toDateString()) {
      this.dateFrom = d
      return true
    }
  }

  // set last date
  isDateTo(date, getDateFrom) {
    let d = new Date(getDateFrom == 1 ? this.year : this.nextYear, getDateFrom == 1 ? this.month : this.nextMonth, date)
    if (this.dateFormat) {
      d = this.convertToDateFormat(d)
      return d === this.dateToValue
    }

    return d.toDateString() === this.dateToValue
  }

  // highlited the days in the given range
  isInRange(date, getDateFrom) {
    const d = new Date(
      getDateFrom == 1 ? this.year : this.nextYear,
      getDateFrom == 1 ? this.month : this.nextMonth,
      date,
    )

    return d > this.dateFrom && d < this.dateTo
  }

  // select days on hover
  hoverDate(date, getDateFrom) {
    let hoverdDate = new Date(
      getDateFrom == 1 ? this.year : this.nextYear,
      getDateFrom == 1 ? this.month : this.nextMonth,
      date,
    )

    // if dateFrom has date then give the date to the variable dateFrom or dateTo
    if (hoverdDate > this.dateFrom && this.startStopHover == true) {
      this.dateTo = hoverdDate
    }
    this.isInRange(date, getDateFrom)
    this.initDate()
  }

  // set date in the input field to show the date
  setDateValues() {
    // format the date and give it to dateFromValue
    if (this.dateFrom) {
      this.dateToAndFrom = true
      this.dateFromValue = this.convertToDateFormat(this.dateFrom)
      // bind the value to input
      this.dateFromandTo =
        this.dateFromValue + ' - ' + (this.dateToValue != undefined ? this.dateToValue : this.dateFromValue)
    }
    // format the date and give it to dateToValue
    if (this.dateTo) {
      this.dateToValue = this.convertToDateFormat(this.dateTo)
    }
  }

  // select date in your given range
  getDateValue(date, getDateFrom) {
    let selectedDate = new Date(
      getDateFrom == 1 ? this.year : this.nextYear,
      getDateFrom == 1 ? this.month : this.nextMonth,
      date,
    )

    selectedDate = this.convertToDateFormat(selectedDate)

    if (!this.dateFrom || selectedDate <= this.dateFrom) {
      this.endToShow = true
      this.dateFrom = selectedDate
    } else if (
      this.endToShow == true &&
      (!this.dateTo || selectedDate == this.dateFrom || selectedDate >= this.dateFrom)
    ) {
      this.dateTo = selectedDate
    }

    this.setDateValues()
    this.initDate()

    this.startStopHover = !this.startStopHover
  }

  // set no of days in a month for 1st page
  getNoOfDays(arrow?: string) {
    // prev month
    if (arrow == 'leftArrow') {
      if (this.month == 0) {
        this.year--
        this.month = 11
      } else {
        this.month--
      }
    }
    // next month
    if (arrow == 'rightArrow') {
      if (this.month == 11) {
        this.year++
        this.month = 0
      } else {
        this.month++
      }
    }

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

  // set no of days in a month for 2nd page
  nextgetNoOfDays(arrow?: string) {
    // prev month
    if (arrow == 'leftArrow') {
      if (this.nextMonth == 0) {
        this.nextYear--
        this.nextMonth = 11
      } else {
        this.nextMonth--
      }
    }
    // next nextMonth
    if (arrow == 'rightArrow') {
      if (this.nextMonth == 11) {
        this.nextYear++
        this.nextMonth = 0
      } else {
        this.nextMonth++
      }
    }

    let daysInMonth = new Date(this.nextYear, this.nextMonth + 1, 0).getDate()

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.nextMonth).getDay()

    let blankdaysArray = []
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i)
    }

    let daysArray = []
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i)
    }

    this.nextblankdays = blankdaysArray
    this.next_no_of_days = daysArray
  }

  // disabled days
  isDisabledPrevDays(date) {
    let d = new Date(this.year, this.month, date)

    if (this.dateFrom && d < this.dateFrom) {
      return true
    }
    return false
  }

  // close the date picker
  closeDatepicker() {
    this.showDatepicker = false
  }

  showTime(value) {
    this.timePicker = value.target.checked
    this.timeFormat(value)
  }
  timeFormat(value) {
    this.amPmFormat = value.target.checked
  }
  rangeCalendar(value) {
    if (value.target.checked) {
      this.doubleCalendar = value.target.checked
      this.singleCalendar = !value.target.checked
    } else {
      this.doubleCalendar = false
      this.singleCalendar = true
    }
  }
}
