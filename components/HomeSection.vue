<template>
    <section id="home" class="relative w-full h-screen overflow-hidden bg-cover" style="background-image: url(/images/background-lobby.webp); background-position: 20% center;">
        <div class="absolute inset-0 bg-black bg-opacity-30">
            <AppNavbar v-model:isMenuOpen="isMenuOpen" />

            <!-- Main Content -->
            <div v-if="!isMenuOpen">
                <div class="absolute z-10 flex flex-col justify-end items-start h-full ml-8 md:ml-14 mr-8 text-white">
                    <h1 class="font-cormorant text-8xl md:text-huge xl:text-mega tracking-tighter font-semibold">EcoTree</h1>
                    <div class="flex flex-row mb-4">
                        <h1 class="font-cormorant text-8xl md:text-huge xl:text-mega tracking-tighter font-semibold">Hotel</h1>
                        <div class="flex flex-col md:space-y-3 xl:space-y-8">
                            <span class="hidden md:block text-3xl md:text-4xl xl:text-5xl font-light pl-4 mt-0 xl:mt-4">颐庭酒店</span>
                            <span class="md:hidden text-4xl font-light pl-2">颐庭<br>酒店</span>
                            <p class="hidden md:block text-base xl:text-xl font-light pl-4 mr-0 lg:mr-52 max-w-xl pb-5 pr-2 break-words">
                                The Chinese name of our hotel translates to  
                                "providing a comfortable staying experience 
                                for our guests," reflecting our commitment to
                                ensuring the highest quality of hospitality.
                            </p>
                        </div>
                    </div>
                    <p class="md:hidden text-base font-light mt-2 p-0 break-words mb-8">
                                The Chinese name of our hotel translates to  
                                "providing a comfortable staying experience 
                                for our guests," reflecting our commitment to
                                ensuring the highest quality of hospitality.
                    </p>
                </div>
            </div>
        </div>

         <!-- Hamburger Menu -->
         <HamburgerMenu :isOpen="isMenuOpen" @close="isMenuOpen = false"/>

         <!-- Promotion Card -->
          <div class="hidden md:flex flex-col absolute top-6 right-6 z-20">
            <div class=" bg-white text-black rounded-lg shadow-xl w-auto">
                <h3 class="font-merriweather font-light tracking-tighter text-lg lg:text-2xl leading-tight text-center m-1 md:px-10 lg:px-16">Book Direct To <br> Save 20% OFF!</h3>
                <p class="text-raleway text-xs lg:text-sm pt-3 px-3 font-light">Apr 09-10</p>
                <div class="text-xs lg:text-sm font-semibold space-y-1 py-1 px-3">
                    <div class="flex justify-between">
                        <span class="tracking-widest">Our Website</span><span class="tracking-widest">HK$600</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="tracking-widest">Booking.com</span><span class="tracking-widest">HK$750</span>
                    </div>
                </div>
                <div class="text-xs lg:text-sm font-bold text-red-600 tracking-widest text-right px-3 py-2">Save HK$150!</div>
            </div>
            <button class="bg-background-primary w-full text-white text-xs lg:text-sm font-semibold tracking-widest p-2 rounded-lg hover:bg-background-primary/90">Reserve Now</button>
          </div>

          <!-- Review Box -->
          <div class="hidden md:flex absolute bottom-10 right-6 z-10 md:mb-24 lg:mb-0 bg-review-bg p-4 rounded-xl shawdow-xl w-auto hover:bg-review-bg/90">
            <div class="flex flex-col text-center">
                <h4 class="tracking-widest text-xl  font-semibold">Excellent</h4>
                <span class="text:lg  tracking-wider pb-2">☆☆☆☆☆</span>
                <div class="flex justify-between">
                    <p class="tracking-wider text-xxs ">Based on 20,687 reviews</p>
                </div>
            </div>
            <div class="text-2xl xl:text-3xl pt-2">
                <span class="text-black font-bold tracking-widest">4.5</span><span class="text-white tracking-widest">/5</span>
            </div>
            <Icon name="iconamoon:arrow-up-2-thin" size="34" class="absolute bottom-2 right-3 text-text-light"/>
            </div>
    </section>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>

