import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component, Input } from '@angular/core'
import { Observable, Subscription, timer } from 'rxjs'

@Component({
  selector: 'ui-weather-updates',
  template: `
    <div
      *ngIf="loader"
      class="py-10 text-gray-500 dark:text-gray-100 w-full flex justify-center items-center space-x-4"
    >
      <div class="flex justify-center items-center">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
      <p>Loading Please wait...</p>
    </div>
    <div
      class="flex flex-col py-10 items-center justify-center bg-gray-50 dark:bg-gray-800"
      *ngIf="weatherData | async as res"
    >
      <div class="w-full max-w-screen-sm bg-{{ cardColor }}-100 dark:bg-gray-700 p-10 rounded-xl  shadow-xl">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span class="text-6xl font-bold dark:text-gray-100"
              >{{ ((res.locations[this.city].values[0].temp - 32) * 5) / 9 | number: '0.0-0' }}°C</span
            >
            <span class="font-semibold mt-1 text-gray-500 dark:text-gray-100">{{
              res.locations[this.city].address
            }}</span>
          </div>
          <svg
            *ngIf="res.locations[this.city].currentConditions.icon === 'clear-day'"
            class="h-24 w-24 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"
            />
          </svg>
          <svg
            *ngIf="res.locations[this.city].currentConditions.icon === 'clear-night'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-24 w-24 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
        <div
          class="flex flex-col space-y-6 w-full max-w-screen-sm bg-{{
            cardColor
          }}-100 dark:bg-gray-700 py-10 mt-10 rounded-xl"
        >
          <div
            class="flex justify-between items-center dark:text-gray-100"
            *ngFor="let item of res.locations[this.city].values.slice(1, 6)"
          >
            <span class="font-semibold text-sm w-1/4">{{ (item.datetimeStr | date: 'fullDate').slice(0, -6) }}</span>
            <div class="flex items-center justify-end w-1/4 pr-10">
              <span class="font-semibold">{{ item.humidity }}%</span>
              <svg
                class="w-6 h-6 fill-current ml-1"
                viewBox="0 0 16 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(1,0,0,1,-4,-2)">
                  <path
                    d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z"
                    style="fill-rule:nonzero;"
                  />
                </g>
              </svg>
            </div>
            <svg
              *ngIf="item.conditions === 'Clear'"
              class="h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"
              />
            </svg>
            <svg
              *ngIf="item.conditions === 'Rain, Overcast'"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              class="h-8 w-8 fill-current text-gray-400 mt-3"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path
                d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z"
              ></path>
            </svg>
            <span class="font-semibold text-lg w-1/4 text-right"
              >{{ ((item.mint - 32) * 5) / 9 | number: '0.1-1' }}° / {{ ((item.maxt - 32) * 5) / 9 | number: '0.1-1' }}°
              {{ loaderoff() }}</span
            >
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiWeatherUpdatesComponent {
  @Input() city?: string
  @Input() cardColor?: string
  loader: boolean = true
  params!: Params
  weatherData!: Subscription
  readonly Url: string = `https://visual-crossing-weather.p.rapidapi.com/forecast`
  public setTimeValue: Subscription

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.params = {
      aggregateHours: '24',
      location: this.city,
      contentType: 'json',
      unitGroup: 'us',
      shortColumnNames: '0',
    }
    const options = { params: this.params, headers: this.setHttpHeaders() }
    this.getWeatherUpdate(options)
  }

  public setHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
      'x-rapidapi-key': '22233aab81msh78d787fc18ce1c6p14d6e8jsna33409f7e12a',
    })
  }

  getWeatherUpdate(opts): void {
    this.weatherData = this.http.get(this.Url, opts) as any
  }

  loaderoff(): void {
    this.setTimeValue = timer(50).subscribe(() => {
      this.loader = false
    })
  }

  ngOnDestroy(): void {
    this.setTimeValue.unsubscribe()
    this.weatherData.unsubscribe()
  }
}

interface Params {
  aggregateHours: string
  location: string
  contentType: string
  unitGroup: string
  shortColumnNames: string
}
