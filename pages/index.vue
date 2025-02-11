<template>
    <div class="h-[100vh] tablet:h-[50vh] lg:h-[100vh] pt-20 container relative">
        <div class="h-auto w-auto xs:mt-0 lg:mt-0 items-center justify-center gap-10 flex flex-wrap md:flex-nowrap">
        <div>
        <h1 class="text-4xl text-center md:text-center lg:text-left md:text-5xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg animate-pulse"  v-motion 
        :initial="{ opacity: 0, x: -200 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 1000 } }">STYLEHAVEN</h1>
        <p v-motion class="text-xs dark:text-foreground text-center md:text-center lg:text-left md:text-sm text-gray-600 max-w-2xl font-sans"
        :initial="{ opacity: 0, x: -200 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 1000 } }">
        Welcome to Style Haven – where elegance meets innovation. Discover our
        latest trends and timeless collections curated to redefine your style.
        </p>
        </div>
        <div class="overflow-hidden">
        <img src="../assets/landing-img.jpg" v-motion 
        :initial="{ opacity: 0, x: 100 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 1000 } }"
         class="w-[100%] md:w-full max-w-sm rounded-full drop-shadow-md" alt="model">
       </div>   
    </div>
       <div class="custom-shape-divider-bottom-1738411565 dark:hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    <!-- About section -->
    <div class="p-10 md:pt-10 lg:pt-20 text-center lg:text-left container overflow-hidden">
            <h1 
             class="text-center text-4xl font-bold" v-motion
             :initial="{ opacity: 0, x: -100 }"
             :visible="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 300 } }">About Us</h1>
            <p class="mt-4 text-gray-600 dark:text-foreground leading-relaxed"
            v-motion
             :initial="{ opacity: 0, x: 100 }"
             :visible="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 300 } }">
        Welcome to <span class="font-semibold dark:text-foreground text-gray-800">Style Haven</span> – your ultimate destination for timeless elegance and modern fashion.  
        We believe that style is more than just clothing; it’s a reflection of personality, confidence, and creativity.  
        Our goal is to help you express yourself through meticulously curated collections that blend innovation with classic sophistication.
        <br><br>
        At Style Haven, we are passionate about bringing you the latest fashion trends while maintaining a commitment to quality and craftsmanship.  
        Every piece in our collection is thoughtfully designed to offer both comfort and style, ensuring that you look and feel your best in every moment.  
        Whether you're searching for everyday essentials, statement pieces, or fashion-forward trends, we have something for everyone.
        <br><br>
        Our journey is driven by a desire to empower individuals through fashion.  
        We embrace diversity and inclusivity, celebrating the uniqueness of every individual.  
        With a keen eye for detail and a deep appreciation for aesthetics, we strive to create an inspiring shopping experience that helps you discover your own personal style.
        <br><br>
        Join us at Style Haven and redefine the way you express yourself through fashion.  
        Step into a world where elegance meets innovation, and let your style tell your story.
    </p>
    </div>
    <!-- Collection types -->
    <div class="relative grid grid-cols-1 lg:grid-cols-3 w-full gap-5 px-10 py-40 md:p-40">
        <img src="../assets/formal.webp" class="w-[100%] h-[450px]" v-motion
             :initial="{ opacity: 0, y: 100 }"
             :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }" alt="formal">
        <img src="../assets/casual.webp" class="w-[100%] h-[450px]" v-motion
             :initial="{ opacity: 0, y: -100 }"
             :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }" alt="casual">
        <img src="../assets/streetwear.webp" class="w-[100%] h-[450px]" v-motion
             :initial="{ opacity: 0, y: 100 }"
             :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }" alt="street">
        <div class="custom-shape-divider-bottom-1737879043 dark:hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill bg-red-700"></path>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
*{
    overflow-y: hidden;
}

.custom-shape-divider-bottom-1737879043 {
    width: 100%;
    position: absolute;
    bottom: 0;
}

/* shape divider header */
.custom-shape-divider-bottom-1738411565 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    z-index: -1;
}

.custom-shape-divider-bottom-1738411565 svg {
    position: relative;
    display: block;
    width: calc(137% + 1.3px);
    height: 211px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1738411565 .shape-fill {
    fill: #292626;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-bottom-1738411565 svg {
        width: calc(198% + 1.3px);
        height: 212px;
    }
}
</style>