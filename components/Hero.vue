<template>
    <div :class="`h-${height}`" class="py-24 flex justify-center items-center sm:py-32 md:py-40 relative mb-[calc(var(4rem)*2)] shadow bg-[var(--purple-color-light)] border-b-[20px] border-[var(--purple-color)]" :style="`background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${src});background-repeat: no-repeat;background-size: cover;background-position: center;position: relative;`">
        <slot />
    </div>
</template>

<script setup>


const props = defineProps(['src', 'height'])
</script>