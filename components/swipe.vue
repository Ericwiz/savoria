<template>
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
                    :effect="'creative'" :autoplay="{
                        delay: 4000,
                        disableOnInteraction: true,
                    }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
                    <SwiperSlide>
                        <img src="/headerImg03.jpg" alt="Header Image" class="h-full w-full">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/headerImg01.jpg" alt="Header Image" class="h-full w-full">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/headerImg02.jpg" alt="Header Image" class="h-full w-full">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/headerImg04.jpg" alt="Header Image" class="h-full w-full">
                    </SwiperSlide>
                </Swiper>
  </template>

<script setup>

</script>

<style lang="scss" scoped>

</style>