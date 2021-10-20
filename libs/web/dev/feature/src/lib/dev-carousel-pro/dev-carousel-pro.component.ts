import { Component } from '@angular/core'
import { DevCarouselProStore } from './dev-carousel-pro.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
      >
        <div>
          <h1 class="text-4xl font-bold dark:text-white">Examples</h1>
          <ui-carousel-pro
            [carouselType]="'default'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div>
          <h1 class="text-xl font-bold dark:text-white">Image slider</h1>
          <ui-carousel-pro
            [carouselType]="'delay'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">width = 410 height = 100</h1>
          <ui-carousel-pro
            [carouselType]="'customSize'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">CellWidth = 100</h1>
          <ui-carousel-pro
            [carouselType]="'cellWidth'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">cellsToShow = 5</h1>
          <ui-carousel-pro
            [carouselType]="'cellsToShow'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">cellsToScroll = 3</h1>
          <ui-carousel-pro
            [carouselType]="'cellsToScroll'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">loop</h1>
          <ui-carousel-pro
            [carouselType]="'loop'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">freeScroll</h1>
          <ui-carousel-pro
            [carouselType]="'freeScroll'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">autoplay</h1>
          <ui-carousel-pro
            [carouselType]="'autoplay'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">autoplayInterval = 2000</h1>
          <ui-carousel-pro
            [carouselType]="'autoplayInteval'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">dots = true</h1>
          <ui-carousel-pro
            [carouselType]="'dotsTrue'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">objectFit = contain</h1>
          <ui-carousel-pro
            [carouselType]="'objContain'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">margin = 20</h1>
          <ui-carousel-pro
            [carouselType]="'margin'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mb-10">
          <h1 class="text-xl font-bold dark:text-white">minSwipeDistance = 50</h1>
          <ui-carousel-pro
            [carouselType]="'minSwipeDistance'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>

        <div>
          <h1 class="text-xl font-bold dark:text-white">Methods</h1>
          <ui-carousel-pro
            [carouselType]="'pro'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-xl font-bold dark:text-white">With Counter</h1>
          <ui-carousel-pro
            [carouselType]="'counter'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-xl font-bold dark:text-white">Without Arrows</h1>
          <ui-carousel-pro
            [carouselType]="'withoutArrow'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-xl font-bold dark:text-white">With Bottom Scrollbar</h1>
          <ui-carousel-pro
            [carouselType]="'scrollbar'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold dark:text-white">With Three Slides</h1>
          <ui-carousel-pro
            [carouselType]="'threeSlides'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold dark:text-white">With Five Slides</h1>
          <ui-carousel-pro
            [carouselType]="'fiveSlides'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold dark:text-white">Use Case</h1>
          <ui-carousel-pro
            [carouselType]="'useCase'"
            [images]="vm.config.items.images"
            [imagesForSlider]="vm.config.items.imagesForSlider"
          ></ui-carousel-pro>
        </div>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCarouselProStore],
})
export class DevCarouselProComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCarouselProStore) {}

  ngOnInit(): void {}
}
