<template>
  <b-modal 
    v-model="vmodel"
    :centered="centered"
    :content-class="contentClass"
    :header-class="headerClass"
    :body-class="bodyClass"
    :footer-class="footerClass"
    :hide-header="hideHeader"
    :hide-footer="hideFooter"
    :scrollable="scrollable"
    :no-close-on-backdrop="noCloseOnBackdrop"
    :no-close-on-esc="noCloseOnEsc"
  >
    <template #modal-header>
      <slot name="header"></slot>
    </template>
    <template #default>
      <slot name="body"></slot>
    </template>
    <template #modal-footer>
      <slot name="footer"></slot>
    </template>
  </b-modal>
</template>
<script>
export default {
  name: 'QModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: true
    },
    contentClass: {
      type: String,
      default: "rounded-lg"
    },
    headerClass: {
      type: String,
      default: ""
    },
    bodyClass: {
      type: String,
      default: ""
    },
    footerClass: {
      type: String,
      default: "border-0"
    },
    hideHeader: {
      type: Boolean,
      default: true
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    noCloseOnBackdrop: {
      type: Boolean,
      default: true
    },
    noCloseOnEsc: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {}
  },
  computed: {
    vmodel: {
      get() {
        return this.value 
      },
      set(value) {
        this.$emit('input', value) 
      },
    },
  },
  watch: {},
  methods: {}
}
</script>
