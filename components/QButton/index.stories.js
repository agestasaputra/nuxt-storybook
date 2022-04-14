import QButton from './index.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'QButton',
  component: QButton,
  parameters: {
    docs: {
      description: {
        component: 'QButton is Custom button for Qontak UI Component',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
  },
}

const DefaultTemplate = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QButton },
  template: `
    <div>
      <h6> Default Button </h6>
      <hr />
      <QButton v-bind="$props" @click="onButtonClick"> Default </QButton>
    </div>
  `,
  methods: { 
    onButtonClick: action('onclick') 
  }
});
export const Default = DefaultTemplate.bind({})
Default.args = {
  type: "button",
  variant: "primary",
  isBlocked: false,
  isLoading: false,
  isDisabled: false,
}

export const Variant = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QButton },
  methods: {},
  template: `
    <div>
      <h6> Default Button </h6>
      <hr />
      <div class="mb-4">
        <QButton
          type="button"
          variant="primary"
        >
          Primary
        </Qbutton>
        <QButton
          type="button"
          variant="secondary"
        >
          Secondary
        </Qbutton>
        <QButton
          type="button"
          variant="success"
        >
          Success
        </Qbutton>
        <QButton
          type="button"
          variant="danger"
        >
          Danger
        </Qbutton>
        <QButton
          type="button"
          variant="warning"
        >
          Warning
        </Qbutton>
        <QButton
          type="button"
          variant="info"
        >
          Info
        </Qbutton>
        <QButton
          type="button"
          variant="light"
        >
          Light
        </Qbutton>
        <QButton
          type="button"
          variant="dark"
        >
          Dark
        </Qbutton>
      </div>
      
      <h6> Blocked Button </h6>
      <hr />
      <div class="mb-4">
        <QButton
          type="button"
          class="mb-2"
          isBlocked
          variant="primary"
        >
          Primary
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isBlocked
          variant="secondary"
        >
          Secondary
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isBlocked
          variant="success"
        >
          Success
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isBlocked
          variant="danger"
        >
          Danger
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isBlocked
          variant="warning"
        >
          Warning
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isBlocked
          variant="info"
        >
          Info
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isBlocked
          variant="light"
        >
          Light
        </Qbutton>
        <QButton
          type="button"
          class="mt-2"
          isBlocked
          variant="dark"
        >
          Dark
        </Qbutton>
      </div>
    </div>
  `
});

export const Loading = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QButton },
  methods: {},
  template: `
    <div>
      <h6> Default Button </h6>
      <hr />
      <div class="mb-4">
        <QButton
          type="button"
          variant="primary"
          isLoading
        >
          Primary
        </Qbutton>
        <QButton
          type="button"
          variant="secondary"
          isLoading
        >
          Secondary
        </Qbutton>
        <QButton
          type="button"
          variant="success"
          isLoading
        >
          Success
        </Qbutton>
        <QButton
          type="button"
          variant="danger"
          isLoading
        >
          Danger
        </Qbutton>
        <QButton
          type="button"
          variant="warning"
          isLoading
        >
          Warning
        </Qbutton>
        <QButton
          type="button"
          variant="info"
          isLoading
        >
          Info
        </Qbutton>
        <QButton
          type="button"
          variant="light"
          isLoading
        >
          Light
        </Qbutton>
        <QButton
          type="button"
          variant="dark"
          isLoading
        >
          Dark
        </Qbutton>
      </div>
      
      <h6> Blocked Button </h6>
      <hr />
      <div class="mb-4">
        <QButton
          type="button"
          class="mb-2"
          isLoading
          isBlocked
          variant="primary"
        >
          Primary
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isLoading
          isBlocked
          variant="secondary"
        >
          Secondary
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isLoading
          isBlocked
          variant="success"
        >
          Success
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isLoading
          isBlocked
          variant="danger"
        >
          Danger
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isLoading
          isBlocked
          variant="warning"
        >
          Warning
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isLoading
          isBlocked
          variant="info"
        >
          Info
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isLoading
          isBlocked
          variant="light"
        >
          Light
        </Qbutton>
        <QButton
          type="button"
          class="mt-2"
          isLoading
          isBlocked
          variant="dark"
        >
          Dark
        </Qbutton>
      </div>
    </div>
  `
});

export const Disabled = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QButton },
  methods: {},
  template: `
    <div>
      <h6> Default Button </h6>
      <hr />
      <div class="mb-4">
        <QButton
          type="button"
          variant="primary"
          isDisabled
        >
          Primary
        </Qbutton>
        <QButton
          type="button"
          variant="secondary"
          isDisabled
        >
          Secondary
        </Qbutton>
        <QButton
          type="button"
          variant="success"
          isDisabled
        >
          Success
        </Qbutton>
        <QButton
          type="button"
          variant="danger"
          isDisabled
        >
          Danger
        </Qbutton>
        <QButton
          type="button"
          variant="warning"
          isDisabled
        >
          Warning
        </Qbutton>
        <QButton
          type="button"
          variant="info"
          isDisabled
        >
          Info
        </Qbutton>
        <QButton
          type="button"
          variant="light"
          isDisabled
        >
          Light
        </Qbutton>
        <QButton
          type="button"
          variant="dark"
          isDisabled
        >
          Dark
        </Qbutton>
      </div>
      
      <h6> Blocked Button </h6>
      <hr />
      <div class="mb-4">
        <QButton
          type="button"
          class="mb-2"
          isDisabled
          isBlocked
          variant="primary"
        >
          Primary
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isDisabled
          isBlocked
          variant="secondary"
        >
          Secondary
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isDisabled
          isBlocked
          variant="success"
        >
          Success
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isDisabled
          isBlocked
          variant="danger"
        >
          Danger
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isDisabled
          isBlocked
          variant="warning"
        >
          Warning
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isDisabled
          isBlocked
          variant="info"
        >
          Info
        </Qbutton>
        <QButton
          type="button"
          class="my-2"
          isDisabled
          isBlocked
          variant="light"
        >
          Light
        </Qbutton>
        <QButton
          type="button"
          class="mt-2"
          isDisabled
          isBlocked
          variant="dark"
        >
          Dark
        </Qbutton>
      </div>
    </div>
  `
});