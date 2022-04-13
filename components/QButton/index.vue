<template>
  <button :type="type" :class="classes" @click="$emit('click')">
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
      default: ''
    },
    variant: {
      type: String,
      default: 'primary'
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      classes: 'q-btn'
    }
  },
  watch: {
    variant: {
      handler(newData) {
        if (newData) {
          this.classes = `q-btn q-btn--${newData}`
        }
      },
      immediate: true
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