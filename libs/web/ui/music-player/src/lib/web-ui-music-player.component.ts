import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AudioPlyerOptions } from '../audioPlayer'

@Component({
  styleUrls: ['./web-ui-music-player.scss'],
  selector: 'ui-music-player',
  template: `
    <audio controls #audioPlayer [src]="selectedAudio?.url"></audio>

    <div class="w-full bg-gray-100 py-10 dark:bg-gray-800">
      <div class="h-2"></div>
      <div class="flex items-center justify-center">
        <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg w-11/12 lg:w-2/3">
          <div class="block sm:flex">
            <div>
              <img
                class="w-full center md:w-96 md:h-auto h-full sm:flex-shrink-0 rounded object-cover"
                src="{{ selectedAudio?.cover || 'https://tailwindcss.com/img/card-top.jpg' }}"
                alt="Album Pic"
              />
            </div>
            <div class="w-full p-8">
              <div class="flex justify-start">
                <div>
                  <h3 class="text-2xl text-grey-darkest font-medium">
                    <marquee *ngIf="scrollTitle" [ngStyle]="{ color: audioTitleColor }">
                      <p class="">{{ selectedAudio?.title }}</p>
                    </marquee>
                    <p class="dark:text-gray-100" [ngStyle]="{ color: audioTitleColor }" *ngIf="!scrollTitle">
                      {{ selectedAudio?.title }}
                    </p>
                  </h3>
                  <p class="text-sm text-grey mt-1 dark:text-gray-100">Album</p>
                </div>
              </div>
              <div class="flex justify-between items-center mt-8">
                <div>
                  <svg
                    *ngIf="repeat && !isRepeat"
                    (click)="repeatAudio()"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 cursor-pointer fill-current dark:text-gray-100"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                  >
                    <path
                      d="M725.333333 725.333333 298.666667 725.333333 298.666667 597.333333 128 768 298.666667 938.666667 298.666667 810.666667 810.666667 810.666667 810.666667 554.666667 725.333333 554.666667M298.666667 298.666667 725.333333 298.666667 725.333333 426.666667 896 256 725.333333 85.333333 725.333333 213.333333 213.333333 213.333333 213.333333 469.333333 298.666667 469.333333 298.666667 298.666667Z"
                    />
                  </svg>
                  <svg
                    *ngIf="repeat && isRepeat"
                    (click)="repeatAudio()"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 cursor-pointer fill-current dark:text-gray-100"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                  >
                    <path
                      d="M298.666667 298.666667h426.666666v128l170.666667-170.666667-170.666667-170.666667v128H213.333333v256h85.333334v-170.666666z m426.666666 426.666666H298.666667v-128l-170.666667 170.666667 170.666667 170.666667v-128h512V554.666667h-85.333334v170.666666z m-170.666666-85.333333V384h-42.666667l-85.333333 42.666667v42.666666h64v170.666667h64z"
                    />
                  </svg>
                </div>
                <div class="text-grey-darker">
                  <svg
                    (click)="previousAudio()"
                    class="w-8 h-8 cursor-pointer dark:text-gray-100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                  </svg>
                </div>
                <div class="text-white p-8 rounded-full bg-red-400 shadow-lg">
                  <svg
                    *ngIf="isAudioPlaying"
                    (click)="pause()"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    *ngIf="!isAudioPlaying"
                    (click)="play()"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 cursor-pointer dark:text-gray-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="text-grey-darker volume-container">
                  <svg
                    (click)="nextAudio()"
                    class=" h-8 w-8 cursor-pointer dark:text-gray-100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                  </svg>
                </div>
                <div class="text-grey-darker relative py-10">
                  <svg
                    *ngIf="!isMute"
                    (click)="muteAudio()"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 cursor-pointer Volumebar dark:text-gray-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    *ngIf="isMute"
                    (click)="muteAudio()"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 cursor-pointer dark:text-gray-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="volume-control absolute w-20 -top-3 -left-6 transform -rotate-90 hideVol ">
                    <input
                      type="range"
                      max="100"
                      value="{{ audioVolume }}"
                      (click)="$event.stopPropagation()"
                      (input)="volumeChange($event)"
                      [ngStyle]="{ background: volumeSliderColor }"
                      class="slider cursor-pointer"
                      id="volumeRange"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="details">
            <div class="slidecontainer mt-5">
              <input
                type="range"
                max="{{ totalAudioLength }}"
                value="{{ currentAudioTime }}"
                [ngStyle]="{ background: timeSliderColor }"
                (input)="seekAudio($event)"
                class="slider"
                id="myRange"
              />
              <div class="time-line" [ngStyle]="{ color: audioTimeColor }">
                <div>{{ currentAudioTime | timeConversion }}</div>
                <div>{{ totalAudioLength | timeConversion }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMusicPlayerComponent extends AudioPlyerOptions implements OnInit {
  @Input() width?: any
  @Input() height: any
  @Input() backgroundColor: any
  @Input() audioTimeColor: any
  @Input() audioTitleColor: any
  @Input() volumeSliderColor: any
  @Input() timeSliderColor: any
  @Input() audioList = []
  @Input() next = true
  @Input() previous = true
  @Input() shuffle = true
  @Input() repeat = true
  @Input() scrollTitle = false
  @Input() playButtonColor = 'rgb(76, 130, 175)'
  @Input() pauseButtonColor = 'rgb(76, 130, 175)'
  @Input() nextButtonColor = 'rgb(76, 130, 175)'
  @Input() previousButtonColor = 'rgb(76, 130, 175)'
  @Input() repeatButtonColor = 'rgb(76, 130, 175)'
  @Input() activeRepeatButtonColor = 'rgb(76, 130, 175)'
  @Input() volumeButtonColor = 'rgb(76, 130, 175)'
  @Input() muteButtonColor = 'rgb(76, 130, 175)'
  @Output() nextEvent = new EventEmitter()
  @Output() previousEvent = new EventEmitter()
  @Output() repeatEvent = new EventEmitter()
  @Output() shuffleEvent = new EventEmitter()
  @Output() seekEvent = new EventEmitter()

  selectedAudio: any
  currentAudioIndex: number = 0
  repeatActive = false
  isError = false
  isShuffle = false
  volumeBeforeMute: any

  constructor() {
    super()
  }

  ngOnInit() {
    this.options()
    this.initiateAudioPlayer()
    //check audio is ended for next song
    this.isAudioEnded.subscribe((data) => {
      if (!this.isRepeat && this.audioList.length > 0) {
        this.nextAudio()
      }
    })
  }

  nextAudio() {
    if (this.audioList.length - 1 != this.currentAudioIndex) {
      this.currentAudioIndex += 1
      this.selectedAudio = this.audioList[this.currentAudioIndex]
      this.getAudioLength()
      if (this.isAudioPlaying) {
        this.play()
      }
      this.nextEvent.emit()
    } else {
      this.pause()
    }
  }

  previousAudio() {
    if (this.currentAudioIndex != 0) {
      this.currentAudioIndex -= 1
      this.selectedAudio = this.audioList[this.currentAudioIndex]
      this.getAudioLength()
      if (this.isAudioPlaying) {
        this.play()
      }
      this.previousEvent.emit()
    }
  }

  seekAudio(seekAudioValue: any) {
    if (this.audioVolume != 0) {
      this.isMute = false
    }
    this.audioPlayer.nativeElement.currentTime = seekAudioValue.target.value
    this.seekEvent.emit()
  }

  repeatAudio() {
    this.isRepeat = !this.isRepeat
    this.repeatActive = !this.repeatActive
    this.audioPlayer.nativeElement.loop = this.isRepeat
    this.repeatEvent.emit()
  }

  /*   shuffleAudio() {
    this.isShuffle = !this.isShuffle;
    if (this.isShuffle) {
    let randomItem = Math.floor(Math.random() * this.audioList.length);
    console.log(randomItem);
    
    }
    this.shuffleEvent.emit();
  } */

  volumeChange(volume: any) {
    this.audioPlayer.nativeElement.volume = volume.target.value / 100
  }

  muteAudio() {
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5
      this.isMute = false
    } else {
      this.audioPlayer.nativeElement.volume = 0
      this.isMute = true
    }
  }

  initiateAudioPlayer() {
    if (this.audioList.length <= 0) {
      this.isError = true
    } else {
      this.selectedAudio = this.audioList[this.currentAudioIndex]
    }
  }
}
