import QButton from './index.vue'

export default {
  title: 'QButton',
  component: QButton
}

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QButton },
  template: `
    <div>
      <h6> Default Button </h6>
      <hr />
      <QButton v-bind="$props"> Default Button </QButton>
    </div>
  `
})
export const Primary = Template.bind({})
Primary.args = {
  type: 'button',
  variant: 'primary',
  isLoading: false,
}