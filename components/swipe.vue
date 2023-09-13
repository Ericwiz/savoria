<template>
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCards]" :slides-per-view="1" :loop="true"
                    :effect="'cards'" :autoplay="{
                        delay: 1000,
                        disableOnInteraction: true,
                    }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}" class="h-48 w-48">
                    <SwiperSlide class="h-48 w-48">
                        <img src="/headerImg03.jpg" alt="Header Image" class="h-48 w-48">
                    </SwiperSlide>
                    <SwiperSlide class="h-48 w-48">
                        <img src="/headerImg01.jpg" alt="Header Image" class="h-48 w-48">
                    </SwiperSlide>
                    <SwiperSlide class="h-48 w-48">
                        <img src="/headerImg02.jpg" alt="Header Image" class="h-48 w-48">
                    </SwiperSlide>
                    <SwiperSlide class="h-48 w-48">
                        <img src="/headerImg04.jpg" alt="Header Image" class="h-48 w-48">
                    </SwiperSlide>
                    <SwiperSlide class="h-48 w-48">
                        <img src="/feedImg.jpg" alt="Header Image" class="h-48 w-48">
                    </SwiperSlide>
                    <SwiperSlide class="h-48 w-48">
                        <img src="/headerImg00.jpg" alt="Header Image" class="h-48 w-48">
                    </SwiperSlide>
                </Swiper>
  </template>

<script setup>

</script>

<style lang="scss" scoped>

</style>