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
          ><div class="bg-white h-screen pt-8 dark:bg-gray-800">
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
              <section class=" body-fon mt-4 dark:bg-gray-800">
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
                      <h2 class="title-font text-base font-medium text-gray-900 mt-2 ">The Cubes of Destiny</h2>
                      <p class="leading-relaxed text-base">ERC-1155</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </code>
      </div>
    </div>
  `,
})
export class WebUiMobileProfileHomeComponent {}
