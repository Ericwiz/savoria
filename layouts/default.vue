<template>
    <div>
        <nav class="bg-white px-8 py-5 sticky top-5 z-50">
            <div class="flex justify-between">
                <h1 class="text-2xl font-sans text-black">Savor <span class="text-pink-600 -ml-1">ia</span></h1>

                <button @click="open = !open">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>

                </button>

                <USlideover v-model="open" side="left">
                    <NuxtLink to="/">Home</NuxtLink>
                </USlideover>
            </div>
        </nav>
        <slot />
    </div>
</template>

<script setup>
const open = ref(false)
</script>

<style lang="scss" scoped></style>