<template>
    <form class="drop-dialog">
        <div class="drop-dialog__header">
            <h2 class="drop-dialog__header--title">扔出一个漂流瓶～</h2>
        </div>
        <div class="drop-dialog__body">
            <div class="drop-dialog__body--caption">请输入你的留言:</div>
            <textarea type="area" class="drop-dialog__body--input" placeholder="善语结善缘 恶语伤人心 请文明发言"
                v-model="dropMsg"></textarea>
        </div>
        <div class="drop-dialog__footer">
            <button type="reset" class="drop-dialog__footer--button">重置</button>
            <button type="submit" class="drop-dialog__footer--button" @click.prevent="drop">提交</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { drop as dropApi } from '@/api/DriftingBottle';

const dropMsg = ref("")

const drop = async () => {
    await dropApi({
        texts: dropMsg.value
    });
    dropMsg.value = ''
    emit('dropSuccess')
}

const emit = defineEmits(['dropSuccess'])
</script>

<style scoped lang="scss">
.drop-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
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
        width: 100%;
        min-height: 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 3rem;

        &--caption {
            font-size: 3rem;
            font-weight: bold;
        }

        &--input {
            flex: 1;
            border: 1px #fff solid;
            outline: none;
            background-color: transparent;
            border-radius: .8rem;
            font-size: 2rem;
            line-height: 2.2rem;
            color: #fff;

            &::placeholder {
                color: #d6d6d6;
            }
        }
    }

    &__footer {
        display: flex;
        width: 60%;
        justify-content: space-between;
        gap: 2rem;

        &--button {
            width: 10rem;
            font-size: 1.8rem;
            padding: .8rem 0;
            border-radius: .8rem;
            border: none;
            outline: none;
        }
    }
}
</style>
