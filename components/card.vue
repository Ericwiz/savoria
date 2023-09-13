<template>
    <div class="flex flex-col space-y-4 px-8 py-8 rounded-2xl shadow-lg bg-white my-3 w-full h-96 min-h-fit">
        <img :src="image" alt="card image" class="h-52 w-full rounded-2xl">
        <h3 class="text-lg text-center font-medium text-black">{{ title }}</h3>
        <p class="text-center hidden xs:block text-[0.9rem] leading-5 text-black">{{ content }}</p>
        <button class="block xs:hidden text-white self-center bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 rounded-md px-6 py-2 text-lg font-mono uppercase">
            Checkout
        </button>
    </div>
</template>
<script setup>

defineProps(['image', 'title', 'content'])
</script>