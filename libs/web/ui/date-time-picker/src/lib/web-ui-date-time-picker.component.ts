import { Component, ElementRef } from '@angular/core'

@Component({
  selector: 'ui-date-time-picker',
  template: `
    <div class="antialiased sans-serif">
      <div>
        <div class="container mx-auto px-4 py-2 md:py-10">
          <div class="mb-5 w-64">
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

              <div class="absolute top-0 right-0 px-3 py-2">
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
                style="width: 17rem"
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
                        class="cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100"
                        [ngClass]="{
                          'bg-blue-500 text-white': isToday(date) == true,
                          'text-gray-700 hover:bg-blue-200': isToday(date) == false
                        }"
                      >
                        {{ date }}
                      </div>
                    </div>
                  </ng-container>
                  <ng-container>
                    <div class="flex items-center w-full">
                      <div>
                        <input
                          [(ngModel)]="hours"
                          #hour
                          (input)="changeInputHours(hour.value)"
                          class="w-15 h-10 bg-gray-100 hover:bg-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-gray-100"
                          type="number"
                          aria-label="Hour"
                          step="1"
                          min="1"
                          max="12"
                          maxlength="2"
                        />
                      </div>
                      <span>:</span>
                      <div>
                        <input
                          [(ngModel)]="minutes"
                          #minute
                          (input)="changeInputMinutes(minute.value)"
                          class="w-15 h-10 bg-gray-100 hover:bg-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-gray-100"
                          type="number"
                          aria-label="Minute"
                          step="1"
                          min="0"
                          max="59"
                          maxlength="2"
                        />
                      </div>
                      <button
                        class="w-full ml-1 h-10 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        title="Click to toggle"
                        (click)="toggle()"
                      >
                        {{ AmPmText }}
                      </button>
                    </div>
                  </ng-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiDateTimePickerComponent {
  constructor(public elm: ElementRef) {}
  ngOnInit() {
    this.initDate()
    this.getNoOfDays()
  }

  showDatepicker: boolean
  datepickerValue: any
  setDate: any

  // for time picker variables declaration
  hours: number = 1
  minutes: number = 0
  AmPm: boolean = true
  AmPmText: string = ''

  // for date picker variables declaration
  date: any
  month: any
  year: any
  no_of_days = []
  blankdays = []
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // for date picker functions here

  // initialize the variables
  initDate(): void {
    let today = new Date()
    this.month = today.getMonth()
    this.year = today.getFullYear()
    this.setDate = new Date(this.year, this.month, today.getDate())
    this.setDateTimeValue(this.setDate)
    this.currentTime()
  }

  // get the current day
  isToday(date) {
    const today = new Date()
    const d = new Date(this.year, this.month, date)

    return today.toDateString() === d.toDateString() ? true : false
  }

  // show the selected date and time
  setDateTimeValue(selectedDate): void {
    this.datepickerValue =
      selectedDate.toDateString() +
      ' - ' +
      (this.hours + ' : ' + (this.minutes < 10 ? '0' + this.minutes : this.minutes) + ' ' + this.AmPmText)
  }

  // select date from calander
  getDateValue(date): void {
    this.setDate = new Date(this.year, this.month, date)

    this.setDateTimeValue(this.setDate)

    this.elm.nativeElement.querySelector('#date').value =
      this.setDate.getFullYear() +
      '-' +
      ('0' + this.setDate.getMonth()).slice(-2) +
      '-' +
      ('0' + this.setDate.getDate()).slice(-2)

    this.showDatepicker = false
  }

  // get month days
  getNoOfDays(arrow?: string) {
    // prev month
    if (arrow == 'leftArrow') {
      this.month--
    }
    // next month
    if (arrow == 'rightArrow') {
      this.month++
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

  // for time picker functions here

  // get current time
  currentTime(): void {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    this.hours = hours > 12 ? hours - 12 : hours
    this.minutes = minutes
    this.AmPmText = hours > 12 && minutes > 0 ? 'PM' : 'AM'
    this.setDateTimeValue(this.setDate)
  }

  // get hours
  changeInputHours(hour: number): void {
    this.hours = hour
    this.setDateTimeValue(this.setDate)
  }

  // get minutes
  changeInputMinutes(minute: number): void {
    this.minutes = minute
    this.setDateTimeValue(this.setDate)
  }
  // get AmPmText
  toggle(): void {
    if (this.AmPm) {
      this.AmPmText = 'PM'
    } else {
      this.AmPmText = 'AM'
    }
    this.AmPm = !this.AmPm
  }
}
