<template>
    <Hero :src="pageImage" height="600px">
         <div class="bg-white/70 w-full py-10 text-center">
            <h2 class="text-5xl font-extrabold tracking-tight text-[var(--purple-color)] dark:text-white sm:text-8xl">
                พยาบาลวิชาชีพ (RN)
            </h2>
        </div>
    </Hero> 
    <div class="container mx-auto my-16 text-xl">
        <div class="flex mt-10 mb-20 items-center">
            <div class="w-1/3 text-5xl font-bold my-4">พยาบาลวิชาชีพ (RN)</div>
            <div class="w-2/3 text-3xl">
                พยาบาลวิชาชีพ (RN) คือ ผู้ที่สำเร็จการศึกษาระดับปริญญาตรี จากคณะพยาบาลศาสตร์ เป็นเวลา 4 ปี โดยก่อนจะปฏิบัติงานจะต้องผ่านการสอบขึ้นทะเบียนความรู้จากสภาการพยาบาลเสียก่อน ซึ่งพยาบาลถือเป็นบุคลากรทางการแพทย์ที่สำคัญในการทำหน้าที่ดูแล รักษา ฟื้นฟูสุขภาพของผู้ป่วย ให้คำแนะนำ  ช่วยผู้ป่วยปรับตัวเข้ากับสภาวะความเจ็บป่วย เป็นต้น 
            </div>
        </div>
       
        <HrLogo />

        <div class="text-5xl font-bold my-8 text-center">รูปแบบการให้บริการ</div>
        <ul class="max-w-screen-md  mx-auto text-3xl list-disc flex flex-col space-y-4">
            <li>เปลี่ยนสายให้อาหารทางจมูก อัตราค่าบริการ 1,500 บาทต่อครั้ง</li>
            <li>วันที่ท่านต้องการรับบริการ(ทำปฎิทิน เพื่อให้เลือกวัน และเวลา)</li>
            <li>วันที่ท่านต้องการรับบริการ(ทำปฎิทิน เพื่อให้เลือกวัน และเวลา)</li>
            <li>อัตราค่าบริการเริ่มต้นที่ 2,300 บาทต่อ 12 ชั่วโมง เจ้าหน้าที่จะทำการติดต่อกลับไปเพื่อขอรายละเอียดเพิ่มเติม </li>
        </ul>

        <div class="flex justify-center mt-10">
            <button class="bg-[var(--orange-color)] rounded-full px-8 py-2.5 text-white text-center">ติดต่อเรา</button>
        </div>
    </div>
   
</template>

<script setup>

    import pageImage from "~/assets/images/hero-image.jpg";

</script>

<style lang="scss" scoped>

</style>