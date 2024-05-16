<template>
    <BackofficePartialsHeader />
    <div class="flex flex-grow min-h-screen pt-[74px]">
        <div class="shrink-0 w-64 bg-gray-50 border-r py-4" role="navigation" aria-label="เมนู">
            <BackofficePartialsNav />
        </div>
        <div class="shrink-0 flex-grow min-w-[calc(100%-16rem)] max-w-full py-4 px-4" role="main" aria-label="เนื้อหา">
            <NuxtPage />
        </div>
    </div>
    <BackofficePartialsFooter />
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>