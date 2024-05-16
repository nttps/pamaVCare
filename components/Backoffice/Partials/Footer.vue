<template>
    <div class="p-4">
        <div>โครงการพัฒนาแพลตฟอร์มกลางทางด้านข้อมูลเชิงพื้นที่ เพื่อการคาดการณ์และสนับสนุนการแจ้งเตือน </div> 
        <div>Version {{ config.public.version}}</div>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>

</style>
