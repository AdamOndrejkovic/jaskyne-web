<template>
  <Modal>
    <template #title>
      <div class="text-center text-xl">
        <h2>Add new cave</h2>
      </div>
    </template>
    <template #body>
        <form @submit.prevent>
           <div class="form-group">
          <label for="title">Title</label>
          <Field type="text" name="title"/>
          <ErrorMessage name="title" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <Field id="description" type="text" name="description" as="textarea"/>
          <ErrorMessage name="description" />
        </div>
        <div class="form-group">
          <label for="region">Region</label>
          <Field name="region" as="select">
            <option value="Bratislavský">Bratislavský kraj</option>
            <option value="Trnavský">Trnavský kraj</option>
            <option value="Nitriansky">Nitriansky kraj</option>
            <option value="Trenčiansky">Trenčiansky kraj</option>
            <option value="Žilinský">Žilinský kraj</option>
            <option value="Banskobystrický">Banskobystrický kraj</option>
            <option value="Prešovský">Prešovský kraj</option>
            <option value="Košický">Košický kraj</option>  
          </Field>
          <ErrorMessage name="region" />
        </div>
        <div class="form-group">
          <label for="location">Location</label>
          <Field type="text" name="location" />
          <ErrorMessage name="location" />
        </div>
        <div class="form-group">
          <label for="difficulty">Difficulty</label>
          <Field name="difficulty" as="select">
              <option value="Ľahká">Ľahká</option>
              <option value="Stredne náročná">Stredne náročná</option>  
              <option value="Náročná">Náročná</option>  
          </Field>
          <ErrorMessage name="difficulty" />
        </div>
        <div class="form-group">
          <label for="duration">Duration</label>
          <Field type="text" name="duration" />
          <ErrorMessage name="duration" />
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <Field type="text" name="image" />
          <ErrorMessage name="image" />
        </div>
      </form>
    </template>
    <template #footer>
      <div class="flex flex-row items-center gap-3 justify-center my-2">
          <button @click="$emit('close')" class="bg-red-600 text-white px-4 py-2 rounded">Close</button>
          <button @click="onSubmit" class="bg-brand-500 text-white px-5 py-2 rounded">Add</button>
        </div>
    </template>
  </Modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from "./Modal.vue";
import { useForm, Field, ErrorMessage, Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';
import api from "@/services/api";
import { Cave } from "@/types/types";
import { DifficultyEnum, RegionEnum } from "@/types/models";

interface AddForm {
  title: string;
  description: string;
  region: string;
  location: string;
  difficulty: string;
  duration: string;
  image: string;
}

export default defineComponent({
  components: {
    Modal,
    Field,
    ErrorMessage,
  },
  props: {
    region: {
      type: String,
      default: "Bratislavský"
    }
  },
  setup() {
      const schema = yup.object({
          title: yup.string().required(),
          description: yup.string().required(),
          region: yup.string().required(),
          location: yup.string().required(),
          difficulty: yup.string().required(),
          duration: yup.string().required(),
          image: yup.string().required(),
      });

    const { values, handleSubmit, resetForm } = useForm<AddForm>({
      validationSchema: schema,
      initialValues: {
        title: '',
        description: '',
        region: '',
        location: '',
        difficulty: '',
        duration: '',
        image: '',
      }
    })

    const onSubmit = handleSubmit(values => {
      if(values){
        const cave: Cave = {
          _id: '',
          title: values.title,
          description: values.description,
          region: values.region as RegionEnum,  
          location: values.location,  
          difficulty: values.difficulty as DifficultyEnum,
          duration: values.duration,
          image: values.image
        }

        console.log(values)
        
      }
      return
    })

    return {
      onSubmit,
      schema,
    }

  },
});
</script>

<style scoped>
h2, h3 {
  font-family: "Permanent Marker", cursive;
}

form {
  margin: 5px auto;
  width: max-content;
}

.form-group {
  @apply flex flex-col my-2 items-center
}

.form-group input, textarea, select {
  @apply bg-gray-200 my-1;
  width: 200px;
}

.form-group textarea {
  min-height: 150px;
}
</style>
