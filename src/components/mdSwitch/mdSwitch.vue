<template>
  <div class="md-switch" :class="classes">
    <div class="md-switch-container" @click="toggle($event)">
      <div class="md-switch-thumb" :style="styles" v-md-ink-ripple="disabled">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value">
        <button :type="type" class="md-switch-holder"></button>
      </div>
    </div>

    <label :for="id || name" class="md-switch-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdSwitch.scss"></style>

<script>
  const checkedPosition = 75;
  const initialPosition = '-1px';

  export default {
    props: {
      name: String,
      value: Boolean,
      id: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'button'
      }
    },
    data() {
      return {
        leftPos: initialPosition,
        checked: this.value
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': Boolean(this.value),
          'md-disabled': this.disabled
        };
      },
      styles() {
        return {
          transform: `translate3D(${this.leftPos}, -50%, 0)`
        };
      }
    },
    watch: {
      checked() {
        this.setPosition();
      },
      value(value) {
        this.changeState(value);
      }
    },
    methods: {
      setPosition() {
        this.leftPos = this.checked ? checkedPosition + '%' : initialPosition;
      },
      changeState(checked, $event) {
        this.checked = checked;
        this.$emit('change', this.checked, $event);
        this.$emit('input', this.checked, $event);
      },
      toggle($event) {
        if (!this.disabled) {
          this.changeState(!this.checked, $event);
        }
      }
    },
    mounted() {
      this.$nextTick(this.setPosition);
    }
  };
</script>
