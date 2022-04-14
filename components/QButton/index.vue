<template>
  <button
    :type="type"
    :class="classes"
    @click="$emit('click')"
    :disabled="isLoading || (!isLoading && isDisabled)"
  > 
    <template v-if="isLoading">
      <b-spinner small></b-spinner>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>
<script>
export default {
  name: 'QButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'primary'
    },
    isBlocked: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      classes: 'q-btn',
      styles: '',
    }
  },
  watch: {
    variant: {
      handler(newValue) {
        if (newValue) {
          const variants = [
            {
              name: 'primary'
            },
            {
              name: 'secondary'
            },
            {
              name: 'success'
            },
            {
              name: 'danger'
            },
            {
              name: 'warning'
            },
            {
              name: 'info'
            },
            {
              name: 'light'
            },
            {
              name: 'dark'
            },
          ]
          const classNameArray = this.classes.split(" ")
          variants.forEach((variant) => {
            const result = classNameArray.find((item) => item !== `q-btn--${variant.name}`)
            this.classes = `${result} q-btn--${newValue}`
          })
        }
      },
      immediate: true
    },
    isBlocked: {
      handler(newValue) {
        if (newValue) {
          this.classes = `${this.classes} q-btn--blocked`
        } else {
          this.onButtonBlockedRemove()
        }
      },
      immediate: true
    },
    isLoading: {
      handler(newValue) {
        if (newValue) {
          this.classes = `${this.classes} q-btn--disabled`
        } else {
          this.onButtonDisabledRemove()
        }
      },
      immediate: true
    },
    isDisabled: {
      handler(newValue) {
        if (newValue) {
          this.classes = `${this.classes} q-btn--disabled`
        } else {
          this.onButtonDisabledRemove()
        }
      },
      immediate: true
    },
  },
  methods: {
    getClassName(value) {
      let result = ''
      if (value) {
        result = value
      } else {
        result = this.className
      }
      return result;
    },
    onButtonDisabledRemove() {
      const classNameArray = this.classes.split(" ")
      const isButtonDisabled = classNameArray.find((item) => item === 'q-btn--disabled')
      if (isButtonDisabled) {
        const result = classNameArray.filter((item) => item !== 'q-btn--disabled')
        const classNameString = result.join(" ");
        this.classes = classNameString
      }
    },
    onButtonBlockedRemove() {
      const classNameArray = this.classes.split(" ")
      const isButtonBlocked = classNameArray.find((item) => item === 'q-btn--blocked')
      if (isButtonBlocked) {
        const result = classNameArray.filter((item) => item !== 'q-btn--blocked')
        const classNameString = result.join(" ");
        this.classes = classNameString
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #0d6efd;
$secondary: #6c757d;
$success: #198754;
$danger: #dc3545;
$warning: #ffc107;
$info: #0dcaf0;
$light: #f8f9fa;
$dark: #212529;

.q-btn {
  background-color: $primary;
  color: #fff;
  width: fit-content;
  margin: 0px;
  padding: 5px 10px;
  border-radius: 0.5em;
  border: unset;

  &--primary {
    background-color: $primary;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(13, 110, 253, 0.8);
    }
  }

  &--secondary {
    background-color: $secondary;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(108, 117, 125, 0.8);
    }
  }
  
  &--success {
    background-color: $success;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(23, 135, 84, 0.8);
    }
  }

  &--danger {
    background-color: $danger;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(220, 53, 69, 0.8);
    }
  }

  &--warning {
    background-color: $warning;
    color: $dark;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(255, 193, 7, 0.8);
    }
  }

  &--info {
    background-color: $info;
    color: $dark;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(13, 202, 240, 0.8);
    }
  }

  &--light {
    background-color: $light;
    color: $dark;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(248, 249, 250, 0.8);
    }
  }
  
  &--dark {
    background-color: $dark;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(33, 37, 41, 0.8);
    }
  }

  &--link {
    background-color: transparent;
    color: $primary;
    text-decoration: underline;
  }

  &--disabled {
    cursor: not-allowed !important;
    background-color: rgba(108, 117, 125, 0.4);
    color: #fff;

    &:hover {
      background-color: rgba(108, 117, 125, 0.4);
    }
  }
  
  &--blocked {
    width: 100%;
  }
}
</style>