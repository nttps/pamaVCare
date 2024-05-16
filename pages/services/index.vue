<template>
    <div>
        <Hero :src="pageImage" :height="400">
            <div class="bg-white/70 w-full py-10 text-center">
                <h2 class="text-5xl font-extrabold tracking-tight text-[var(--purple-color)] dark:text-white sm:text-8xl">
                    บริการ
                </h2>
            </div>
        </Hero>
        <div class="max-w-screen-xl mx-auto text-center text-4xl mt-8 mb-8 font-bold">
            เลือกบริการเพื่อแสดงถึงความรัก และความห่วงใยที่คุณมีให้  <br />ผ่านบริการเหล่านี้ได้เลยคะ
        </div>
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 my-4 px-4">
            <div
                v-for="(slide, idx) in services"
                :key="idx"
            >
                <NuxtLink to="/services/20"  class="block">
                    <div class=" hover:border w-full"><NuxtImg placeholder loading="lazy" format="webp" :src="slide.image" fit="cover" quality="80" height="300" class="object-contain w-full h-[300px]"/></div>
                    <div class="text-2xl font-bold text-center mt-2">
                        {{ slide.name }}
                    </div>
                    <div class="text-xl text-center">{{ slide.beginPrice }}</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import pageImage from "~/assets/images/shutterstock_43193308.jpg";

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

<style lang="scss" scoped>

</style>