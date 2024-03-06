<template>
    <header class="bg-white  border-b -mb-px sticky top-0 z-50 lg:mb-0 border-gray-600">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[4rem]">
            <div class="lg:flex-1 flex items-center gap-1.5">
                <NuxtLink to="/"><img src="~/assets/images/logo.png" class="w-20 h-20" alt="logo"></NuxtLink>
            </div>
            <ul class="items-center gap-x-8 hidden lg:flex">
                <li v-for="(menu, index) in menus" :key="index" class="text-xl ">
                    <NuxtLink :to="menu.href" class="font-bold text-[var(--purple-color)] hover:text-[var(--orange-color)]">{{ menu.text }}</NuxtLink>
                </li>
            </ul>
            <div class="flex items-center justify-end lg:flex-1 gap-2">
                <NuxtLink to="/facebook" external >
                    <UIcon   
                        name="ic:baseline-facebook"
                        dynamic 
                        class="w-9 h-9"
                    />
                </NuxtLink>
                <NuxtLink to="/facebook" external>
                    <UIcon   
                        name="bi:line"
                        dynamic 
                        class="w-8 h-8"
                    />
                </NuxtLink>
            </div>
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
    text: 'เกี่ยวกับเรา',
    href: '/about'
},{
    text: 'ติดต่อ',
    href: '/contact'
}]
</script>

<style scoped>

</style>