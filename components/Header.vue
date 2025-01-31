<script lang="ts" setup>
import { defineProps } from 'vue';
import { Package2, Menu, Search, CircleUser } from 'lucide-vue-next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Input } from './ui/input';
type option = {
  name: string;
  link: string;
};
defineProps<{
    options: Array<{
        name: string,
        link: string
    }>
    dropDownTrigger: boolean
}>();
</script>

<template>
  <header class="sticky top-0 flex h-16 items-center gap-4 bg-background px-4 md:px-6">
    <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Package2 class="h-6 w-6" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <!-- Use v-for to render navigation links -->
      <a v-for="option in options" :key="option.name" :href="option.link" class="text-muted-foreground hover:text-foreground">
        {{ option.name }}
      </a>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Acme Inc</span>
          </a>
          <!-- Use v-for in mobile menu -->
          <a v-for="option in options" :key="option.name" :href="option.link" class="hover:text-foreground">
            {{ option.name }}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
    <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form class="ml-auto flex-1 sm:flex-initial" v-if="dropDownTrigger">
        <div class="relative">
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search products..." class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
        </div>
      </form>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <!--trigger dropdown-->
          <Button variant="secondary" size="icon" class="rounded-full" v-show="dropDownTrigger">
            <CircleUser class="h-5 w-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>
