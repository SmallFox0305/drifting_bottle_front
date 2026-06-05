<template>
    <div class="pick-dialog">
        <div class="pick-dialog__header">
            <h2 class="pick-dialog__header--title">发现了一个漂流瓶哦～</h2>
        </div>
        <div class="pick-dialog__body">
            <div class="pick-dialog__body--caption">漂流瓶留言:</div>
            <p class="pick-dialog__body--texts">{{ texts }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    texts: String
})
</script>

<style scoped lang="scss">
.pick-dialog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    padding: 2rem 0;
    color: #fff;

    &__header {
        text-align: center;

        &--title {
            font-size: 2.4rem;
        }
    }

    &__body {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 3rem;

        &--caption {
            font-size: 3rem;
            font-weight: bold;
        }

        &--texts {
            $fontSize: 1.8rem;
            flex: 1;
            font-size: $fontSize;
            overflow-y: auto;
            text-indent: $fontSize * 2;
        }
    }
}
</style>