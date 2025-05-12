<template>
    <div v-if="!isMenuOpen">
    <div class="absolute flex justify-between items-start top-10 left-6 right-6 z-20 text-white">
        <div class="flex flex-col items-start sm:space-y-4 lg:space-y-0 ml-1 md:ml-10">
            <!-- Hamburger Menu Icon -->
            <button @click="$emit('update:isMenuOpen', true)">
                <Icon name="mdi:menu" size="30" />
            </button>

            <!-- Dropdown -->
            <div class="flex flex-row items-center space-x-16 lg:space-x-12">
                <div class="relative w-full mt-1">
                    <button class="flex items-center space-x-2 py-1" @click="isShowHotelDropDown = !isShowHotelDropDown">
                    <span class="font-cormorant text-lg md:text-2xl">Select A Hotel</span>
                    <Icon name="lucide:chevron-down" size="20" />
                </button>

                <div v-show="isShowHotelDropDown" class="absolute mt-2 bg-white/70 text-black shadow-lg rounded w-full z-30">
                    <ul class="py-1">
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Hotel A</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Hotel B</a></li>
                    </ul>
                </div>
                </div>

                <div class="relative w-full sm:w-auto">
                    <button class="flex items-center space-x-2 py-1" @click="isShowLanguageDropDown = !isShowLanguageDropDown">
                    <Icon name="famicons:globe-outline" size="20" />
                    <span class="font-cormorant text-lg md:text-2xl">English</span>
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
    </div>

    <!-- Logo -->
    <div class="absolute flex justify-center items-center w-full mt-6 lg:mt-10 h-16">
        <img src="/images/logo.png" alt="Logo">
    </div>
    </div>
</template>

<script setup>
const isShowHotelDropDown = ref(false)
const isShowLanguageDropDown = ref(false)

defineProps(['isMenuOpen'])
defineEmits(['update:isMenuOpen'])
</script>

