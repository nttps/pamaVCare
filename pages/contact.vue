<template>
    <div>

        <div class=" max-w-screen-md mx-auto my-16  text-[var(--purple-color)] text-4xl">

            <h2 class="text-3xl text-center mb-16 py-4 border-b-4 border-b-[var(--purple-color)] font-extrabold tracking-tight text-[var(--purple-color)] dark:text-white sm:text-6xl">
                ติดต่อเรา
            </h2>
            <div class="flex justify-between items-center lg:flex-1 gap-2  mb-12">
                <NuxtLink to="line:pamawecare" external class="text-center text-4xl">
                    <UIcon   
                        name="i-fa6-brands:line"
                        dynamic 
                        class="w-16 h-16"
                    />
                    <div class="mt-2">pamawecare</div>
                </NuxtLink>
                <NuxtLink to="https://www.facebook.com/pamawecare" external class="text-center text-4xl">
                    <UIcon   
                        name="i-fa6-brands:square-facebook"
                        dynamic 
                        class="w-16 h-16"
                    />
                    <div class="mt-2">PaMa We care</div>
                </NuxtLink>
                <NuxtLink to="tel:097-812-6666" class="text-center text-4xl">
                    <UIcon   
                        name="ic:call"
                        dynamic 
                        class="w-16 h-16"
                    />
                    <div class="mt-2">097-812-6666</div>
                </NuxtLink>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d242.36186765092788!2d100.66317514880875!3d13.609641335381983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM2JzM0LjgiTiAxMDDCsDM5JzQ4LjAiRQ!5e0!3m2!1sth!2sth!4v1715765301570!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="text-center font-bold pb-16 mt-4">
                บริษัท ป๊าม้า วีแคร์ จำกัด <br />
                88/184 ม. 1 ถ.สุขุมวิท ต.บางเมืองใหม่ อ.เมือง
                จ.สมุทรปราการ 10270
            </div>
           
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>