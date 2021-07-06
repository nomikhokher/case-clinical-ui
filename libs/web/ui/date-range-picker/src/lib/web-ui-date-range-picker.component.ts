import { Component, ElementRef } from '@angular/core'

@Component({
  selector: 'ui-date-range-picker',
  template: `
    <div class="antialiased sans-serif">
      <div>
        <div class="container mx-auto px-4 py-2 md:py-10">
          <label for="datepicker" class="font-bold mt-3 mb-1 text-gray-700 block">Select Date Range</label>
          <div class="relative">
            <div class="flex items-center border rounded-md mt-3 bg-gray-200">
              <input
                type="text"
                (click)="initDate(); showDatepicker = true"
                [(ngModel)]="dateFromandTo"
                class="focus:outline-none border-0 p-2 w-96 rounded-l-md border-r border-gray-300"
              />
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
                          (click)="isDateFrom(date, 1)"
                          class="p-1 cursor-pointer text-center text-sm leading-none hover:bg-blue-200 leading-loose transition ease-in-out duration-100"
                          [ngClass]="{
                            'font-bold': isToday(date) == true,
                            'bg-blue-900 text-gray-50 opacity-90 rounded-l-full': isDateFrom(date, 1) == true,
                            'bg-blue-800 text-white rounded-r-full': isDateTo(date, 1) == true,
                            'bg-blue-200': isInRange(date, 1) == true
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
                          class="p-1 cursor-pointer text-center text-sm leading-none hover:bg-blue-200 leading-loose transition ease-in-out duration-100"
                          [ngClass]="{
                            'bg-blue-800 text-white rounded-l-full': isDateFrom(date, 2) == true,
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
  constructor(public elm: ElementRef) {}
  ngOnInit() {
    this.initDate()
  }

  showDatepicker: boolean
  ets: boolean = false
  dateFromandTo: any
  dateFromYmd: any
  dateToYmd: any
  dateFromValue: any
  dateToValue: any
  currentDate: any
  dateFrom: any
  dateTo: any
  endToShow: number = 0
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

  convertFromYmd(dateYmd) {
    const year = Number(dateYmd.substr(0, 4))
    const month = Number(dateYmd.substr(5, 2)) - 1
    const date = Number(dateYmd.substr(8, 2))

    return new Date(year, month, date)
  }

  convertToYmd(dateObject) {
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const date = dateObject.getDate()

    return year + '-' + ('0' + month).slice(-2) + '-' + ('0' + date).slice(-2)
  }

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

  isToday(date) {
    const today = new Date()
    const d = new Date(this.year, this.month, date)

    return today.toDateString() === d.toDateString()
  }

  isDateFrom(date, getDateFrom) {
    // console.log(1);
    const d = new Date(
      getDateFrom == 1 ? this.year : this.nextYear,
      getDateFrom == 1 ? this.month : this.nextMonth,
      date,
    )
    return d.toDateString() === this.dateFromValue
  }

  isDateTo(date, getDateFrom) {
    const d = new Date(
      getDateFrom == 1 ? this.year : this.nextYear,
      getDateFrom == 1 ? this.month : this.nextMonth,
      date,
    )
    return d.toDateString() === this.dateToValue
  }

  isInRange(date, getDateFrom) {
    const d = new Date(
      getDateFrom == 1 ? this.year : this.nextYear,
      getDateFrom == 1 ? this.month : this.nextMonth,
      date,
    )

    return d > this.dateFrom && d < this.dateTo
  }

  setDateValues() {
    if (this.dateFrom) {
      this.dateFromValue = this.dateFrom.toDateString()
      this.dateFromYmd = this.convertToYmd(this.dateFrom)
      this.dateFromandTo =
        this.dateFromValue + '--to--' + (this.dateToValue != undefined ? this.dateToValue : this.dateFromValue)
    }
    if (this.dateTo) {
      this.dateToValue = this.dateTo.toDateString()
      this.dateToYmd = this.convertToYmd(this.dateTo)
    }
  }

  getDateValue(date, getDateFrom) {
    this.endToShow = this.endToShow + 1
    alert('endtoshow = ' + this.endToShow)
    let selectedDate = new Date(this.year, getDateFrom == 1 ? this.month : this.nextMonth, date)

    if (this.endToShow === 1 && (!this.dateTo || selectedDate <= this.dateTo)) {
      alert('date to' + this.endToShow)
      this.dateFrom = selectedDate
      if (!this.dateTo) {
        this.dateTo = selectedDate
      }
    } else if (this.endToShow > 1 && (!this.dateFrom || selectedDate >= this.dateFrom)) {
      alert('date to')
      this.dateTo = selectedDate
      if (!this.dateFrom) {
        this.dateFrom = selectedDate
      }
    }

    this.setDateValues()
    this.closeDatepicker()
  }

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

  closeDatepicker() {
    this.endToShow = 0
    this.showDatepicker = false
  }
}
