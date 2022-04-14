<template>
  <div class="p-3">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <QButton type="submit" variant="primary" :is-loading="form.isLoading">Submit</QButton>
      <QButton type="reset" variant="danger">Reset</QButton>
    </b-form>
    <b-card class="my-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <QButton 
      type="button"
      variant="success"
      @click="onShowModal"
    >
      Show Modal
    </QButton>

    <QModal 
      v-model="modal"
      body-class="pb-0"
      footer-class="border-0"
    >
      <template #header>
        <section class="w-100 d-flex">
          Ini Header
        </section>
      </template>
      <template #body>
        <section class="w-100 text-center">
          <b-icon icon="exclamation-circle" variant="danger" font-scale="6" class="mb-3"></b-icon>
          <p><strong>Error!</strong></p>
        </section>
      </template>
      <template #footer>
        <section class="w-100 d-flex justify-content-center">
          <QButton
            variant="primary"
            @click="onCloseModal"
          >
            <strong>Close</strong>
          </QButton>
        </section>
      </template>
    </QModal>
  </div>
</template>

<script>
  import QButton from "@/components/QButton/index.vue"

  export default {
    name: 'IndexPage',
    components: { QButton },
    data() {
      return {
        modal: false,
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
          isLoading: false
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
      }
    },
    methods: {
      onShowModal() {
        this.modal = true
      },
      onCloseModal() {
        this.modal = false
      },
      onSubmit(event) {
        if (event) event.preventDefault()
        this.form.isLoading = true
        setTimeout(() => {
          this.form.isLoading = false
          this.onReset()
        }, 2000);
      },
      onReset(event) {
        if (event) event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
      }
    }
  }
</script>
