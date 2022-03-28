import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-profile-home',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code
          ><div class="bg-white h-screen pt-8">
            <div class="flex px-5 justify-between items-center gap-4 border-b">
              <div><i class="fa fa-angle-left fa-solid fa-2x py-1"></i></div>
              <div>
                <h2 class="text-2xl font-medium title-font text-gray-900">Profile</h2>
              </div>
              <div></div>
            </div>
            <div class="flex px-5 gap-5 items-center justify-between gap-2 mt-4">
              <div>
                <img class="rounded-full w-18 float-left mr-4" src="/assets/image/user-pic.png" alt="" />
                <div class="float-right">
                  <h3 class="text-xl font-bold pt-1">Kevin</h3>
                  <p class="text-sm g-color">114 followers</p>
                </div>
              </div>

              <div>
                <button class="w-full rounded-full text-white py-2 px-5 c-btn text-sm">Edit profile</button>
              </div>
            </div>

            <div class="px-5 mt-5">
              <p class="font-bold text-base mb-3">BIO</p>
              <p class="text-gray-400 text-sm">
                My work oscillates between several media through which I question the existence of the image and its
                production.
              </p>
            </div>

            <div
              class="grid-cols-2 grid divide-x  align-middle items-center px-5 rounded-lg py-3 mt-4 mx-5 text-center bg-gray-100 g-color"
            >
              <div class="py-3">
                <h5 class="text-2xl font-bold">124</h5>
                <p class="text-sm font-normal ">Folowers</p>
              </div>

              <div class="py-3">
                <h5 class="text-2xl font-bold">124</h5>
                <p class="text-sm font-normal">Folowers</p>
              </div>
            </div>

            <nav class="flex space-x-4 ml-3 mt-9">
              <a
                href="/dashboard"
                class="font-semibold border-b-2 border-black text-black text-lg pb-4 px-3 py-2 leading-3"
                >Following</a
              >
              <a href="/team" class="font-medium gray-c px-2 py-2 text-lg rounded-lg leading-3 pb-0">Followers</a>
            </nav>
            <hr class="" />

            <section class=" body-fon mt-4">
              <div class="container px-5 pt-4 pb-5  shadow-lg shadow-blue-500/20 rounded-lg bg-white">
                <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                  <div class="sm:w-1/2 mb-10 px-4">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src="/assets/image/img1.png"
                      />
                    </div>
                    <h2 class="title-font text-base font-bold font-medium text-gray-900 mt-2 ">The Cubes of Destiny</h2>
                    <p class="leading-relaxed text-base">ERC-1155</p>
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
export class WebUiMobileProfileHomeComponent {}
