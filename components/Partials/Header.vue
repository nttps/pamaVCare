<template>
    <header class="bg-white  py-1 border-b -mb-px sticky top-0 z-50 lg:mb-0 border-gray-600">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[4rem]">
            <div class="lg:flex-1 flex items-center gap-1.5">
                <NuxtLink to="/"><img src="~/assets/images/logo.png" class="h-20" alt="logo"></NuxtLink>
            </div>
            <ul class="items-center gap-x-8 hidden lg:flex">
                <li v-for="(menu, index) in menus" :key="index" class="text-xl ">
                    <NuxtLink :to="menu.href" class="font-bold text-[var(--purple-color)] underline-offset-4 hover:underline hover:text-[var(--orange-color)] " v-slot="{ isActive }">
                        <div :class="isActive ? 'text-[var(--orange-color)] underline underline-offset-4' : ''">{{ menu.text }}</div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">


const menus = [{
    text: 'หน้าหลัก',
    href: '/'
},{
    text: 'บริการ',
    href: '/services'
},{
    text: 'บทความ',
    href: '/articles'
},{
    text: 'เกี่ยวกับเรา',
    href: '/about'
},{
    text: 'ติดต่อเรา',
    href: '/contact'
}]
</script>

<style scoped>

</style>