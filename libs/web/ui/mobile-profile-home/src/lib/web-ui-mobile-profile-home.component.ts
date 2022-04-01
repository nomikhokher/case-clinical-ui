import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-profile-home',
  template: `
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .scroll-section {
        height: 250px;
        overflow-y: scroll;
        scrollbar-color: white white;
        scrollbar-width: none;
      }
      /* Track */
      .scroll-section::-webkit-scrollbar-track {
        background: #fff;
      }

      /* Handle */
      .scroll-section::-webkit-scrollbar-thumb {
        background: #fff;
      }

      /* Handle on hover */
      .scroll-section::-webkit-scrollbar-thumb:hover {
        background: #fff;
      }
    </style>
    <div class="mb-3 md:mb-6 rounded-lg shadow dark:bg-gray-800">
      <div>
        <code
          ><div class="bg-white pt-8 dark:bg-gray-800">
            <div class="border-b dark:border-gray-300 flex px-3 gap-2">
              <div><i class="fa fa-angle-left fa-solid fa-2x py-1"></i></div>
              <div>
                <h2 class="text-2xl font-medium title-font text-gray-900 mb-1 dark:text-white">Profile</h2>
              </div>
              <div></div>
            </div>
            <div class="flex px-2 items-center justify-between gap-1 mt-4">
              <div>
                <img
                  class="rounded-full w-18 float-left mr-4"
                  src="/assets/mobile-ui/assets/images/user-pic.png"
                  alt=""
                />
                <div class="float-right">
                  <h3 class="text-xl font-bold pt-1 dark:text-white">Kevin</h3>
                  <p class="text-sm g-color dark:text-gray-300">114 followers</p>
                </div>
              </div>
              <div>
                <button class="w-32 bg-indigo-600 rounded-full text-white py-2 px-5 c-btn text-xs">Edit profile</button>
              </div>
            </div>

            <div class="px-5 mt-5">
              <p class="font-bold text-base mb-2 dark:text-white">BIO</p>
              <p class="text-gray-400 text-sm dark:text-gray-300">
                My work oscillates between several media through which I question the existence of the image and its
                production.
              </p>
            </div>

            <div
              class="grid-cols-2 grid divide-x align-middle items-center px-5 rounded-lg py-3 mt-4 mx-5 text-center bg-gray-100 g-color dark:bg-gray-700"
            >
              <div class="py-3 dark:text-white">
                <h5 class="text-2xl font-bold">124</h5>
                <p class="text-sm font-normal ">Folowers</p>
              </div>

              <div class="py-3 dark:text-white">
                <h5 class="text-2xl font-bold">124</h5>
                <p class="text-sm font-normal">Folowers</p>
              </div>
            </div>

            <nav class="flex space-x-4 ml-3 mt-9 dark:bg-gray-800">
              <a
                (click)="this.changeartWorkAction()"
                class="font-semibold border-b-2 border-black dark:border-gray-300 text-lg pb-4 px-3 py-2 leading-3 dark:text-white"
                >Artworks</a
              >
              <a
                (click)="this.changeCollectionAction()"
                class="font-medium gray-c px-2 py-2 text-lg rounded-lg leading-3 pb-0 dark:text-white"
                >Collection</a
              >
            </nav>
            <hr class="" />

            <div class="scroll-section">
              <section *ngIf="this.artWorkAction == true" class=" body-fon mt-4 dark:bg-gray-800">
                <div class="container shadow-lg shadow-blue-500/20 rounded-lg bg-white">
                  <div class="flex flex-wrap text-center dark:bg-gray-800">
                    <div class="mb-2 px-2 dark:bg-gray-800">
                      <div class="rounded-lg h-64 overflow-hidden">
                        <img
                          alt="content"
                          class="object-cover object-center h-full w-full"
                          src="/assets/mobile-ui/assets/images/img1.png"
                        />
                      </div>
                      <h2 class="title-font text-base font-medium text-gray-900 mt-2 dark:text-white">
                        The Cubes of Destiny
                      </h2>
                      <p class="leading-relaxed text-base dark:text-gray-300">ERC-1155</p>
                    </div>

                    <div class="mb-2 px-2 dark:bg-gray-800">
                      <div class="rounded-lg h-64 overflow-hidden">
                        <img
                          alt="content"
                          class="object-cover object-center h-full w-full"
                          src="/assets/mobile-ui/assets/images/img1.png"
                        />
                      </div>
                      <h2 class="title-font text-base font-medium text-gray-900 mt-2 dark:text-white">
                        The Cubes of Destiny
                      </h2>
                      <p class="leading-relaxed text-base dark:text-gray-300">ERC-1155</p>
                    </div>
                  </div>
                </div>
              </section>
              <div *ngIf="this.collectionAction == true">
                <div class="">
                  <div class="px-5">
                    <img
                      src="/assets/mobile-ui/assets/images/congratsImage.png"
                      alt=""
                      class=" w-full object-cover rounded-lg  "
                    />
                  </div>
                  <div class="shadow-blue-100 shadow-xl  rounded-br-xl rounded-bl-xl">
                    <div class="shadow-blue-100 shadow-xl px-8 py-4 ">
                      <div class="flex justify-between items-center">
                        <div class="bg-gray-100 py-1.5 px-4 rounded-3xl text-gray-900 font-medium">
                          <h2>⏳ 1h 28m 11s</h2>
                        </div>
                        <div class="flex items-center gap-4 dark:text-white">
                          <a href=""
                            ><img
                              src="/assets/mobile-ui/assets/images/BlackHeart.png"
                              alt=""
                              id=""
                              class="w-full h-full"
                          /></a>
                          <a href="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <h2 class="text-3xl font-bold dark:text-white pt-4">Minimalistic</h2>
                    </div>
                    <div class="px-8 pt-4 pb-6 flex justify-between items-center">
                      <div class="flex w-full gap-2 items-center">
                        <div class="">
                          <img
                            src="/assets/mobile-ui/assets/images/Avatar.png"
                            alt=""
                            class="w-10 h-10 object-cover rounded-full"
                          />
                        </div>
                        <div class="dark:text-white">
                          <small class="text-xs text-gray-400">Creator</small>
                          <p class="text-base font-bold">Kevin</p>
                        </div>
                      </div>
                      <div class="flex w-full gap-2 items-center justify-end">
                        <div class="py-2 px-3 bg-gray-100 rounded-full">
                          <img
                            src="/assets/mobile-ui/assets/images/ethereumCurr.png"
                            alt=""
                            class="w-full h-7 rounded-full"
                          />
                        </div>
                        <div class="dark:text-white">
                          <small class="text-xs text-gray-400">Reserve price</small>
                          <p class="text-base font-bold">0.32 ETH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section>
              <div
                class="w-full flex justify-between items-center pt-3 px-4 border-t mt-0 pb-2 dark:bg-gray-900 dark:border-solid dark:border-2 dark:border-gray-500"
              >
                <div class="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div class="flex-shrink-0">
                  <!-- <a href=""><img src="/assets/mobile-ui/assets/images/search.png" alt="" id="" class="w-full h-8  " /></a> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div class="flex-shrink-0">
                  <a href=""
                    ><img src="/assets/mobile-ui/assets/images/compass.png" alt="" id="" class="w-full h-8"
                  /></a>
                </div>
                <div class="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 dark:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <div class="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 dark:text-white"
                    fill="none"
                    (click)="this.toggle_pop()"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <div
                    *ngIf="this.menu == true"
                    class="absolute z-10 inset-0 overflow-hidden"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div class=" min-h-screen px-4 text-center">
                      <div class="absolute inset-0 bg-black bg-opacity-60 transition-opacity" aria-hidden="true"></div>
                      <span class="sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                      <div class="relative inline-block align-bottom bg-white rounded-lg py-6 text-left w-full mb-10">
                        <div class="text-center relative">
                          <p (click)="toggle_pop()" class="absolute right-3 -top-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </p>
                          <a
                            href=""
                            class="text-base leading-6 font-medium text-gray-900 block pb-4 border-b"
                            id="modal-title"
                            >Report User</a
                          >
                          <a
                            href=""
                            class="text-base leading-6 font-medium text-gray-900 block pb-4 border-b"
                            id="modal-title"
                            >Share Profile</a
                          >
                          <a
                            href=""
                            class="text-base leading-6 font-medium text-gray-900 block py-4 border-b"
                            id="modal-title"
                            >More Option</a
                          >
                          <a
                            (click)="toggle_pop()"
                            href="javascript:void(0)"
                            class="text-base leading-6 font-medium text-gray-900 block pt-4"
                            id="modal-title"
                            >Cancel</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </code>
      </div>
    </div>
  `,
})
export class WebUiMobileProfileHomeComponent {
  artWorkAction = true
  collectionAction = false
  menu = false

  changeartWorkAction() {
    this.artWorkAction = true
    this.collectionAction = false
  }
  changeCollectionAction() {
    this.collectionAction = true
    this.artWorkAction = false
  }
  toggle_pop() {
    if (this.menu) {
      this.menu = false
    } else {
      this.menu = true
    }
  }
}
