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
        font-size: 18px !important;
        background-color: white !important;
        padding: 20px !important;
        border-radius: 50% !important;
        opacity: 1 !important;
        line-height: 0.1 !important;
        margin-right: 25px !important;
        color: black !important;
        font-weight: 800 !important;
      }

      .swiper-container > .swiper-button-prev:after {
        content: 'prev' !important;
        width: 30px !important;
        font-size: 18px !important;
        background-color: white !important;
        padding: 20px !important;
        border-radius: 50% !important;
        opacity: 1 !important;
        line-height: 0.1 !important;
        margin-left: 25px !important;
        color: black !important;
        font-weight: 800 !important;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
        opacity: 1;
        background: transparent;
        border: 2px solid white;
      }

      .swiper-pagination-bullet-active {
        color: transparent;
        background: white;
      }
    `,
  ],
  selector: 'ui-carousel-pro',
  template: `<div class="carousel-pro">
    <div>
      <!-- <swiper
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
      </swiper> -->

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

          <!-- <a
          class="cursor-pointer"
          (click)="
            !this.scrollbar.draggable ? (this.scrollbar = { draggable: true }) : (this.scrollbar = { draggable: false })
          "
          >Scrollbar</a
        >
        <a class="cursor-pointer" (click)="navigation = !navigation">Navigation</a>
        <a class="cursor-pointer" (click)="togglePagination()">Pagination</a>

      </div> -->
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
