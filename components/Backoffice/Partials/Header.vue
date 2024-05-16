<template>
    <div class="flex justify-between items-center py-2.5 px-4 shadow z-40 fixed w-full bg-white">
        <NuxtLink to="/" class="flex space-x-4">
            <img
                src="~assets/images/logo.png"
                alt="Avatar"
                size="lg"
                class="h-[50px]"
            />
            <div class="font-bold">
                <div>ระบบจัดการผู้ใช้งาน</div>
                <div class="text-amber-500">User Management</div>
            </div>
        </NuxtLink>

        <div>
            <UPopover mode="hover" :popper="{ offsetDistance: -15 }">
                <UAvatar
                    :alt="data.fullName"
                    size="lg"
                />
                <template #panel>
                        <div class="px-4">
                            <button 
                                @click="signOut({ callbackUrl: '/' })"
                                class="py-2 px-2 flex items-center space-x-4 border-l-8 border-transparent" 
                                exact-active-class="!border-amber-600" 
                                active-class="!border-amber-600"
                            >
                                <div>ออกจากระบบ</div>
                            </button>
                        </div>
                </template>
            </UPopover>
            
        </div>
    </div>
</template>

<script setup>
const { data, signOut } = useAuth()

</script>

<style lang="scss" scoped>

</style>