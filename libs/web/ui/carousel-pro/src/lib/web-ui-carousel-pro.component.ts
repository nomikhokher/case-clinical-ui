import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { SwiperComponent } from 'swiper/angular'

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper'
import { BehaviorSubject } from 'rxjs'
import Swiper from 'swiper/types/swiper-class'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller])

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .bg-yellow {
        background-color: yellow;
      }
      .transition {
        transition: background 0.25s ease, color 0.25s ease;
      }
      .active-slide {
        background-color: green;
        color: #fff;
      }
      .bg-blue {
        background-color: blue;
        color: #fff;
      }
      .swiper-container {
        width: 100%;
        height: 100%;
        margin: 50px auto;
      }

      .swiper-slide {
        background: #f1f1f1;
        color: #000;
        text-align: center;
        line-height: 300px;
      }
      .swiper-container > .swiper-button-next:after {
        content: 'next' !important;
        width: 30px !important;
        font-size: 20px !important;
        background-color: white !important;
        padding: 21px !important;
        border-radius: 50% !important;
        opacity: 1 !important;
        line-height: 0.1 !important;
        margin-right: 26px !important;
        color: black !important;
        font-weight: 800 !important;
      }

      .swiper-container > .swiper-button-prev:after {
        content: 'prev' !important;
        width: 30px !important;
        font-size: 20px !important;
        background-color: white !important;
        padding: 21px !important;
        border-radius: 50% !important;
        opacity: 1 !important;
        line-height: 0.1 !important;
        margin-left: 26px !important;
        color: black !important;
        font-weight: 800 !important;
      }
    `,
  ],
  selector: 'ui-carousel-pro',
  template: `<div class="carousel-pro">
    <div>
      <h4 class="font-bold text-2xl">Image slider</h4>
      <swiper
        [loop]="false"
        [autoHeight]="true"
        [allowTouchMove]="false"
        [autoplay]="{ delay: 1000, disableOnInteraction: false }"
        [pagination]="{ clickable: true }"
        [navigation]="true"
      >
        <ng-container *ngFor="let carousel of images">
          <ng-template data-swiper-autoplay="6000" swiperSlide>
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </ng-container>
      </swiper>
    </div>
    <!-- <div>
      <h4>Slide change</h4>
      <swiper direction="horizontal" (slideChange)="onSlideChange($event)">
        <ng-template *ngFor="let item of slidesEx" swiperSlide> {{ item }} </ng-template>
      </swiper>
      {{ slidesEx | json }}
      <h4>Nested</h4>
      <swiper direction="horizontal">
        <ng-container *ngFor="let item of [].constructor(4); let i = index">
          <ng-template swiperSlide> test {{ i + 1 }} </ng-template>
        </ng-container>
        <ng-template swiperSlide> test 5 </ng-template>
        <ng-template swiperSlide>
          <swiper direction="vertical">
            <ng-template swiperSlide> test vertical 1 </ng-template>
            <ng-template swiperSlide> test vertical 2 </ng-template>
          </swiper>
        </ng-template>
      </swiper>
    </div>
    <div>
      <swiper
        #swiperVirtualRef
        [slidesPerView]="3"
        [spaceBetween]="50"
        [pagination]="{ type: 'fraction' }"
        [virtual]="true"
        slideActiveClass="swiper-active whyWouldIuseCustomClass"
        [centeredSlides]="true"
        [navigation]="true"
        class="mySwiper"
        id="mySwiperID"
      >
        <ng-template swiperSlide *ngFor="let slide of virtualSlides; index as i">Slide {{ slide }}</ng-template>
        <ng-template swiperSlide>Slide</ng-template>
        <ng-template swiperSlide>Slide</ng-template>
      </swiper>

      <swiper
        #swiperVirtualRef
        [slidesPerView]="3"
        [spaceBetween]="50"
        [pagination]="{ type: 'fraction' }"
        [virtual]="true"
        [centeredSlides]="true"
        [navigation]="true"
      >
        <ng-template swiperSlide *ngFor="let slide of slides$ | async; index as i">Slide {{ slide }}</ng-template>
      </swiper>
      <button (click)="getSlides()">Get slides</button>

      <swiper [zoom]="true" [autoplay]="true">
        <ng-template swiperSlide class="custom-class" [zoom]="true">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </ng-template>
        <ng-template swiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </ng-template>
        <ng-template swiperSlide [zoom]="true">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </ng-template>
      </swiper>

      <h3>Custom pagination</h3>
      <swiper
        #swiperRef
        [navigation]="navigation"
        (swiper)="log('swiper')"
        (slideChange)="log('slideChange')"
        [slidesPerView]="3"
        [spaceBetween]="50"
        [breakpoints]="breakpoints"
        [scrollbar]="scrollbar"
        [loop]="true"
        [(index)]="indexNumber"
        [pagination]="{ el: '.swiper-pagination.pagination-test' }"
      >
        <ng-container *ngIf="show">
          <ng-template swiperSlide>Best slide ever 1 {{ show }}</ng-template>
          <ng-template swiperSlide>Best slide ever 2</ng-template>
        </ng-container>
        <ng-template swiperSlide>
          <div *ngIf="true">Best slide ever 3</div>
        </ng-template>
        <ng-template swiperSlide let-data *ngFor="let slide of slides; index as i">
          {{ slide }} / active: {{ data.isActive }} / next: {{ data.isNext }}</ng-template
        >
        <div slot="container-end" class="swiper-pagination pagination-test"></div>
      </swiper>
      <button (click)="slides.push('test')">Add slide</button>
      <button (click)="toggleNavigation()">Toggle navigation</button>
      <button (click)="toggleScrollbar()">Toggle scrollbar</button>
      <button (click)="breakpointChange()">Breakpoint change</button>
      <button (click)="show = !show">Toggle show</button>
      <button (click)="indexNumber = 0">0</button>
      <button (click)="indexNumber = 3">3</button>
      <button (click)="indexNumber = 5">5</button>
      <button (click)="indexNumber = 6">6</button>
      {{ indexNumber }}

      <swiper [config]="exampleConfig">
        <ng-template swiperSlide>Best slide ever 2</ng-template>
        <ng-template swiperSlide>Best slide ever 2</ng-template>
        <ng-template swiperSlide>Best slide ever 2</ng-template>
        <ng-template swiperSlide>Best slide ever 2</ng-template>
        <ng-template swiperSlide>Best slide ever 2</ng-template>
      </swiper>
      <button (click)="exampleConfig = { slidesPerView: 2 }">changeConfig</button>

      {{ exampleConfig | json }}
    </div>
    <div>
      <swiper
        #swiper
        [slidesPerView]="1"
        [centeredSlides]="true"
        [navigation]="{ prevEl: prevEl, nextEl: nextEl }"
        [pagination]="pagination"
      >
        <ng-template swiperSlide *ngFor="let slide of slides2; index as i"> {{ i }} - {{ slide }} </ng-template>
      </swiper>
      <button type="button" #nextEl class="swiper-navigation-prev">&lt;</button>
      <button type="button" #prevEl class="swiper-navigation-next">&gt;</button>
      <hr />
      <button (click)="replaceSlides()">replace slides</button>
      <button (click)="togglePagination()">Toggle pagination</button>
    </div>
    <div>
      <swiper
        [slidesPerView]="1"
        [spaceBetween]="50"
        [navigation]="true"
        [pagination]="{ clickable: true }"
        [thumbs]="{ swiper: thumbsSwiper }"
      >
        <ng-template swiperSlide>Slide 1</ng-template>
        <ng-template swiperSlide>Slide 2</ng-template>
        <ng-template swiperSlide>Slide 3</ng-template>
        <ng-template swiperSlide>Slide 4</ng-template>
        <ng-template swiperSlide>Slide 5</ng-template>
        <ng-template swiperSlide>Slide 6</ng-template>
      </swiper>
      <swiper
        [slidesPerView]="3"
        [spaceBetween]="50"
        (swiper)="setThumbsSwiper($event)"
        [navigation]="{}"
        [pagination]="{ clickable: true }"
        [scrollbar]="{ draggable: true }"
        [watchSlidesProgress]="true"
      >
        <ng-template swiperSlide>Slide 1</ng-template>
        <ng-template swiperSlide>Slide 2</ng-template>
        <ng-template swiperSlide>Slide 3</ng-template>
        <ng-template swiperSlide>Slide 4</ng-template>
        <ng-template swiperSlide>Slide 5</ng-template>
        <ng-template swiperSlide>Slide 6</ng-template>
      </swiper>
    </div>
    <div>
      <swiper
        [slidesPerView]="1"
        [spaceBetween]="50"
        [navigation]="true"
        [pagination]="{ clickable: true }"
        [controller]="{ control: controlledSwiper }"
      >
        <ng-template swiperSlide>Slide 1</ng-template>
        <ng-template swiperSlide>Slide 2</ng-template>
        <ng-template swiperSlide>Slide 3</ng-template>
        <ng-template swiperSlide>Slide 4</ng-template>
        <ng-template swiperSlide>Slide 5</ng-template>
        <ng-template swiperSlide>Slide 6</ng-template>
      </swiper>
      <swiper
        [slidesPerView]="3"
        [spaceBetween]="50"
        (swiper)="setControlledSwiper($event)"
        [navigation]="{}"
        [pagination]="{ clickable: true }"
        [scrollbar]="{ draggable: true }"
        [watchSlidesProgress]="true"
      >
        <ng-template swiperSlide>Slide 1</ng-template>
        <ng-template swiperSlide>Slide 2</ng-template>
        <ng-template swiperSlide>Slide 3</ng-template>
        <ng-template swiperSlide>Slide 4</ng-template>
        <ng-template swiperSlide>Slide 5</ng-template>
        <ng-template swiperSlide>Slide 6</ng-template>
      </swiper> -->
    <!-- </div> -->
  </div>`,
})
export class WebUiCarouselProComponent {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent

  @Input() images?: any
  @Input() imagesForSlider?: any

  show: boolean
  thumbs: any
  slides$ = new BehaviorSubject<string[]>([''])
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}
  ngOnInit() {}

  getSlides() {
    this.slides$.next(Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`))
  }

  thumbsSwiper: any
  setThumbsSwiper(swiper) {
    this.thumbsSwiper = swiper
  }
  controlledSwiper: any
  setControlledSwiper(swiper) {
    this.controlledSwiper = swiper
  }

  indexNumber = 1
  exampleConfig = { slidesPerView: 3 }
  slidesPerView: number = 4
  pagination: any = false

  slides2 = ['slide 1', 'slide 2', 'slide 3']
  replaceSlides() {
    this.slides2 = ['foo', 'bar']
  }

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: 'fraction' }
    } else {
      this.pagination = false
    }
  }

  navigation = false
  toggleNavigation() {
    this.navigation = !this.navigation
  }

  scrollbar: any = false
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true }
    } else {
      this.scrollbar = false
    }
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  }

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`)
  virtualSlides = Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)

  log(log: string) {
    // console.log(string);
  }

  breakPointsToggle: boolean
  breakpointChange() {
    this.breakPointsToggle = !this.breakPointsToggle
    this.breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
    }
  }

  slidesEx = ['first', 'second']

  onSlideChange(swiper: any) {
    if (swiper.isEnd) {
      // all swiper events are run outside of ngzone, so use ngzone.run or detectChanges to update the view.
      this.ngZone.run(() => {
        this.slidesEx = [...this.slidesEx, `added ${this.slidesEx.length - 1}`]
      })
      console.log(this.slidesEx)
    }
  }
}
