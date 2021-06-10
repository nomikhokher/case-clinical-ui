import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core'
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular'
import { INITIAL_EVENTS, createEventId } from './event-utils'

@Component({
  selector: 'ui-full-calendar',
  styleUrls: ['./ui-full-calendar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: ` <div class="demo-app">
    <div class="demo-app-sidebar">
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
    </div>

    <div class="demo-app-main">
      <full-calendar *ngIf="calendarVisible" [options]="calendarOptions" #fullCalendar></full-calendar>
    </div>
  </div>`,
})
export class WebUiFullCalendarComponent {
  constructor(private elementRef: ElementRef) {}

  dropDownMenu: boolean = false

  view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listYear' = 'dayGridMonth'
  views: any
  viewTitle: string

  ngAfterViewInit() {
    var dropDown = this.elementRef.nativeElement.querySelector('.fc-header-toolbar')
    dropDown.insertAdjacentHTML(
      'beforeend',
      `
    <div class="relative inline-block text-left">
        <div>
          <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Options
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div *ngIf="dropDownMenu" class="origin-top-right absolute right-0 mt-2 w-56 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                  <div>
                      <button
                      [disabled]="view === 'dayGridMonth'"
                      (click)="changeView('dayGridMonth')"
                      class="text-gray-700 block w-full text-left px-4 py-2 text-sm custom-click" role="menuitem" tabindex="-1" id="menu-item-1"
                      >
                      <span>Month</span>
                    </button>
                    <button
                      [disabled]="view === 'timeGridWeek'"
                      (click)="changeView('timeGridWeek')"
                      class="text-gray-700 block w-full text-left px-4 py-2 text-sm custom-click" role="menuitem" tabindex="-1" id="menu-item-2"
                      >
                      <span>Week</span>
                    </button>
                    <button
                      [disabled]="view === 'timeGridDay'"
                      (click)="changeView('timeGridDay')"
                      class="text-gray-700 block w-full text-left px-4 py-2 text-sm custom-click" role="menuitem" tabindex="-1" id="menu-item-3"
                      >
                      <span>Day</span>
                    </button>
                    <button
                      [disabled]="view === 'listYear'"
                      (click)="changeView('listYear')"
                      class="text-gray-700 block w-full text-left px-4 py-2 text-sm custom-click" role="menuitem" tabindex="-1" id="menu-item-4"
                      >
                      <span>Schedule</span>
                    </button>
                  </div>
            </div>
        </div>
    </div>
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
      right: '',
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
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events
  }

  changeView(view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listYear'): void {
    // Store the view
    this.view = view

    // If the FullCalendar API is available...
    if (this._fullCalendarApi) {
      // Set the view
      this._fullCalendarApi.changeView(view)

      // Update the view title
      this.viewTitle = this._fullCalendarApi.view.title
    }
  }
}
