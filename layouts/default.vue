<template>
    <div>
        <nav class="bg-white px-8 py-5 sticky top-0 z-50">
            <!-- Desktop and larger screen -->
            <div class="hidden md:flex items-center justify-between">
                <h1 class="text-2xl font-sans text-black cursor-pointer font-bold" @click="$router.push('/')">Savor <span class="text-pink-600 -ml-1">ia</span></h1>

                <div class="text-black flex justify-between space-x-2 text-lg font-mono font-semibold">
                    <NuxtLink to="/" class="px-5 py-4" active-class="bg-gray-200">Home</NuxtLink>
                    <NuxtLink to="/menu" class="px-5 py-4" active-class="bg-gray-200">Menu</NuxtLink>
                    <NuxtLink to="/offers" class="px-5 py-4" active-class="bg-gray-200">Offers</NuxtLink>
                    <NuxtLink to="/about" class="px-5 py-4" active-class="bg-gray-200">About</NuxtLink>
                    <NuxtLink to="/contact" class="px-5 py-4" active-class="bg-gray-200">Contact Us</NuxtLink>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" color="black" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </div>

            <!-- Mobile and Tablet -->
            <div class="flex justify-between md:hidden">
                <h1 class="text-2xl font-sans text-black">Savor <span class="text-pink-600 -ml-1">ia</span></h1>

                <button @click="open = !open">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6" color="black">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>

                </button>

                <USlideover v-model="open" side="left" :ui="{backgroundColor: 'bg-white'}">
                    <div class="flex flex-col px-5 py-5">
                        <div class="flex justify-between mb-8">
                            <h1 class="text-2xl font-sans text-black dark:text-white">Savor <span
                                    class="text-pink-600 -ml-1">ia</span></h1>
                            <button @click="open = !open" class="self-end">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>


                        <div class="flex flex-col">
                            <NuxtLink to="/" class="px-5 py-4" active-class="bg-gray-200 dark:bg-gray-700">Home</NuxtLink>
                            <NuxtLink to="/menu" class="px-5 py-4" active-class="bg-gray-200 dark:bg-gray-700">Menu</NuxtLink>
                            <NuxtLink to="/offers" class="px-5 py-4" active-class="bg-gray-200 dark:bg-gray-700">Offers</NuxtLink>
                            <NuxtLink to="/about" class="px-5 py-4" active-class="bg-gray-200 dark:bg-gray-700">About</NuxtLink>
                            <NuxtLink to="/contact" class="px-5 py-4" active-class="bg-gray-200 dark:bg-gray-700">Contact Us</NuxtLink>
                        </div>
                    </div>
                </USlideover>
            </div>
        </nav>
        <slot />
    </div>
</template>

<script setup>
import { _backgroundColor } from '#tailwind-config/theme';

const open = ref(false)
</script>

<style lang="scss" scoped></style>