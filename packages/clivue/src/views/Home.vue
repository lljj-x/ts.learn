<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <CompositionV2></CompositionV2>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import CompositionV2 from './CompositionV2.vue';

// @ is an alias to /src
@Component({
    components: {
        HelloWorld,
        CompositionV2
    },
})
export default class Home extends Vue {}
</script>
