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
  styleUrls: ['./web-ui-carousel-pro.scss'],
  selector: 'ui-carousel-pro',
  template: `<div class="carousel-pro">
    <div>
      <ng-container *ngIf="carouselType == 'default'">
        <swiper
          #swiperVirtualRefs
          [loop]="false"
          [slidesPerView]="3"
          [spaceBetween]="10"
          [virtual]="false"
          [centeredSlides]="false"
          [navigation]="true"
          [autoplay]="false"
          [pagination]="false"
          [grabCursor]="true"
          [slidesPerGroup]="1"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
      </ng-container>
      <ng-container *ngIf="carouselType == 'delay'">
        <swiper
          #swiperVirtualRefs
          [loop]="false"
          [slidesPerView]="1"
          [spaceBetween]="50"
          [virtual]="false"
          [centeredSlides]="false"
          [navigation]="true"
          [pagination]="true"
          [autoplay]="{ delay: 2000 }"
          [(index)]="indexNumber"
          [grabCursor]="true"
          [slidesPerGroup]="1"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
      </ng-container>
      <div *ngIf="carouselType == 'cellWidth'" style="width: 620px !important; height : 243px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="6"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-32 object-cover rounded-2xl block " src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>
      <div *ngIf="carouselType == 'customSize'" style="width: 410px !important; height : 100px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="2"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'cellsToShow'" style="width: 620px !important; height : 193px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="5"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'cellsToScroll'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="3"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="3"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'loop'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="true"
            [slidesPerView]="3"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'freeScroll'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="3"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="false"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'autoplay'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="3"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="{ delay: 4000 }"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'autoplayInteval'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="3"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="{ delay: 2000 }"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'dotsTrue'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="1"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="true"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'objContain'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="3"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images.slice(1); index as i">
              <img class="w-full object-contain block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'margin'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="3"
            [spaceBetween]="20"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <div *ngIf="carouselType == 'minSwipeDistance'" style="width: 620px !important; height : 200px">
        <ng-container>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="3"
            [spaceBetween]="10"
            [virtual]="false"
            [centeredSlides]="false"
            [navigation]="true"
            [pagination]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
          >
            <ng-template swiperSlide *ngFor="let carousel of images; index as i">
              <img class="w-full object-cover rounded-2xl block" src="{{ carousel.path }}" />
            </ng-template>
          </swiper>
        </ng-container>
      </div>

      <ng-container *ngIf="carouselType == 'pro'">
        <swiper
          #swiperVirtualRef
          [loop]="loop"
          [slidesPerView]="slidePerView"
          [spaceBetween]="spaceBetween"
          [virtual]="false"
          [centeredSlides]="true"
          [navigation]="true"
          [autoplay]="{ delay: 2000 }"
          [(index)]="indexNumber"
          [grabCursor]="grabCursor"
          [slidesPerGroup]="slidesPerGroup"
          (swiper)="log('swiper')"
          (slideChange)="log('slideChange')"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
        <div class="flex justify-center space-x-7" *ngIf="bulletNumbers">
          <a class="cursor-pointer">previous</a>
          <a class="cursor-pointer" *ngFor="let item of images; let i = index" (click)="indexNumber = i">{{ i }}</a>
          <a class="cursor-pointer">next</a>
          <a class="cursor-pointer" (click)="toggleAuto('start')">Start</a>
          <a class="cursor-pointer" (click)="toggleAuto('stop')">Stop</a>
        </div>
      </ng-container>

      <ng-container *ngIf="carouselType == 'counter'">
        <swiper
          #swiperVirtualRefs
          [loop]="true"
          [slidesPerView]="1"
          [spaceBetween]="50"
          [virtual]="false"
          [centeredSlides]="true"
          [navigation]="true"
          [autoplay]="{ delay: 2000 }"
          [(index)]="indexNumber"
          [pagination]="{ type: 'fraction' }"
          [grabCursor]="true"
          [slidesPerGroup]="1"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
      </ng-container>

      <ng-container *ngIf="carouselType == 'withoutArrow'">
        <swiper
          #swiperVirtualRefs
          [loop]="true"
          [slidesPerView]="3"
          [spaceBetween]="30"
          [virtual]="false"
          [centeredSlides]="true"
          [navigation]="false"
          [autoplay]="{ delay: 2000 }"
          [(index)]="indexNumber"
          [pagination]="true"
          [grabCursor]="true"
          [slidesPerGroup]="1"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-3xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
      </ng-container>
      <ng-container *ngIf="carouselType == 'scrollbar'">
        <swiper
          #swiperVirtualRefs
          [loop]="true"
          [slidesPerView]="1"
          [spaceBetween]="50"
          [virtual]="false"
          [centeredSlides]="true"
          [navigation]="true"
          [autoplay]="{ delay: 2000 }"
          [(index)]="indexNumber"
          [grabCursor]="false"
          [slidesPerGroup]="1"
          [scrollbar]="true"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
      </ng-container>
      <ng-container *ngIf="carouselType == 'threeSlides'">
        <swiper
          #swiperVirtualRefs
          [loop]="true"
          [slidesPerView]="3"
          [spaceBetween]="20"
          [virtual]="false"
          [centeredSlides]="true"
          [navigation]="true"
          [autoplay]="{ delay: 2000 }"
          [(index)]="indexNumber"
          [grabCursor]="false"
          [slidesPerGroup]="1"
          [thumbs]="{ swiper: thumbsSwiper }"
          (swiper)="setControlledSwiper($event)"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
      </ng-container>
      <ng-container *ngIf="carouselType == 'fiveSlides'">
        <swiper
          #swiperVirtualRefs
          [loop]="true"
          [slidesPerView]="5"
          [spaceBetween]="20"
          [virtual]="false"
          [centeredSlides]="true"
          [navigation]="true"
          [autoplay]="{ delay: 2000 }"
          [(index)]="indexNumber"
          [grabCursor]="false"
          [slidesPerGroup]="1"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
      </ng-container>

      <ng-container *ngIf="carouselType == 'useCase'">
        <swiper
          #swiperVirtualRefs
          [loop]="false"
          [slidesPerView]="1"
          [spaceBetween]="20"
          [virtual]="false"
          [centeredSlides]="true"
          [navigation]="true"
          [autoplay]="false"
          [(index)]="indexNumber"
          [grabCursor]="false"
          [slidesPerGroup]="1"
        >
          <ng-template swiperSlide *ngFor="let carousel of images; index as i">
            <img class="w-full object-cover h-96 rounded-xl block" src="{{ carousel.path }}" />
          </ng-template>
        </swiper>
        <div>
          <swiper
            #swiperVirtualRefs
            [loop]="false"
            [slidesPerView]="8"
            [spaceBetween]="0"
            [virtual]="false"
            [centeredSlides]="true"
            [navigation]="false"
            [autoplay]="false"
            [grabCursor]="true"
            [slidesPerGroup]="1"
            [scrollbar]="scrollbar"
          >
            <ng-template class="" swiperSlide *ngFor="let carousel of images; let i = index">
              <img class="object-cover w-20 h-28  rounded-lg" src="{{ carousel.path }}" (click)="changeIndex(i)" />
            </ng-template>
          </swiper>
        </div>
      </ng-container>
    </div>
  </div>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WebUiCarouselProComponent {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent
  @Input() images?: any
  @Input() imagesForSlider?: any
  @Input() bulletNumbers?: boolean = true
  @Input() loop?: boolean = true
  @Input() slidePerView?: number | string = 1
  @Input() spaceBetween?: number | string = 50
  @Input() virtual?: boolean = true
  @Input() centeredSlides?: boolean = true
  @Input() grabCursor?: boolean = true
  @Input() slidesPerGroup?: number = 1
  @Input() carouselType?: string = 'default'
  delay?: any = 2000

  show: boolean
  thumbs: any
  slides$ = new BehaviorSubject<string[]>([''])

  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit() {}

  // getSlides() {
  //   this.slides$.next(Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`))
  // }

  isAuto: any = true

  toggleAuto(val) {
    val == 'start' ? (this.isAuto = { delay: this.delay }) : (this.isAuto = false)
    console.log(this.isAuto)
  }

  extenalBulltes() {
    let arr = []
    // return arr.fill(this.images.length / this.slidePerView)
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  }

  thumbsSwiper: any
  setThumbsSwiper(swiper) {
    this.thumbsSwiper = swiper
  }
  controlledSwiper: any
  setControlledSwiper(swiper) {
    this.controlledSwiper = swiper
  }

  indexNumber = 0
  exampleConfig = { slidesPerView: 3 }
  slidesPerView: number = 4
  pagination: any = false

  changeIndex(i) {
    this.indexNumber = i
  }

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

  scrollbar: any = { draggable: true }

  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true }
    } else {
      this.scrollbar = { draggable: true }
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
  paginationBtn = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    },
  }
}
