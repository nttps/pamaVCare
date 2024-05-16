<template>
    <div>
        <nav>
            <ul>
                <li v-for="menu in navMenu" class="py-2">
                    <NuxtLink 
                        :to="menu.href" 
                        class="py-2 px-2 flex items-center space-x-4 border-l-8 border-transparent" 
                        exact-active-class="!border-amber-600" 
                        active-class="!border-amber-600"
                    >
                        <Icon 
                            name="i-ep:document-copy" 
                            size="25px" 
                        />
                        <div> {{ menu.title }}</div>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

    const navMenu = [{
        title: 'จัดการ User',
        href: '/settings/users'
    }, {
        title: 'จัดการ Group',
        href: '/settings/groups'
    }, {
        title: 'History',
        href: '/settings/history'
    }, {
        title: 'กลับไป Portal',
        href: '/'
    }]
</script>

<style lang="scss" scoped>



</style>