import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-pills',
  template: `
    <div class=" flex  md:flex-row flex-wrap list-none pl-0 mb-4">
      <div *ngFor="let item of pillsItems">
        <button
          (click)="active(item.pillsTitle, pillsItems)"
          class="
    bg-indigo-300
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      px-6
      py-3
      my-2
      md:mr-2
      focus:outline-none focus:ring-0
    "
        >
          {{ item.pillsTitle }}
        </button>
      </div>
      <br />
      <div>
        {{ activePillDetail }}
      </div>
    </div>

    <!-- <div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    Tab 1 content
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    Tab 3 content
  </div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab">
    Tab 4 disabled
  </div>
</div> -->
  `,
})
export class WebUiPillsComponent {
  @Input() pillsItems: Item[]

  activePillDetail: string

  active(title, pillsArray) {
    pillsArray.forEach((element) => {
      if (element.pillsTitle === title) {
        element.pillsActive = true
        this.activePillDetail = element.pillsDetails
      } else element.pillsActive = false
    })
  }
}
interface Item {
  id: number
  pillsActive?: boolean
  pillsTitle: string
  pillsDetails: string
}
