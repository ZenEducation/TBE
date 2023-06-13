<template >
    <NavBarMain search="true"/>
    <div class="dark:bg-[#111] dark:text-white transition duration-300">
        <section
            class=" xl:min-h-screen bg-[url('@/assets/images/banner/2.png')] bg-cover bg-no-repeat bg-center overflow-hidden xl:pb-[130px]">
            <Index2TopContent />
        </section>
        <Index2Category />
        <Index2About />
        <Index2Course />
        <Index2Counter />
        <Index2Video />
        <Index2Achivement />
        <Index2Article />
        <FooterLight class="dark:text-black" />
    </div>
</template>