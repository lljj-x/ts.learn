<template>
    <div class="box">
        {{ date }}
        <p>
            <button @click="onUpdate">更新时间</button>
        </p>
    </div>
</template>

<script>
// 啥也不是
export default {
    name: 'CompositionV2',
    data() {
        // methods
        this.onUpdate = () => {
            this.date = new Date();
        };

        // Life cycle
        this.$on('hook:created', () => {
            console.log('hook:created');
        });

        // watch
        setTimeout(() => {
            this.$watch('date', () => {
                debugger;
            });
        });

        // reactive
        return {
            date: new Date()
        };
    }
};
</script>

<style scoped>
.box {
    padding: 40px 10px;
    background: #efefef;
}
</style>
