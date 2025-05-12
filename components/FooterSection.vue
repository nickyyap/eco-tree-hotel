<template>
    <section class="bg-background-primary px-10 py-20">
        <div class="flex flex-col md:flex-row gap-10 mx-auto relative">
            <div class="md:w-1/2">
                <div class="flex flex-col font-cormorant text-white text-2xl">
                    <ul class="space-y-2 tracking-wider hover:text-white/80">
                    <li class="hover:text-white"><a href="#home">Home</a></li>
                    <li class="hover:text-white"><a href="#rooms">Rooms</a></li>
                    <li class="hover:text-white"><a href="#">Restaurants</a></li>
                    <li class="hover:text-white"><a href="#">Articles</a></li>
                    <li class="hover:text-white"><a href="#">Contact</a></li>
                </ul>

                <div class="flex flex-col font-raleway mt-20 mb-20 md:mb-0 tracking-wider break-words">
                    <div class="mb-5">
                        <p class="text-lg">Email</p>
                        <p class="font-sans text-base font-light">reservationcwb@ecotreehotel.com.hk</p>
                    </div>

                    <div class="mb-5">
                        <p class="text-lg">Location</p>
                        <p class="font-sans text-base font-light">15 Mercury Street, Causeway Bay, Hong Kong</p>
                    </div>

                    <div class="mb-5">
                        <p class="text-lg">Phone</p>
                        <div class="flex space-x-4">
                            <p class="font-sans text-base font-light tracking-normal">(+852) 2317 1788</p>
                            <Icon name="f7:phone-circle" size="22" />
                        </div>
                    </div>

                    <div>
                        <p class="text-lg">Social</p>
                        <div class="flex space-x-4">
                            <a href="https://instagram.com">
                                <span class="inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-[#ff3f7f] pl-1">
                                    <Icon name="fa-brands:instagram" size="22" />
                                </span>
                            </a>
                            <a href="https://facebook.com">
                                <span class="inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-[#1877F2]">
                                    <Icon name="fa:facebook" size="22" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="md:w-1/2 relative">
                <div class="flex flex-col items-start md:items-end font-cormorant text-white tracking-tighter mb-32">
                    <h2 class="text-4xl md:text-5xl">颐庭酒店</h2>
                    <h1 class="text-8xl md:text-9xl tracking-tighter">EcoTree</h1>
                    <h1 class="text-8xl md:text-9xl tracking-tighter">Hotel</h1>
                </div>
            </div>

            <div class="absolute right-1 bottom-1 z-20">
                <div class="relative text-white">
                    <button class="flex items-center space-x-2 py-1" @click="isShowLanguageDropDown = !isShowLanguageDropDown">
                        <Icon name="famicons:globe-outline" size="20" />
                        <span class="font-cormorant text-xl">English</span>
                        <Icon name="lucide:chevron-down" size="20" />
                    </button>

                    <div v-show="isShowLanguageDropDown" class="absolute mt-2 bg-white/70 text-black shadow-lg rounded w-full z-30">
                        <ul class="py=1">
                            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">繁体中文</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const isShowLanguageDropDown = ref(false)
</script>