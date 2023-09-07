<template>
    <header class="sm:h-screen">
        <div class="flex flex-col justify-between items-center sm:flex-row md:flex-row-reverse w-full h-full">
            <div class="bg-black text-white py-20 px-7 h-full w-full sm:w-[50%] flex flex-col">
                <h1 class="text-lg xs:text-2xl font-bold text-center font-mono">Delicious Delights Delivered to Your
                    Doorstep</h1>
                <p class=" text-sm xs:text-lg text-center font-mono py-10">Welcome to Savoria, your one-stop destination for
                    discovering and savoring a world of culinary
                    delights.
                </p>
                <button
                    class="self-center bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 rounded-md px-6 py-4 text-lg font-mono uppercase">
                    View our Menu </button>
            </div>
            <!-- <div > -->
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
        <div v-if="pending">
            <Pending>
                <div class="bg-slate-200 px-8 pt-10">
                    <div class="flex space-x-5 justify-between">
                        <div class="flex flex-col space-y-4 px-5 py-8 rounded-2xl shadow-lg bg-white my-3 w-full h-96"
                            v-for="n in 4">
                            <USkeleton class="h-44 w-full" :ui="{ rounded: ' rounded-2xl' }" />
                            <USkeleton class="h-5 w-[250px] mb-5 mx-auto" />
                            <div class="flex flex-col space-y-2 mt-10">
                                <USkeleton class="h-3 w-[250px] mx-auto" />
                                <USkeleton class="h-3 w-[250px] mx-auto" />
                                <USkeleton class="h-3 w-[250px] mx-auto" />
                                <USkeleton class="h-3 w-[250px] mx-auto" />
                                <USkeleton class="h-3 w-[250px] mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </Pending>
        </div>
        <div v-else>
            <Menus>
                <h2 class="text-center text-2xl pt-3 pb-8">Our Menus</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Card v-for="menu in menus" :key="menu.id" :image="menu.menu_image" :title="menu.menu_name"
                        :content="menu.menu_description" />
                </div>
            </Menus>
        </div>
    </main>
</template>

<script setup>
const supabase = useSupabaseClient()

const { pending, data: menus } = useAsyncData('menus', async () => {
    let { data } = await supabase.from('menus').select('*')
    return data
},
    {
        lazy: true
    })
</script>

<style lang="scss" scoped></style>