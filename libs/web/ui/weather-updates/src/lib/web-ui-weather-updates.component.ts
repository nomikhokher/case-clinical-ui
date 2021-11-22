import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component, Input, SimpleChanges } from '@angular/core'
import { Observable, Subscription, timer } from 'rxjs'

@Component({
  selector: 'ui-weather-updates',
  template: `
    <ng-template #loading>
      <div class="py-10 text-gray-500 dark:text-gray-100 w-full flex justify-center items-center space-x-4">
        <div class="flex justify-center items-center">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
        <p>Loading Please wait...</p>
      </div>
    </ng-template>

    <div
      class="flex flex-col py-10 items-center justify-center bg-gray-50 dark:bg-gray-800"
      *ngIf="weatherData | async as res; else loading"
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
            <svg
              *ngIf="item.conditions === 'Partially cloudy' || item.conditions === 'Rain, Partially cloudy'"
              class="w-8 h-8 mt-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 48 48"
              version="1.1"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="ic_fluent_weather_partly_cloudy_day_48_regular" class="fill-current dark:text-gray-100">
                  <path
                    d="M25.9946681,15.9979653 C32.3317303,15.9979653 35.9266378,20.192546 36.4494667,25.258218 L36.6093992,25.2582128 C40.6875585,25.2582128 43.9935599,28.5556605 43.9935599,32.6232684 C43.9935599,36.6908763 40.6875585,39.9883241 36.6093992,39.9883241 L15.379937,39.9883241 C11.3017776,39.9883241 7.99577625,36.6908763 7.99577625,32.6232684 C7.99577625,28.5556605 11.3017776,25.2582128 15.379982,25.2582128 L15.5398695,25.258218 C16.0657398,20.1592507 19.6576059,15.9979653 25.9946681,15.9979653 Z M25.9946681,18.4931447 C21.7336129,18.4931447 18.0196328,21.9410973 18.0196328,26.7037158 C18.0196328,27.4583441 17.3635001,28.0504937 16.6121978,28.0504691 L15.1916137,28.0504227 C12.5975432,28.0504227 10.4946336,30.164248 10.4946336,32.7717837 C10.4946336,35.3793193 12.5975432,37.4931447 15.1916137,37.4931447 L36.7977225,37.4931447 C39.391793,37.4931447 41.4947026,35.3793193 41.4947026,32.7717837 C41.4947026,30.164248 39.391793,28.0504227 36.7977683,28.0504227 L35.3771384,28.0504691 C34.625836,28.0504937 33.9697034,27.4583441 33.9697034,26.7037158 C33.9697034,21.8800028 30.2557233,18.4931447 25.9946681,18.4931447 Z M8.70422467,24.2917267 C8.9506205,24.8865788 8.70119556,25.5631004 8.1462357,25.8619008 L8.03122631,25.9164884 L5.71974598,26.8782395 C5.08523704,27.1410617 4.35780641,26.8397501 4.0949842,26.2052411 C3.84858838,25.610389 4.09801332,24.9338674 4.65297318,24.635067 L4.76798257,24.5804794 L7.0794629,23.6187283 C7.71397184,23.3559061 8.44140247,23.6572177 8.70422467,24.2917267 Z M21.704105,14.6503748 L21.6431187,14.6699626 C20.7184262,14.9718972 19.8590163,15.3719694 19.0721845,15.8601147 C17.7639888,15.3066324 16.2427216,15.2576631 14.8261683,15.8444187 C12.0198231,17.0068449 10.6871635,20.2241699 11.8495897,23.030515 C11.9630937,23.3045377 12.0961897,23.5645098 12.2465822,23.8094804 C11.4878406,24.0806062 10.7743364,24.4478596 10.1204215,24.896434 C9.94374308,24.5936272 9.78573195,24.2752892 9.64788279,23.9424919 C7.98178564,19.9201776 9.89187707,15.3088089 13.9141914,13.6427118 C16.5986709,12.530764 19.545526,13.0117164 21.704105,14.6503748 Z M5.57601758,14.8302505 L5.70300306,14.8760225 L8.02181542,15.8648663 C8.65161103,16.1309846 8.95369294,16.8602748 8.69653424,17.4937816 C8.45651945,18.0850546 7.81417343,18.3839134 7.21754687,18.2047693 L7.09056139,18.1589973 L4.77174903,17.1701536 C4.14195341,16.9040353 3.83987151,16.1747451 4.09703021,15.5412383 C4.337045,14.9499652 4.97939102,14.6511064 5.57601758,14.8302505 Z M12.9443806,8.65660546 L12.9992519,8.77221241 L13.9597026,11.0781337 C14.2238904,11.7159395 13.9210132,12.4471497 13.2832075,12.7113374 C12.6852647,12.9590135 12.005228,12.7082926 11.7048751,12.1504493 L11.6500038,12.0348423 L10.6895531,9.72892099 C10.4253653,9.09111527 10.7282425,8.35990507 11.3660482,8.09571729 C11.9639911,7.84804124 12.6440277,8.09876214 12.9443806,8.65660546 Z M21.9927179,8.0965106 C22.5944431,8.34575332 22.901252,9.00622556 22.7223674,9.61735025 L22.6765314,9.74738237 L21.685189,12.023073 C21.4181432,12.6677785 20.6790228,12.9739322 20.0343172,12.7068865 C19.4325921,12.4576437 19.1257831,11.7971715 19.3046677,11.1860468 L19.3505037,11.0560147 L20.3418462,8.78032408 C20.6088919,8.13561855 21.3480124,7.82946483 21.9927179,8.0965106 Z"
                    id="🎨-Color"
                  />
                </g>
              </g>
            </svg>
            <span class="font-semibold text-lg w-1/4 text-right"
              >{{ ((item.mint - 32) * 5) / 9 | number: '0.1-1' }}° /
              {{ ((item.maxt - 32) * 5) / 9 | number: '0.1-1' }}°</span
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
  params!: Params
  weatherData!: Subscription
  readonly Url: string = `https://visual-crossing-weather.p.rapidapi.com/forecast`

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

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
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
}

interface Params {
  aggregateHours: string
  location: string
  contentType: string
  unitGroup: string
  shortColumnNames: string
}
