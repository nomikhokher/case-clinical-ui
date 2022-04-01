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
                href="/dashboard"
                class="font-semibold border-b-2 border-black dark:border-gray-300 text-lg pb-4 px-3 py-2 leading-3 dark:text-white"
                >Artworks</a
              >
              <a href="/team" class="font-medium gray-c px-2 py-2 text-lg rounded-lg leading-3 pb-0 dark:text-white"
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

  changeartWorkAction() {
    this.artWorkAction = true
    this.collectionAction = false
  }
  changeCollectionAction() {
    this.collectionAction = true
    this.artWorkAction = false
  }
}
