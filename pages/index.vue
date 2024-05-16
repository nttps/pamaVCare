<template>
    <div>
        <Hero :src="pageImage" height="screen"> 
            <div class="mx-auto px-4 sm:px-6 lg:px-8 gap-16 sm:gap-y-24 flex flex-col rounded-xl">
                <div class="text-center relative z-[1] bg-white/70 w-full rounded-full py-10 px-20">
                    <div class="mb-10">
                        <h1 class="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                            <span >PAMA</span> <span class="text-[var(--purple-color)]">WE CARE</span>
                        </h1>
                        <p class="mt-6 text-4xl font-bold tracking-wider dark:text-gray-300"><span >บริการจัดส่งผู้ดูแลผู้สูงอายุและผู้ป่วยให้คุณถึงที่บ้านและโรงพยาบาล<br class="hidden lg:block"> ติดต่อ 0978126666</span></p>

                        <div class="mt-5 text-7xl font-bold tracking-wider dark:text-gray-300 bg-white p-4 rounded-full text-[var(--purple-color)] italic">ค่าบริการเบื้องต้น <span class="text-[var(--orange-color)]">20,990 บาท</span></div>
                    </div>
                </div>
            </div>
        </Hero>

       
        <Services />
        <HrLogo />
        <Article />
    </div>
</template>

<script setup>
    import pageImage from "~/assets/images/hero-image.jpg";
</script>

<style lang="scss" scoped>

</style>