<template>
    <section class="bg-white w-full py-20 text-center">
      <h1 class="font-cormorant text-5xl md:text-8xl font-semibold tracking-tighter text-center mb-10">
        Our Amenities
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto px-16 lg:px-40 word-breaks">
        <div
        v-for="(amenity, index) in amenities" :key="index"
        class="flex flex-col items-center space-y-3">
            <Icon :name="amenity.icon" size="48" />
            <p class="font-raleway text-lg">{{amenity.text}}</p>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <button class="w-auto border border-black rounded-md px-12 py-1 tracking-wider font-bold font-raleway hover:bg-background-primary hover:text-white transform transition-transform duration-200 hover:scale-105">Contact Us</button>
      </div>
  
    </section>
  </template>


<script setup>
const amenities = [
    {icon: "mdi:update", text: "24-hour reception team"},
    {icon: "tabler:treadmill", text: "Fitness room"},
    {icon: "mdi:washing-machine", text: "Laundry and dry-cleaning service"},
    {icon: "fluent-mdl2:all-currency", text: "Foreign currency exchange service"},
    {icon: "mdi:wheelchair", text: "Disability-friendly facilities"},
    {icon: "healthicons:stethoscope-outline", text: "Visiting doctor service available upon request"},
]
</script>