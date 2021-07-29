<template>
  <Teleport to="body">
    <transition name="dialog-fade">
      <div v-if="modelValue" class="painting-dialog-overlay" @click="onClickOverlay">
        <div class="painting-dialog-wrapper">
          <div class="painting-dialog">
            <header>
              <slot name="title" />
              <span @click="close" class="painting-dialog-close"></span>
            </header>
            <main>
              <slot name="content" />
            </main>
            <footer>
              <Button @click="cancel">Cancel</Button>
              <Button :loading="buttonLoading" theme="primary" @click="ok">Ok</Button>
            </footer>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import Button from '../../Button/src/index.vue'
export default {
  components: { Button },
  name: 'Dialog',
  emits: ['ok', 'cancel', 'update:modelValue'],
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    const buttonLoading = ref(false)
    const close = () => {
      ctx.emit('update:modelValue', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const ok = (e: MouseEvent) => {
      e.stopPropagation()
      if (props.loading) {
        buttonLoading.value = true
      } else {
        close()
      }
      ctx.emit('ok')
    }
    const cancel = () => {
      close()
      ctx.emit('cancel')
    }
    watch(
      () => props.modelValue,
      (newVal) => {
        if (!newVal) {
          buttonLoading.value = false
        }
      }
    )
    return {
      close,
      onClickOverlay,
      ok,
      cancel,
      buttonLoading,
    }
  },
}
</script>
