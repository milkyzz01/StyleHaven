<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { useCounterStore } from '~/store/useCounter';

const counter = useCounterStore()

</script>

<template>
    <h2>{{ counter.count }}</h2>
    <h1>signup page</h1>
    <Button class="" @click="counter.increment">Increment</Button>
</template>