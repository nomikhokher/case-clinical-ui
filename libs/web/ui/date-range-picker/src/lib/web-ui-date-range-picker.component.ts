import { Component, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'ui-date-range-picker',
  template: `
    <div class="antialiased sans-serif" (clickOutside)="showDatepicker = false">
      <div>
        <div class="container mx-auto px-4 py-2 md:py-10">
          <label for="datepicker" class="font-bold mt-3 mb-1 text-gray-700 block">Select Date Range</label>
          <div class="relative">
            <div class="flex items-center border rounded-md mt-3 bg-gray-200">
              <input
                *ngIf="!icon"
                type="text"
                (click)="initDate(); showDatepicker = true"
                [(ngModel)]="dateFromandTo"
                class="focus:outline-none border-0 p-2 w-96 rounded-l-md border-r border-gray-300"
              />
              <svg
                *ngIf="icon"
                class="h-6 w-6 text-gray-600 m-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                (click)="initDate(); showDatepicker = true"
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
                          class="p-1 cursor-pointer text-center text-sm leading-none hover:bg-blue-200 leading-loose transition ease-in-out duration-100"
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
                          class="p-1 cursor-pointer text-center text-sm leading-none hover:bg-blue-200 leading-loose transition ease-in-out duration-100"
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
  `,
})
export class WebUiDateRangePickerComponent {
  // get the date format parameter from the user
  @Input() dateFormat: string
  @Input() icon: boolean

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
}
