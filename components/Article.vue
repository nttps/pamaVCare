<template>
    <div class="py-8 sm:py-12 md:py-14 mb-[calc(var(4rem)*2)] border-b-[20px] border-[var(--purple-color)]">
          <div class="relative mb-12">
            <h3 class="text-5xl font-bold text-center text-[var(--purple-color)] underline underline-offset-4">บทความ</h3>
        </div>
        <div class="mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <Swiper
                :height="350"
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
                        v-for="(slide, idx) in articles"
                        :key="idx"
                    >
                        <NuxtLink to="/services/20"  class="block">
                            <div><NuxtImg placeholder loading="lazy" format="webp" :src="slide.image" fit="contain" quality="80" height="300" class="object-contain  w-full h-[300px]"/></div>
                            <div class="text-2xl text-center mt-2">
                                {{ slide.name }}
                            </div>
                        </NuxtLink>
                    </SwiperSlide>
            </Swiper>
        </div>
        <div class="flex flex-col items-center">
            <UButton label="ดูบทความทั้งหมด" :ui="{
                variant:  { solid: 'shadow-sm text-white dark:text-gray-900 bg-[var(--purple-color)] hover:bg-[var(--purple-color-dark)] disabled:bg-[var(--purple-color)] dark:bg-[var(--purple-color)] dark:hover:bg-[var(--purple-color)] dark:disabled:bg-[var(--purple-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--purple-color)] dark:focus-visible:outline-[var(--purple-color)]'},
                size: { xl: 'text-2xl'}
            }" color="purple" size="xl"  />
        </div>
    </div>
</template>

<script setup>
    const articles = ref([{
        name: 'ทำไมคนไทย ‘แก่ก่อนรวย’ หาเหตุผลกู้วิกฤตสังคมสูงวัย',
        image: 'https://storage.googleapis.com/younghappy-web-bucket/post_uplaod/2023/09/picpost%209-4-10.jpg',
        href: ''
    },{
        name: 'อายุ 60+ เมื่อไร เรื่องเงินไม่ใช่ปัญหา รู้จัก ‘กองทุนผู้สูงอายุ’',
        image: 'https://storage.googleapis.com/younghappy-web-bucket/post_uplaod/2023/09/picpost-9-2-06.jpg',
        href: ''
    },{
        name: 'ผลสำรวจพฤติกรรม ความกังวลและความคาดหวัง ในทัศนะของผู้สูงอายุ',
        image: 'https://storage.googleapis.com/younghappy-web-bucket/post_uplaod/2023/05/%E0%B8%AA%E0%B8%B3%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%9E%E0%B8%A4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%20%E0%B8%AA%E0%B8%AA%E0%B8%AA-09.png',
        href: ''
    },{
        name: 'ผู้ดูแลมืออาชีพ (CG)',
        image: '/images/services/shutterstock_1374430910.jpg',
        href: ''
    },{
        name: 'นักกายภาพบำบัด',
        image: '/images/services/shutterstock_93224191.jpg',
        href: ''
    },{
        name: 'ปรับปรุง สร้างบ้านเพื่อผู้สูงอายุ ผู้ป่วย',
        image: '/images/services/shutterstock_103863410.jpg',
        href: ''
    }])
</script>


<style>
</style>