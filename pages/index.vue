<template>
    <div class="h-[90vh] flex justify-center items-start mt-20">
        <div class="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 container lg:gap-20">
        <div class="max-w-lg">
        <h1 class="text-4xl text-center md:text-left md:text-5xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg animate-pulse">STYLEHAVEN</h1>
        <p class="text-xs text-center md:text-left md:text-sm text-gray-600 max-w-2xl font-sans">
        Welcome to Style Haven – where elegance meets innovation. Discover our
        latest trends and timeless collections curated to redefine your style.
        </p>
        </div>
        <img src="../assets/landing-img.jpg" class="w-full md:flex max-w-sm h-auto rounded-full drop-shadow-md" alt="model">
       </div>
       <div class="custom-shape-divider-bottom-1737879043">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill bg-red-700"></path>
            </svg>
        </div>
    </div>
    <!-- About section -->
    <div class="mt-10 px-6 md:px-20 lg:px-40 text-center lg:text-left container">
            <h1 class="text-center text-4xl font-bold">About Us</h1>
            <p class="mt-4 text-gray-600 leading-relaxed">
        Welcome to <span class="font-semibold text-gray-800">Style Haven</span> – your ultimate destination for timeless elegance and modern fashion.  
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
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Activity, ArrowUpRight, CircleUser, CreditCard, DollarSign, Menu, Package2, Search, Users } from 'lucide-vue-next'
</script>

<style scoped>
.custom-shape-divider-bottom-1737879043 {
    width: 100%;
    position: absolute;
    bottom: 0;
}


</style>