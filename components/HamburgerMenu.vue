<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex">
        <!-- Left side menu -->
        <div class="w-full md:w-1/2 bg-white/70 p-10 space-y-20 font-cormorant font-semibold text-3xl md:text-4xl text-text-light">
            <button class="text-left hover:text-white" @click="$emit('close')">
                <Icon name="iwwa:close" size="30" />
            </button>
                <ul class="space-y-4 tracking-wider">
                    <li class="hover:text-white"><a href="#home" @click="$emit('close')">Home</a></li>
                    <li class="hover:text-white"><a href="#rooms" @click="$emit('close')">Rooms</a></li>
                    <li class="hover:text-white"><a href="#">Restaurants</a></li>
                    <li class="hover:text-white"><a href="#">Articles</a></li>
                    <li class="hover:text-white"><a href="#">Contact</a></li>
                </ul>
        </div>

        <!-- Right side info -->
         <div class="hidden md:flex md:flex-col md:w-1/2 bg-background-primary text-white">
            <div class="flex flex-col justify-between items-center p-6">
                <img src="/images/logo.png" alt="Logo" class="h-20">
            </div>
            <div class="p-10 font-raleway tracking-wider">
                <div class="mb-5">
                    <p class="mb-1 text-2xl">Email</p>
                    <p class="text-xl font-sans break-words">reservationcwb@ecotreehotel.com.hk</p>
                </div>
                
                <div class="mb-5">
                    <p class="mb-1 text-2xl">Location</p>
                    <p class="text-xl font-sans">15 Mercury Street, Causeway Bay, Hong Kong</p>
                </div>

                <div class="mb-5">
                    <p class="mb-1 text-2xl">Phone</p>
                    <div class="flex space-x-2">
                        <p class="text-xl font-sans">(+852) 2317 1788</p>
                        <Icon name="f7:phone-circle" size="30" />
                    </div>
                </div>

                <div>
                    <p class="mb-1 text-2xl">Social</p>
                    <div class="space-x-4">
                        <a href="https://instagram.com">
                            <span class="inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-[#ff3f7f]">
                                <Icon name="fa-brands:instagram" size="30" />
                            </span>
                        </a>

                        <a href="https://facebook.com">
                            <span class="inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-[#1877F2]">
                                <Icon name="fa:facebook" size="30" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup>
defineProps(['isOpen'])
defineEmits(['close'])
</script>

