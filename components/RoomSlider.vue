<template>
    <section id="rooms" class="bg-white w-full py-20">
        <h1 class="font-cormorant text-5xl md:text-8xl font-semibold tracking-tighter text-center">Our Rooms</h1>

        <div class="relative overflow-hidden">
            <div class="hidden md:grid grid-cols-4 gap-6 mb-6">
                <div
                v-for="(img, index) in images.slice(0, 4)"
                :key="index" 
                class="bg-white overflow-hidden">
                    <img :src="img" alt="Room" class="w-full h-60 object-cover">
                </div>
            </div>
        </div>

        <div class="relative overflow-hidden">
            <div ref="scrollContainer" class="flex overflow-x-auto space-x-5 scrollbar-hide snap-x snap-mandatory">
                <div 
                v-for="(img, index) in images" :key="index"
                class="min-w-[450px] max-w-xs flex-shrink-0 snap-center bg-white overflow-hidden shadow-md">
                    <img :src="img" alt="Room" class="w-full h-60 object-cover">
                </div>
            </div>

            <button class="absolute left-2 top-1/2 hover:bg-white/50" @click="scrollLeft">
                <Icon name="iconamoon:arrow-left-2-thin" size="40" />
            </button>

            <button class="absolute right-2 top-1/2 hover:bg-white/50" @click="scrollRight">
                <Icon name="iconamoon:arrow-right-2-thin" size="40" />
            </button>
        </div>

        <div class="flex justify-center">
            <button class="border border-black rounded-md px-10 py-1 mt-8 tracking-wider font-bold font-raleway hover:bg-background-primary hover:text-white transform transition-transform duration-200 hover:scale-105">Find Out More</button>
        </div>
    </section>
</template>

<script setup>
const scrollContainer = ref(null)

const images = [
  '/images/rooms/room1.jpg',
  '/images/rooms/room2.webp',
  '/images/rooms/room3.jpg',
  '/images/rooms/room4.jpg',
  '/images/rooms/room5.jpg',
  '/images/rooms/room6.jpg',
  '/images/rooms/room7.jpg',
  '/images/rooms/room8.jpg',
  '/images/rooms/room9.jpg',
  '/images/rooms/room10.jpg',
  '/images/rooms/room11.jpg',
  '/images/rooms/room12.jpg',
  '/images/rooms/room13.webp',
]

function scrollLeft() {
    const container = scrollContainer.value
    if (!container) return

    if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth
    } else {
        scrollContainer.value?.scrollBy({left: -300, behavior: 'smooth'})
    }
}

function scrollRight() {
    const container = scrollContainer.value
    if (!container) return

    const maxScrollLeft = container.scrollWidth - container.clientWidth

    if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollLeft = 0
    } else {
        scrollContainer.value?.scrollBy({left: 300, behavior: 'smooth'})
    }
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>