import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core'

export enum SetDateFormatEnum {
  DDMMYYYY = 'DD-MM-YYYY',
  MMDDYYYY = 'MM-DD-YYYY',
  YYYYMMDD = 'YYYY-MM-DD',
  DdMY = 'D d M, Y',
}

@Component({
  selector: 'ui-date-picker',
  styles: [
    `
      [ng-cloak] {
        display: none;
      }
      .rangeDate {
        background: #1e40af;
        color: #ffffff;
      }
    `,
  ],
  template: `
    <div class="antialiased sans-serif">
      <div *ngIf="!rangePicker">
        <div class="container mx-auto px-4 py-2 md:py-10">
          <div class="mb-5 w-64">
            <div class="relative">
              <div class="relative flex w-full flex-wrap items-stretch mb-3" *ngIf="inputGivenOrNot">
                <span
                  class="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute right-0 bg-transparent rounded text-base items-center justify-center w-8 pr-3 py-3"
                >
                  <svg
                    class="h-6 w-6 text-gray-400 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    (click)="showDatepicker = !showDatepicker"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  readonly
                  [(ngModel)]="datepickerValue"
                  (click)="showDatepicker = !showDatepicker"
                  placeholder="Date Time picker"
                  class="py-3 placeholder-blueGray-300 text-blueGray-600 relativ bg-white rounded text-sm border-0 outline-none shadow focus:outline-none focus:ring-0 w-full pl-2"
                />
              </div>
              <div class="relative flex w-full flex-wrap items-stretch mb-3" *ngIf="!inputGivenOrNot">
                <input type="hidden" name="date" id="date" [(ngModel)]="datepickerValue" />
                <span
                  class="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                >
                  <svg
                    class="h-6 w-6 text-gray-400 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    (click)="showDatepicker = !showDatepicker"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
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
                  <ng-container>
                    <div class="flex items-center w-full">
                      <div class="mt-2 w-full" *ngIf="timePicker">
                        <div class="grid" [ngClass]="amPmFormat ? 'grid-cols-3' : 'grid-cols-2'">
                          <select
                            name="hours"
                            [(ngModel)]="hours"
                            class="outline-none focus:ring-0 focus:border-none h-10 focus:outline-none focus:border-gray-500"
                            (change)="hoursChange()"
                          >
                            <option [ngValue]="hour" *ngFor="let hour of twentyFourHours">{{ hour }}</option>
                          </select>
                          <select
                            name="minutes"
                            (change)="minutesChange()"
                            [(ngModel)]="minutes"
                            class="outline-none mx-1 focus:ring-0 focus:border-none h-10 px-1 focus:outline-none focus:border-gray-500"
                          >
                            <option [ngValue]="minute" *ngFor="let minute of minutesInOneHours">{{ minute }}</option>
                          </select>
                          <select
                            *ngIf="amPmFormat"
                            name="ampm"
                            [(ngModel)]="AmPmText"
                            (change)="amPmChange()"
                            class="outline-none focus:ring-0 h-10 focus:border-none focus:outline-none focus:border-gray-500"
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </ng-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- date range picker -->
      <div *ngIf="rangePicker">
        <div class="antialiased sans-serif">
          <div>
            <div class="container mx-auto px-4 py-2 md:py-10">
              <div>
                <label for="datepicker" class="font-bold mt-3 mb-1 text-gray-700 block">Select Date Range</label>
                <div class="relative">
                  <div class="mt-3 relative inline-block">
                    <input
                      type="text"
                      (click)="dateRangePickerEvent()"
                      [(ngModel)]="dateFromValueRangePicker"
                      [ngClass]="{ 'font-semibold': endToShowRangePicker }"
                      class="p-2 w-56 focus:outline-none rounded border-gray-300 focus:ring-0"
                    />
                    <div class="inline-block p-2 h-full bg-gray-200">to</div>
                    <input
                      type="text"
                      (click)="dateRangePickerEvent()"
                      [(ngModel)]="dateToValueRangePicker"
                      [ngClass]="{ 'font-semibold': endToShowRangePicker }"
                      class="p-2 w-56 focus:outline-none rounded border-gray-300 focus:ring-0"
                    />

                    <div
                      class="bg-white mt-12 rounded-lg p-4 absolute top-0 left-0"
                      style="width: 15rem"
                      [ngClass]="{
                        'rounded-r-none': endToShowRangePicker
                      }"
                      *ngIf="showDateRangePicker"
                    >
                      <div class="flex justify-between items-center mb-2">
                        <div>
                          <span class="text-lg font-bold text-gray-800">{{ MONTH_NAMES[monthRangePicker] }}</span>
                          <span class="ml-1 text-lg text-gray-600 font-normal">{{ yearRangePicker }}</span>
                        </div>
                        <div>
                          <button
                            type="button"
                            class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                            (click)="backCalendarRangePicker()"
                          >
                            <svg
                              class="h-6 w-6 text-gray-500 inline-flex"
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
                        </div>
                      </div>

                      <div class="flex flex-wrap mb-3 -mx-1">
                        <ng-container *ngFor="let day of DAYS">
                          <div style="width: 14.26%" class="px-1">
                            <div class="text-gray-800 font-medium text-center text-xs">{{ day }}</div>
                          </div>
                        </ng-container>
                      </div>

                      <div class="flex flex-wrap -mx-1">
                        <ng-container *ngFor="let blankday of blankdays">
                          <div style="width: 14.28%" class="text-center border p-1 border-transparent text-sm"></div>
                        </ng-container>
                        <ng-container *ngFor="let date of no_of_days">
                          <div style="width: 14.28%">
                            <div
                              (click)="getDateValueRangePickerFrom(date)"
                              date
                              class="p-1 cursor-pointer text-center text-sm hover:bg-blue-200 leading-loose transition ease-in-out duration-100"
                              [ngClass]="{
                                'font-bold': isTodayRangePicker(date) == true,
                                'bg-blue-200': isInRangePickerFrom(date) == true
                              }"
                              [class.rangeDate]="isDateFromRangePicker(date) == true"
                              [class.rounded-l-full]="isDateFromRangePicker(date) == true"
                            >
                              {{ date }}
                            </div>
                          </div>
                        </ng-container>
                      </div>
                    </div>

                    <div
                      class="bg-white mt-12 rounded-lg p-4 absolute top-0 right-0"
                      style="width: 15rem"
                      [ngClass]="{
                        'rounded-l-none': endToShowRangePicker
                      }"
                      *ngIf="showDateRangePicker"
                    >
                      <div class="flex justify-between items-center mb-2">
                        <div>
                          <span class="text-lg font-bold text-gray-800">{{ MONTH_NAMES[monthRangePickerTo] }}</span>
                          <span class="ml-1 text-lg text-gray-600 font-normal">{{ yearRangePicker }}</span>
                        </div>
                        <div>
                          <button
                            type="button"
                            class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                            (click)="nextCalendarRangePicker()"
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
                        <ng-container *ngFor="let day of DAYS">
                          <div style="width: 14.26%" class="px-1">
                            <div class="text-gray-800 font-medium text-center text-xs">{{ day }}</div>
                          </div>
                        </ng-container>
                      </div>

                      <div class="flex flex-wrap -mx-1">
                        <ng-container *ngFor="let blankday of nextblankdays">
                          <div style="width: 14.28%" class="text-center border p-1 border-transparent text-sm"></div>
                        </ng-container>
                        <ng-container *ngFor="let date of next_no_of_days">
                          <div style="width: 14.28%">
                            <div
                              (click)="getDateValueRangePickerTo(date)"
                              date
                              class="p-1 cursor-pointer text-center text-sm hover:bg-blue-200 leading-loose transition ease-in-out duration-100"
                              [ngClass]="{
                                'font-bold': isTodayRangePicker(date) == true,
                                'bg-blue-800 text-white rounded-r-full': isDateToRangePicker(date) == true,
                                'bg-blue-200': isInRangePickerTo(date) == true
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
      </div>

      <!--EXAMPLE VARIANTS  -->
      <div class="px-4 py-2 bg-gray-100 border-b order-2 mt-5">
        <fieldset>
          <div class="my-3">
            <label class="text-xs font-medium uppercase text-gray-500 leading-none">Example variants</label>
          </div>
          <div class="flex flex-wrap -mx-3 align-bottom">
            <div class="mx-3">
              <label class="text-xs font-medium uppercase text-gray-500 leading-none">User format</label>
              <div class="">
                <select
                  class="pl-3 pr-10 py-1 text-sm block text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  [(ngModel)]="dateFormat"
                  (change)="initDate()"
                >
                  <option value="DdMY">DdMY</option>
                  <option value="MMDDYYYY">MMDDYYYY</option>
                  <option value="YYYYMMDD">YYYYMMDD</option>
                  <option value="DDMMYYYY">DDMMYYYY</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 align-bottom">
            <label class="flex items-center px-3 py-2 mt-4 "
              ><input
                (change)="inputGivenOrNot = !inputGivenOrNot"
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
                value="true"
                type="checkbox"
                name="range"
                (change)="dateRangepicker()"
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
    </div>
  `,
})
export class WebUiDatePickerComponent {
  @Input() inputGivenOrNot?: any
  @Input() dateFormat?: any
  @Input() rangePicker?: boolean
  @Input() timePicker?: boolean
  @Output() getValueOfDate = new EventEmitter<any>()

  public datePicker: Date
  public showDatepicker: boolean
  public datepickerValue: any
  public selectedDate: any
  public amPmFormat: boolean

  public date: any
  public month: any
  public year: any
  public no_of_days: string[] = []
  public blankdays: string[] = []
  public days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  public months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  public mONTHShortNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  public setDate: Date

  public hours: any = 1
  public minutes: any = 0
  public AmPm: boolean = true
  public AmPmText: string = ''
  public twentyFourHours: string[] = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ]
  public twelveHours: string[] = []
  public minutesInOneHours: any[] = []
  public dateFormatValue: Date
  monthRangePickerTo: any
  dateToValueRangePickerTo: any

  constructor(public elm: ElementRef) {}

  ngOnInit(): void {
    for (let index = 0; index <= 59; index++) {
      if (index < 10) {
        this.minutesInOneHours.push('0' + index)
      } else {
        this.minutesInOneHours.push(String(index))
      }
    }
    this.twelveHours = this.twentyFourHours
    this.initDate()
    this.getNoOfDays()
  }

  //initialize the variables
  initDate(): void {
    let today
    if (this.selectedDate) {
      today = new Date(Date.parse(this.selectedDate))
    } else {
      today = new Date()
    }
    this.month = today.getMonth()
    this.year = today.getFullYear()
    this.setDate = this.formatDateForDisplay(today)
    this.setDateTimeValue(this.setDate)
    this.currentTime()
  }

  // get the current day
  isToday(date): any {
    const today = new Date()
    const d = new Date(this.year, this.month, date)
    return today.toDateString() === d.toDateString() ? true : false
  }

  isSelectedDate(date): any {
    const d = new Date(this.year, this.month, date)
    return this.datePicker === this.formatDateForDisplay(d) ? true : false
  }

  formatDateForDisplay(date): any {
    let formattedDay = this.days[date.getDay()]
    let formattedDate = ('0' + date.getDate()).slice(-2) // appends 0 (zero) in single digit date
    let formattedMonth = this.months[date.getMonth()]
    let formattedMonthShortName = this.mONTHShortNames[date.getMonth()]
    let formattedMonthInNumber = ('0' + (parseInt(date.getMonth()) + 1)).slice(-2)
    let formattedYear = date.getFullYear()

    if (SetDateFormatEnum[this.dateFormat] === 'DD-MM-YYYY') {
      return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}` // 02-04-2021
    }
    if (SetDateFormatEnum[this.dateFormat] === 'YYYY-MM-DD') {
      return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}` // 2021-04-02
    }
    if (SetDateFormatEnum[this.dateFormat] === 'MM-DD-YYYY') {
      return `${formattedMonthInNumber}-${formattedDate}-${formattedYear}` // 04-02-2021
    }
    if (SetDateFormatEnum[this.dateFormat] === 'D d M, Y') {
      return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}` // Tue 02 Mar 2021
    }
    return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`
  }

  // show the selected date and time
  setDateTimeValue(selectedDate): void {
    this.datePicker = selectedDate
    let amPmFormat = this.amPmFormat ? this.AmPmText : ''
    this.datepickerValue =
      selectedDate +
      ' - ' +
      (this.hours + ' : ' + (this.minutes < 10 ? '0' + this.minutes : this.minutes) + ' ' + amPmFormat)
  }

  // select date from calander
  getDateValue(date): void {
    this.date = date
    this.setDate = new Date(this.year, this.month, date)
    this.datepickerValue = this.formatDateForDisplay(this.setDate)
    this.setDateTimeValue(this.datepickerValue)
    //this.getValueOfDate.emit(this.datepickerValue)
    this.isSelectedDate(date)
    this.showDatepicker = false
  }

  // get month days
  getNoOfDays(arrow?: string): void {
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
    let getHours
    if (this.amPmFormat) {
      getHours = hours > 12 ? hours - 12 : hours
    } else {
      getHours = hours
    }
    this.hours = getHours < 10 ? '0' + getHours : String(getHours)
    if (this.minutes) {
      this.minutes = String(minutes)
    } else {
      this.minutes = minutes < 10 ? '0' + minutes : String(minutes)
    }
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

  hoursChange(): void {
    let date = new Date()
    let newDate = this.formatDateForDisplay(date)
    let amPmFormat = this.amPmFormat ? this.AmPmText : ''
    if (this.setDate === newDate) {
      this.datepickerValue = this.setDate + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + amPmFormat)
    } else {
      this.setDate = new Date(this.year, this.month, this.date)
      const d = this.formatDateForDisplay(this.setDate)
      this.datepickerValue = d + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + amPmFormat)
    }
  }

  amPmChange(): void {
    let date = new Date()
    let newDate = this.formatDateForDisplay(date)
    if (this.setDate === newDate) {
      this.datepickerValue = this.setDate + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + this.AmPmText)
    } else {
      this.setDate = new Date(this.year, this.month, this.date)
      const d = this.formatDateForDisplay(this.setDate)
      this.datepickerValue = d + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + this.AmPmText)
    }
  }

  minutesChange(): void {
    let date = new Date()
    let newDate = this.formatDateForDisplay(date)
    let amPmFormat = this.amPmFormat ? this.AmPmText : ''
    if (this.setDate === newDate) {
      this.datepickerValue = this.setDate + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + amPmFormat)
    } else {
      this.setDate = new Date(this.year, this.month, this.date)
      const d = this.formatDateForDisplay(this.setDate)
      this.datepickerValue = d + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + amPmFormat)
    }
  }

  showTime(value): void {
    this.timePicker = value.target.checked
  }

  timeFormat(changeFormat): void {
    this.amPmFormat = changeFormat.target.checked
    this.currentTime()
    if (changeFormat.target.checked) {
      this.twentyFourHours = this.twentyFourHours.slice(1, 13)
      let date = new Date()
      let newDate = this.formatDateForDisplay(date)
      let amPmFormat = this.amPmFormat ? this.AmPmText : ''
      if (this.setDate === newDate) {
        this.datepickerValue = this.setDate + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + amPmFormat)
      } else {
        this.setDate = new Date(this.year, this.month, this.date)
        const d = this.formatDateForDisplay(this.setDate)
        this.datepickerValue = d + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + amPmFormat)
      }
      this.amPmFormat = true
    }
    if (!changeFormat.target.checked) {
      this.twentyFourHours = this.twelveHours
      let date = new Date()
      let newDate = this.formatDateForDisplay(date)
      let amPmFormat = this.amPmFormat ? this.AmPmText : ''
      if (this.setDate === newDate) {
        this.datepickerValue = this.setDate + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + amPmFormat)
      } else {
        this.setDate = new Date(this.year, this.month, this.date)
        const d = this.formatDateForDisplay(this.setDate)
        this.datepickerValue = d + ' - ' + (this.hours + ' : ' + this.minutes + ' ' + amPmFormat)
      }
      this.amPmFormat = false
    }
  }

  // Date range picker
  dateRangepicker(): void {
    this.rangePicker = !this.rangePicker
    this.initDateRangePickerFrom()
    this.initDateRangePickerTo()
  }

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

  showDateRangePicker = false
  dateFromYmdRangePicker = ''
  dateToYmdRangePicker = ''
  dateFromValueRangePicker = ''
  dateToValueRangePicker = ''
  currentDateRangePicker: any
  dateFromRangePicker: any
  dateToRangePicker: any
  endToShowRangePicker: boolean = false
  monthRangePicker
  yearRangePicker
  no_of_daysRangePicker = []
  blankdaysRangePicker = []
  next_no_of_days = []
  nextblankdays = []

  convertFromYmdRangePicker(dateYmd) {
    const year = Number(dateYmd.substr(0, 4))
    const month = Number(dateYmd.substr(5, 2)) - 1
    const date = Number(dateYmd.substr(8, 2))

    return new Date(year, month, date)
  }

  convertToYmdRangePicker(dateObject) {
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const date = dateObject.getDate()

    return year + '-' + ('0' + month).slice(-2) + '-' + ('0' + date).slice(-2)
  }

  initDateRangePickerFrom() {
    if (!this.dateFromRangePicker) {
      if (this.dateFromYmdRangePicker) {
        this.dateFromRangePicker = this.convertFromYmdRangePicker(this.dateFromYmdRangePicker)
        //} else if ( this.endToShow ) {
        //	this.dateFrom = new Date();
      }
    }

    if (!this.dateFromRangePicker) {
      this.dateFromRangePicker = this.dateToRangePicker
    }

    if (this.endToShowRangePicker && this.dateFromRangePicker) {
      this.currentDateRangePicker = this.dateFromRangePicker
    } else {
      this.currentDateRangePicker = new Date()
    }
    const currentMonth = this.currentDateRangePicker.getMonth()
    const currentYear = this.currentDateRangePicker.getFullYear()
    if (this.monthRangePicker !== currentMonth || this.year !== currentYear) {
      this.monthRangePicker = currentMonth
      this.yearRangePicker = currentYear
      this.getNoOfDaysRangePickerFrom()
    }
    this.setDateValuesRangePickerFrom()
  }

  initDateRangePickerTo() {
    if (!this.dateToRangePicker) {
      if (this.dateToYmdRangePicker) {
        this.dateToRangePicker = this.convertFromYmdRangePicker(this.dateToYmdRangePicker)
        //} else if ( this.endToShow ) {
        //	this.dateTo = new Date();
      }
    }

    if (!this.dateToRangePicker) {
      this.dateToRangePicker = this.dateFromRangePicker
    }

    if (this.endToShowRangePicker && this.dateToRangePicker) {
      this.currentDateRangePicker = this.dateToRangePicker
    } else {
      this.currentDateRangePicker = new Date()
    }

    const currentMonth = this.currentDateRangePicker.getMonth() + 1
    const currentYear = this.currentDateRangePicker.getFullYear()
    if (this.monthRangePickerTo !== currentMonth || this.year !== currentYear) {
      this.monthRangePickerTo = currentMonth
      this.yearRangePicker = currentYear
      this.getNoOfDaysRangePickerTo()
    }
    this.setDateValuesRangePickerTo()
  }

  isTodayRangePicker(date) {
    const today = new Date()
    const d = new Date(this.yearRangePicker, this.monthRangePicker, date)

    return today.toDateString() === d.toDateString() ? true : false
  }

  isDateFromRangePicker(date) {
    const d = new Date(this.yearRangePicker, this.monthRangePicker, date)

    return d.toDateString() === this.dateFromValueRangePicker ? true : false
  }

  isDateToRangePicker(date) {
    const d = new Date(this.yearRangePicker, this.monthRangePickerTo, date)
    return d.toDateString() === this.dateToValueRangePicker ? true : false
  }

  isInRangePickerFrom(date) {
    const d = new Date(this.yearRangePicker, this.monthRangePicker, date)

    return d > this.dateFromRangePicker && d < this.dateToRangePicker ? true : false
  }

  isInRangePickerTo(date) {
    const d = new Date(this.yearRangePicker, this.monthRangePickerTo, date)
    return d > this.dateFromRangePicker && d < this.dateToRangePicker ? true : false
  }

  isDisabledRangePickerFrom(date): boolean {
    const d = new Date(this.yearRangePicker, this.monthRangePicker, date)

    if (this.endToShowRangePicker && this.dateToRangePicker && d > this.dateToRangePicker) {
      return true
    }
    return false
  }

  isDisabledRangePickerTo(date): boolean {
    const d = new Date(this.yearRangePicker, this.monthRangePickerTo, date)

    if (this.endToShowRangePicker && this.dateFromRangePicker && d < this.dateFromRangePicker) {
      return true
    }
    return false
  }

  setDateValuesRangePickerFrom(): void {
    if (this.dateFromRangePicker) {
      this.dateFromValueRangePicker = this.dateFromRangePicker.toDateString()
      this.dateFromYmdRangePicker = this.convertToYmdRangePicker(this.dateFromRangePicker)
      console.log(this.dateFromYmdRangePicker)
    }
  }

  setDateValuesRangePickerTo(): void {
    if (this.dateToRangePicker) {
      this.dateToValueRangePicker = this.dateToRangePicker.toDateString()
      this.dateToYmdRangePicker = this.convertToYmdRangePicker(this.dateToRangePicker)
    }
  }

  getDateValueRangePickerTo(date): void {
    console.log(date)
    let selectedDate = new Date(this.yearRangePicker, this.monthRangePickerTo, date)
    if (this.endToShowRangePicker && (!this.dateFromRangePicker || selectedDate >= this.dateFromRangePicker)) {
      this.dateToRangePicker = selectedDate
      if (!this.dateFromRangePicker) {
        this.dateFromRangePicker = selectedDate
      }
    }
    this.setDateValuesRangePickerTo()
  }

  getDateValueRangePickerFrom(date): void {
    let selectedDate = new Date(this.yearRangePicker, this.monthRangePicker, date)
    if (this.endToShowRangePicker && (!this.dateToRangePicker || selectedDate <= this.dateToRangePicker)) {
      this.dateFromRangePicker = selectedDate
      if (!this.dateToRangePicker) {
        this.dateToRangePicker = selectedDate
      }
    }
    this.setDateValuesRangePickerFrom()
  }

  getNoOfDaysRangePickerFrom(): void {
    let daysInMonth = new Date(this.yearRangePicker, this.monthRangePicker + 1, 0).getDate()

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.yearRangePicker, this.monthRangePicker).getDay()
    let blankdaysArray = []
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i)
    }

    let daysArray = []
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i)
    }

    this.blankdaysRangePicker = blankdaysArray
    this.no_of_daysRangePicker = daysArray
  }

  getNoOfDaysRangePickerTo(): void {
    let daysInMonth = new Date(this.yearRangePicker, this.monthRangePickerTo + 1, 0).getDate()
    // find where to start calendar day of week
    let dayOfWeek = new Date(this.yearRangePicker, this.monthRangePickerTo).getDay()
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

    this.getNoOfDaysRangePickerFrom()
  }

  backCalendarRangePicker(): void {
    if (this.monthRangePicker == 0 || this.monthRangePickerTo == 0) {
      this.yearRangePicker--
      this.monthRangePicker = 11
      this.yearRangePicker--
      this.monthRangePickerTo = 11
    } else {
      this.monthRangePicker--
      this.monthRangePickerTo--
    }

    this.getNoOfDaysRangePickerFrom()
  }

  nextCalendarRangePicker(): void {
    if (this.monthRangePicker == 11 || this.monthRangePickerTo == 11) {
      this.yearRangePicker++
      this.monthRangePicker = 0
      this.monthRangePickerTo = 0
    } else {
      this.monthRangePicker++
      this.monthRangePickerTo++
    }
    this.getNoOfDaysRangePickerTo()
  }

  closeDatepickerRangePicker(): void {
    this.endToShowRangePicker = false
    this.showDateRangePicker = false
  }

  dateRangePickerEvent(): void {
    this.endToShowRangePicker = true
    this.initDateRangePickerTo()
    this.initDateRangePickerFrom()
    this.showDateRangePicker = true
  }
}
