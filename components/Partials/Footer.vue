<template>
    <div class="py-4 relative bg-[var(--purple-color)]">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 gap-16 sm:gap-y-24 grid grid-cols-3 text-white">
            <div class="">
                <div class="text-3xl font-bold text-center mb-4 underline">PAMA WE CARE</div>
                <div class="px-4 italic text-lg">
                    บริษัท PaMa We care จำกัด ได้เล็งเห็นถึงความสำคัญดังกล่าว จึงได้ถือกำเนิดขึ้น โดยมุ่งหวังในการดูแลสุขภาพและพัฒนาคุณภาพชีวิตของผู้สูงอายุแบบครบวงจร ทั้งทางด้านร่างกาย จิตใจ และอารมณ์ จากที่ “บ้าน”ของท่าน โดยพันธกิจของ PaMa We care เน้นการตอบโจทย์การใช้ชีวิตของผู้สูงอายุอย่างเต็มประสิทธิภาพ 
                </div>
            </div>
            <div class="">
               <div class="text-3xl font-bold text-center mb-4 underline">บริการ</div>
               <div>
                    <ul>
                        <li v-for="(slide, idx) in services"
                        :key="idx">
                            <NuxtLink :to="`/services/${slide.name}`">{{ slide.name }}</NuxtLink>
                        </li>
                    </ul>
               </div>
            </div>
            <div class="">
               <div class="text-3xl font-bold text-center mb-4 underline">ติดต่อเรา</div>
               <div class="mb-4 px-8 text-center">บริษัท ป๊าม้า วีแคร์ จำกัด
                    88/184 ม. 1 ถ.สุขุมวิท ต.บางเมืองใหม่ อ.เมือง
                    จ.สมุทรปราการ 10270
                </div>
               <ul class="flex flex-col space-y-4 px-8">
                    <li>
                        <NuxtLink to="line:pamawecare" external  class="flex items-center space-x-4">
                            <UIcon   
                                name="i-fa6-brands:line"
                                dynamic 
                                class="w-8 h-8"
                            />
                            <div>pamawecare</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://www.facebook.com/pamawecare" external  class="flex items-center space-x-4" >
                            <UIcon   
                                name="ic:baseline-facebook"
                                dynamic 
                                class="w-9 h-9"
                            />
                            <div>PaMa We care</div>
                        </NuxtLink>
                    </li>
                    <li>
                         <NuxtLink to="tel:097-812-6666" class="flex items-center space-x-4" >
                            <UIcon   
                                name="ic:call"
                                dynamic 
                                class="w-9 h-9"
                            />
                            <div>097-812-6666</div>
                        </NuxtLink>
                        
                    </li>
               </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
 const services = ref([{
        name: 'พยาบาลวิชาชีพ (RN)',
        image: '/images/services/shutterstock_425987509.jpg',
        href: ''
    },{
        name: 'ผู้ช่วยพยาบาล (PN)',
        image: '/images/services/shutterstock_288591065.jpg',
        href: ''
    },{
        name: 'พนักงานช่วยการพยาบาล (NA)',
        image: '/images/services/hero-image.jpg',
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

<style scoped>

</style>