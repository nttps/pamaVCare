<template>
    <div>
        <Hero :src="pageImage" :height="400">
            <div class="bg-white/70 w-full py-10 text-center">
                <h2 class="text-5xl font-extrabold tracking-tight text-[var(--purple-color)] dark:text-white sm:text-8xl">
                    บทความ
                </h2>
            </div>
        </Hero>
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 my-20 px-8">
            <div
                v-for="(slide, idx) in articles"
                :key="idx"
            >
                <NuxtLink to="/services/20"  class="block">
                    <div class=" hover:border w-full"><NuxtImg placeholder loading="lazy" format="webp" :src="slide.image" fit="cover" quality="80" height="300" class="object-contain w-full h-[300px]"/></div>
                    <div class="text-2xl text-center mt-2 px-16">
                        {{ slide.name }}
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import pageImage from "~/assets/images/shutterstock_43193308.jpg";
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
    }])
</script>

<style lang="scss" scoped>

</style>