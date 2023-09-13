<template>
    <h2 class="text-center pb-3 text-5xl font-bold">Testimonials</h2>
    <h3 class="text-center pb-16 text-2xl font-mono font-light">What our customers are saying about us</h3>
    <Swiper :modules="[SwiperAutoplay]" :slides-per-view="slides" :space-between="20" :loop="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
    }">
        <SwiperSlide
            class="px-5 shadow-lg bg-white py-5 rounded-md flex flex-col justify-center items-center space-y-4 font-mono min-h-fit">
            <!-- <div class=""> -->
            <img src="/testimonial1.jpg" alt="Testimonial Image" class="w-16 h-16 rounded-full mx-auto">
            <p class="text-center">With Savoria, dinner is always a treat. Quick, reliable, and the food arrives piping hot.
                A lifesaver on busy evenings!
            </p>
            <h4 class="text-center font-bold">Sarah Mitchell</h4>
            <!-- </div> -->
        </SwiperSlide>
        <SwiperSlide
            class="px-5 shadow-lg bg-white py-5 rounded-md flex flex-col justify-center items-center space-y-4 font-mono min-h-fit">
            <!-- <div class="flex flex-col justify-center items-center space-y-4 font-mono min-h-fit"> -->
            <img src="/testimonial2.jpg" alt="Testimonial Image" class="w-16 h-16 rounded-full mx-auto">
            <p class="text-center">I can't thank Savoria enough for making my office lunches hassle-free. The diverse menu
                options and on-time deliveries keep my team satisfied.
            </p>
            <h4 class="text-center font-bold">Mark Anderson</h4>
            <!-- </div> -->
        </SwiperSlide>
        <SwiperSlide
            class="px-5 shadow-lg bg-white py-5 rounded-md flex flex-col justify-center items-center space-y-4 font-mono min-h-fit">
            <!-- <div class="flex flex-col justify-center items-center space-y-4 font-mono min-h-fit"> -->
            <img src="/testimonial3.jpg" alt="Testimonial Image" class="w-16 h-16 rounded-full mx-auto">
            <p class="text-center">Delightful surprises at my doorstep! Savoria has introduced me to new flavors and
                restaurants I never would've discovered otherwise. It's a weekly highlight!
            </p>
            <h4 class="text-center font-bold">Jennifer Garcia</h4>
            <!-- </div> -->
        </SwiperSlide>
        <SwiperSlide
            class="px-5 shadow-lg bg-white py-5 rounded-md flex flex-col justify-center items-center space-y-4 font-mono min-h-fit">
            <!-- <div class="flex flex-col justify-center items-center space-y-4 font-mono min-h-fit"> -->
            <img src="/testimonial4.jpg" alt="Testimonial Image" class="w-16 h-16 rounded-full mx-auto">
            <p class="text-center">Exceptional customer service! When I had a special request for my order, Savoria went
                above and beyond to accommodate it. Highly recommended!
            </p>
            <h4 class="text-center font-bold">Maria Sanchez</h4>
            <!-- </div> -->
        </SwiperSlide>
        <SwiperSlide
            class="px-5 shadow-lg bg-white py-5 rounded-md flex flex-col justify-center items-center space-y-4 font-mono min-h-fit">
            <!-- <div class="flex flex-col justify-center items-center space-y-4 font-mono min-h-fit"> -->
            <img src="/testimonial5.jpg" alt="Testimonial Image" class="w-16 h-16 rounded-full mx-auto">
            <p class="text-center">A lifesaver during my hectic work schedule. Savoria consistently delivers delicious
                meals, and the easy-to-use app makes ordering a breeze.
            </p>
            <h4 class="text-center font-bold">Daniel Lewis</h4>
            <!-- </div> -->
        </SwiperSlide>
        <SwiperSlide
            class="px-5 shadow-lg bg-white py-5 rounded-md flex flex-col justify-center items-center space-y-4 font-mono min-h-fit">
            <!-- <div class="flex flex-col justify-center items-center space-y-4 font-mono min-h-fit"> -->
            <img src="/testimonial6.jpg" alt="Testimonial Image" class="w-16 h-16 rounded-full mx-auto">
            <p class="text-center">When I want restaurant-quality food without leaving home, I turn to Savoria. Their
                curated menus and prompt deliveries never disappoint.
            </p>
            <h4 class="text-center font-bold">Emma Baker</h4>
            <!-- </div> -->
        </SwiperSlide>
        <SwiperSlide
            class="px-5 shadow-lg bg-white py-5 rounded-md flex flex-col justify-center items-center space-y-4 font-mono min-h-fit">
            <!-- <div class="flex flex-col justify-center items-center space-y-4 font-mono min-h-fit"> -->
            <img src="/testimonial7.jpg" alt="Testimonial Image" class="w-16 h-16 rounded-full mx-auto">
            <p class="text-center">Variety at my fingertips! Savoria offers a range of cuisines to satisfy any craving. It's
                like having a world of flavors just a click away.
            </p>
            <h4 class="text-center font-bold">Ryan Taylor</h4>
            <!-- </div> -->
        </SwiperSlide>
        <SwiperSlide
            class="px-5 shadow-lg bg-white py-5 rounded-md flex flex-col justify-center items-center space-y-4 font-mono min-h-fit">
        <!-- <div class="flex flex-col justify-center items-center space-y-4 font-mono min-h-fit"> -->
        <img src="/testimonial8.jpg" alt="Testimonial Image" class="w-16 h-16 rounded-full mx-auto">
        <p class="text-center">Reliable and efficient Savoria has become my go-to for stress-free dinners. I've
            recommended it to all my friends.
        </p>
        <h4 class="text-center font-bold">Lisa Johnson</h4>
        <!-- </div> -->
    </SwiperSlide>
</Swiper>
</template>

<script setup>
const slides = ref(3)
const {$width} = useNuxtApp()

function checkPageWidth() {
    if($width.value < '600') {
    return slides.value = 1
} else if($width.value > '600' && $width.value < '800') {
    return slides.value = 2
} else if($width.value > '800') {
    return slides.value = 3
}
}

onMounted(() => {
    checkPageWidth()
   
})
watch($width, () => {
  checkPageWidth()
})


</script>