<template>
    <header class="sm:h-screen">
        <div class="flex flex-col justify-between items-center sm:flex-row md:flex-row-reverse w-full h-full">
            <div class="bg-black text-white py-20 px-7 h-full w-full sm:w-[50%] flex flex-col">
                <h1 class="text-lg xs:text-2xl font-bold text-center font-mono">Delicious Delights Delivered to Your
                    Doorstep.</h1>
                <p class=" text-sm xs:text-lg text-center font-mono py-10">Welcome to Savoria, your one-stop destination for
                    discovering and savoring a world of culinary
                    delights.
                </p>
                <button
                    class="self-center bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 rounded-md px-6 py-4 text-lg font-mono uppercase">
                    View Menu
                </button>
            </div>
            <!-- <div > -->
            <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
                :autoplay="{
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
}" class="w-full h-0 hidden sm:h-full sm:w-[50%]">
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
            <!-- </div> -->

        </div>
    </header>
    <main>
        <section v-if="pending">
            <Pending>
                <div class="bg-slate-200 px-8 py-10">
                    <h2 class="text-center text-2xl lg:text-3xl pt-3 pb-8 md:pb-8 text-black">Made Specially For You
                        </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div class="flex flex-col space-y-4 px-5 py-8 rounded-2xl shadow-lg bg-white my-3 w-full h-96"
                            v-for="n in 4">
                            <USkeleton class="h-44 w-full" :ui="{ rounded: ' rounded-2xl' }" />
                            <USkeleton class="h-6 w-full mb-5 mx-auto" />
                            <div class="flex flex-col space-y-2 mt-10">
                                <USkeleton class="h-3 w-full mx-auto" />
                                <USkeleton class="h-3 w-full mx-auto" />
                                <USkeleton class="h-3 w-full mx-auto" />
                                <USkeleton class="h-3 w-full mx-auto" />
                                <USkeleton class="h-3 w-full mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </Pending>
        </section>
        <section v-else>
            <Menus>
                <h2 class="text-center text-2xl lg:text-3xl pt-3 pb-8 md:pb-8 text-black">Made Specially For You</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Card v-for="menu in menus" :key="menu.id" :image="menu.menu_image" :title="menu.menu_name"
                        :content="menu.menu_description" />
                </div>
                <div class="flex py-6">
                    <button
                        class="rounded-full px-10 py-4 uppercase border-2 border-black mx-auto hover:border-0 hover:text-white hover:bg-gradient-to-r hover:from-rose-400 hover:via-rose-500 hover:to-rose-600 transition-all duration-100 text-black">See
                        More</button>
                </div>
            </Menus>
        </section>
        <section class="bg-slate-200 flex justify-between pb-8">
            <div
                class="w-full bg-[#100f1a] text-white flex flex-col items-center justify-center space-y-12 px-8 pb-8 bg-hero-image h-fit sm:h-screen bg-center bg-blend-overlay bg-cover">
                <h3 class="text-lg pt-8 sm:pt-0 sm:text-2xl md:text-3xl text-center font-mono font-bold">Discover Delicious: Your Culinary Adventure Starts Here</h3>
                <p class="self-center text-center text-sm md:text-base font-mono">At Savoria we are passionate about creating exceptional dining
                    experiences that ignite your taste buds and leave you craving for more. Our diverse menu is a testament
                    to our commitment to culinary excellence, with each dish thoughtfully prepared to tantalize your senses.
                </p>
                <button
                    class="self-center bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 rounded-md px-6 py-4 text-lg font-mono uppercase mt-4">
                   Order Now
                </button>
            </div>
        </section>

        <section class="bg-slate-200 py-10 w-full px-10">
            <Testimonial/>
        </section>
    </main>
</template>

<script setup>
const supabase = useSupabaseClient()

const { data: menus, pending } = useAsyncData('menus', async () => {
    let { data } = await supabase.from('menus').select('*')
    return data
},
    {
        lazy: true,
        server: false
    })
    console.log(pending.value)
</script>

<style lang="scss" scoped></style>