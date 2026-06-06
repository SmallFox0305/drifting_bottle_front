<script setup>
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js';
import PickDialog from './components/PickDialog.vue';
import DropDialog from './components/DropDialog.vue';
import { pick } from './api/DriftingBottle';

const pickDialog = ref(null)
const dropDialog = ref(null)

const pickMsg = ref()

const pickup = async () => {
  const { texts } = await pick()
  pickMsg.value = texts
  pickDialog.value.showModal()
}

const closePickup = () => {
  pickDialog.value.close()
}

const drop = () => {
  dropDialog.value.showModal()
}

const closeDrop = () => {
  dropDialog.value.close()
}
</script>

<template>
  <div class="drifting-bottle">
    <main class="drifting-bottle__main"></main>
    <footer class="drifting-bottle__footer">
      <button class="drifting-bottle__footer--button" @click.prevent="pickup">捡一个</button>
      <button class="drifting-bottle__footer--button" @click.prevent="drop">扔一个</button>
    </footer>
    <dialog class="drifting-bottle__dialog" ref="pickDialog">
      <PickDialog :texts="pickMsg"></PickDialog>
      <button class="drifting-bottle__dialog--close" @click.prevent="closePickup">
        <SvgIcon type="mdi" :path="mdiClose" size="2.4rem"></SvgIcon>
      </button>
    </dialog>
    <dialog class="drifting-bottle__dialog" ref="dropDialog">
      <DropDialog @drop-success="closeDrop"></DropDialog>
      <button class="drifting-bottle__dialog--close" @click.prevent="closeDrop">
        <SvgIcon type="mdi" :path="mdiClose" size="2.4rem"></SvgIcon>
      </button>
    </dialog>
  </div>
</template>

<style scoped lang="scss">
$color-1: #f1f8e9;
$color-2: #dcedc8;
$color-3: #c5e1a5;
$color-4: #aed581;
$color-5: #9ccc65;
$color-6: #8bc34a;
$color-7: #7cb342;
$color-8: #689f38;
$color-9: #558b2f;
$color-10: #33691e;

.drifting-bottle {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__main {
    width: 100%;
    height: 100%;
    background: url('@/assets/imgs/bgc.png') no-repeat;
    background-size: cover;
    background-position: center center;
  }

  &__footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    gap: 1rem;
    width: 60%;
    bottom: 0;

    &--button {
      cursor: pointer;
      width: 12rem;
      height: 4rem;
      outline: none;
      border: none;
      border-radius: .4rem;
      background-color: $color-6;
      color: #fff;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 1.4rem 0;
      transition: all .2s;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 .2rem .3rem $color-7;
      }
    }
  }

  &__dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 50rem;
    border: none;
    border-radius: 1rem;
    backdrop-filter: blur(2rem);
    background-color: transparent;

    &--close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      border: none;
      outline: none;
      background-color: transparent;
      color: #fff;
    }
  }
}
</style>

<style>
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  overflow-y: hidden;
}
</style>