<template>
    <div class="py-8 sm:py-12 md:py-14 mb-[calc(var(4rem)*2)] shadow border-b-[20px] border-[var(--orange-color)]">
        <div class="relative mb-12">
            <h3 class="text-4xl font-bold text-center text-[var(--orange-color)] underline">บริการ</h3>
        </div>
        <div class="mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <Swiper
                :height="300"
                :modules="[SwiperAutoplay, SwiperNavigation]"
                :breakpoints="{
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 60
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 60
                    }
                }"
                :loop="true"
                :effect="'creative'"
                :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true
                }"
                
                :navigation="true"
                :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1]
                    },
                    next: {
                        translate: ['100%', 0, 0]
                    }
                }"
                >
                    <SwiperSlide
                        v-for="(slide, idx) in slides"
                        :key="idx"
                        class="flex flex-col"
                    >
                        <div class="w-full h-full" :style="`background-color: ${slide.bg}; color: ${slide.color}`">

                        </div>
                        <div class="text-2xl">
                            {{ idx }}
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
        <div class="flex flex-col items-center">
            <UButton label="ดูบริการทั้งหมด" :ui="{
                variant:  { solid: 'shadow-sm text-white dark:text-gray-900 bg-[var(--orange-color)] hover:bg-[var(--orange-color-dark)] disabled:bg-[var(--orange-color)] dark:bg-[var(--orange-color)] dark:hover:bg-[var(--orange-color)] dark:disabled:bg-[var(--orange-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-color)] dark:focus-visible:outline-[var(--orange-color)]'},
                size: { xl: 'text-2xl'}
            }" color="purple" size="xl"  />
        </div>
      
    </div>
</template>

<script setup>
    const slides = ref(Array.from({ length: 10 }, () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        // Figure out contrast color for font
        const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

        return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
    }))
</script>


<style>
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        height: 40vh;
        font-size: 4rem;
        font-weight: bold;
    }
    .swiper-wrapper {
        min-width: 100%;
        width: 100%;
    }
    .swiper-cards {
        width: 240px;
        height: 240px;
    }
    .swiper-cards .swiper-slide {
        border-radius: 6px;
        border: 1px solid black;
    }
</style>