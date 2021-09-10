import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  SimpleChanges,
} from '@angular/core'
import * as moment from 'moment'

export enum SetDateFormatEnum {
  DDMMYYYY = 'DD/MM/YYYY',
  MMDDYYYY = 'MM-DD-YYYY',
  YYYYMMDD = 'YYYY-MM-DD',
}

@Component({
  selector: 'ui-date-picker',
  styleUrls: ['./web-ui-date-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="antialiased sans-serif">
      <div>
        <div class="container mx-auto px-4 py-2 md:py-10">
          <input
            autocomplete="off"
            type="text"
            ngxDaterangepickerMd
            [lockStartDate]="false"
            [(ngModel)]="selected"
            placeholder="Choose date"
            (change)="ngModelChange($event)"
            [autoApply]="true"
            [singleDatePicker]="rangePicker == 'true' || rangePicker === true"
            [showDropdowns]="true"
            [timePicker]="timePicker == 'true' || timePicker === true"
            [timePickerSeconds]="true"
            [timePickerIncrement]="15"
            [timePicker24Hour]="timePicker24Hour == 'true' || timePicker24Hour === true"
            [locale]="{ format: setDateFormat, firstDay: 1 }"
            class="py-3 w-64 placeholder-blueGray-300 text-blueGray-600 relativ bg-white rounded text-sm border-0 outline-none shadow focus:outline-none focus:ring-0 pl-2"
          />
        </div>
      </div>
      <!--EXAMPLE VARIANTS  -->
      <div class="px-4 py-2 bg-gray-100  order-2 mt-5 dark:bg-gray-600">
        <fieldset>
          <div class="my-3">
            <label class="text-xs font-medium uppercase text-gray-500 dark:text-gray-100 leading-none"
              >Example variants</label
            >
          </div>
          <div class="flex flex-wrap -mx-3 align-bottom">
            <div class="mx-3">
              <label class="text-xs font-medium uppercase text-gray-500 dark:text-gray-100 leading-none"
                >User format</label
              >
              <div class="">
                <select
                  class="pl-3 pr-10 py-1 text-sm block text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  [(ngModel)]="dateFormat"
                  (change)="changeFormateDate($event)"
                >
                  <option [value]="format" *ngFor="let format of formatValues">
                    {{ format }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 align-bottom">
            <label class="flex items-center px-3 py-2 mt-4 "
              ><input
                [checked]="rangePicker == 'true' || rangePicker === true"
                type="checkbox"
                name="range"
                (change)="dateRangepicker()"
                class="text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <span class="block ml-3 text-sm font-medium leading-5 dark:text-gray-100 text-gray-700 capitalize">
                Range
              </span></label
            >
            <label class="flex items-center px-3 py-2 mt-4 "
              ><input
                (change)="showTime()"
                [checked]="timePicker == 'true' || timePicker === true"
                type="checkbox"
                name="timepicker"
                class="text-blue-500 transition duration-100 ease-in-out  border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 dark:text-gray-100 capitalize">
                Timepicker
              </span></label
            >
            <label class="flex items-center px-3 py-2 mt-4 "
              ><input
                (change)="timeFormat()"
                [checked]="timePicker24Hour == 'true' || timePicker24Hour === true"
                type="checkbox"
                name="amPm"
                class="text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <span class="block ml-3 text-sm font-medium leading-5 text-gray-700 dark:text-gray-100 capitalize">
                AM/PM
              </span></label
            >
          </div>
        </fieldset>
      </div>
    </div>
  `,
})
export class WebUiDatePickerComponent {
  @Input() dateFormat?: any
  @Input() rangePicker?: boolean | string
  @Input() timePicker?: boolean | string
  @Input() timePicker24Hour?: boolean | string
  @Output() getValueOfDate = new EventEmitter<any>()

  public selected: { startDate; endDate }
  public setDateFormat: any
  formatValues: any

  ngOnChanges(changes: SimpleChanges): void {
    this.setDateFormat = SetDateFormatEnum[this.dateFormat]
  }

  ngOnInit(): void {
    this.formatValues = Object.keys(SetDateFormatEnum)
  }

  showTime(): void {
    this.timePicker = !this.timePicker
  }

  timeFormat(): void {
    this.timePicker24Hour = !this.timePicker24Hour
  }

  // Date range picker
  dateRangepicker(): void {
    this.rangePicker = !this.rangePicker
    this.selected = { startDate: null, endDate: null }
  }

  changeFormateDate(event): void {
    this.setDateFormat = SetDateFormatEnum[event.target.value]
  }
  ngModelChange(event): void {
    let range = {
      start: null,
      end: null,
    }
    if (this.rangePicker != true) {
      // Format date
      let start = moment(event?.startDate?.$d).format()
      let end = moment(event?.endDate?.$d).format()

      // Set date
      range = {
        start,
        end,
      }
      this.selected = { startDate: null, endDate: null }
    } else {
      let date = moment(event?.startDate?.$d).format()
      range = {
        start: date,
        end: null,
      }
      this.selected = { startDate: null, endDate: null }
    }
    this.getValueOfDate.emit(range)
  }
}
