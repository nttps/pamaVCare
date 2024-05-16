<template>
    <div class="py-8 sm:py-12 md:py-14 mb-[calc(var(4rem)*2)]">
        <div class="relative mb-12">
            <h3 class="text-5xl font-bold text-center text-[var(--purple-color)] underline underline-offset-4">บริการ</h3>
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
                        v-for="(slide, idx) in services"
                        :key="idx"
                    >
                        <NuxtLink to="/services/20"  class="block">
                            <div><NuxtImg placeholder loading="lazy" format="webp" :src="slide.image" fit="contain" quality="80" height="300" class="object-contain  w-full h-[300px]"/></div>
                            <div class="text-2xl text-center mt-2">
                                {{ slide.name }}
                            </div>
                            <div class="text-xl text-center mt-2">
                                {{ slide.beginPrice }}
                            </div>
                        </NuxtLink>
                    </SwiperSlide>
            </Swiper>
        </div>
        <div class="flex flex-col items-center">
            <UButton label="ดูบริการทั้งหมด" :ui="{
                variant:  { solid: 'shadow-sm text-white dark:text-gray-900 bg-[var(--purple-color)] hover:bg-[var(--purple-color-dark)] disabled:bg-[var(--purple-color)] dark:bg-[var(--purple-color)] dark:hover:bg-[var(--purple-color)] dark:disabled:bg-[var(--purple-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--purple-color)] dark:focus-visible:outline-[var(--purple-color)]'},
                size: { xl: 'text-2xl'}
            }" color="purple" size="xl"  />
        </div>
      
    </div>
</template>

<script setup>


     const services = ref([{
        name: 'พยาบาลวิชาชีพ (RN)',
        image: '/images/services/shutterstock_425987509.jpg',
        href: '',
        beginPrice: 'อัตราค่าบริการ 1,500 บาทต่อครั้ง'
    },{
        name: 'ผู้ช่วยพยาบาล (PN)',
        image: '/images/services/shutterstock_288591065.jpg',
        href: '',
        beginPrice: 'อัตราค่าบริการเริ่มต้นที่ 1,800 บาทต่อ 12 ชั่วโมง'
    },{
        name: 'พนักงานช่วยการพยาบาล (NA)',
        image: '/images/services/hero-image.jpg',
        href: '',
        beginPrice: 'อัตราค่าบริการเริ่มต้น 25,900 บาทต่อเดือน'
    },{
        name: 'ผู้ดูแลมืออาชีพ (CG)',
        image: '/images/services/shutterstock_1374430910.jpg',
        href: '',
        beginPrice: 'อัตราค่าบริการเริ่มต้น 23,900 บาทต่อเดือน'
    },{
        name: 'นักกายภาพบำบัด',
        image: '/images/services/shutterstock_93224191.jpg',
        href: '',
        beginPrice: 'อัตราค่าบริการเริ่มต้นที่ 1,500 บาทต่อครั้ง'
    },{
        name: 'ปรับปรุง สร้างบ้านเพื่อผู้สูงอายุ ผู้ป่วย',
        image: '/images/services/shutterstock_103863410.jpg',
        href: '',
        beginPrice: ''
    }])
</script>


<style>
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
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