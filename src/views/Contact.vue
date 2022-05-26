<template>
    <div class="py-2 flex contact-container">
      <div class="ml-4">
        <img src="/images/contact.jpg" alt="">
      </div>
      <div class="flex flex-col justify-center items-center mx-auto lg:w-1/2">
        <div class="contact">
          <h2>Contact us</h2>
        <form @submit.prevent :validation-schema="schema" >
          <div class="w-1/2 flex flex-col items-center justify-center">
            <div class="form-group">
          <label for="sender">Email</label>
          <Field type="text" name="sender" />
          <ErrorMessage class="error" name="sender" />
        </div>
           <div class="form-group">
          <label for="subject">Subject</label>
          <Field type="text" name="subject" />
          <ErrorMessage class="error" name="subject" />
        </div>
          </div>
          <div class="w-1/2 flex items-center">
<div class="form-group">
          <label for="message">Message</label>
          <Field type="text" name="message" as="textarea"/>
          <ErrorMessage class="error" name="message" />
        </div>
          </div>
        </form>
      <button @click="onSubmit"><img
          src="../../public/icons/send.png"
          class="h-8 w-8"
          alt="Send"
      /></button>
        </div>     
        <div class="social">
          <div class="flex gap-4 py-4 items-center justify-center">
            <h2>Follow us: </h2>
      <a href="mailto:someone@yoursite.com"
        ><img src="../../public/icons/gmail.png" class="h-8 w-8" alt="Gmail"
      /></a>
      <a
        href="https://www.facebook.com/menejznameslovenskejaskyne"
        target="_blank"
        ><img
          src="../../public/icons/facebook.png"
          class="h-8 w-8"
          alt="Facebook"
      /></a>
      <a
        href="https://www.instagram.com/menejznameslovenskejaskyne/?hl=en"
        target="_blank"
        ><img
          src="../../public/icons/instagram.png"
          class="h-8 w-8"
          alt="Instagram"
      /></a>
    </div>

        </div>   
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useForm, ErrorMessage, Field, Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';
import { useRoute, useRouter } from "vue-router";
import api from "@/services/api";

interface EmailForm {
  sender: string;
  subject: string;
  message: string;
}

export default defineComponent({
  components: {
    ErrorMessage,
    Field,
  },
  setup() {
    const route = useRoute;
    const router = useRouter();

    const { values, handleSubmit, resetForm } = useForm<EmailForm>({
      initialValues: {
        sender: '',
        subject: '',
        message: '',
      }
    })

     const schema = yup.object({
      sender: yup.string().required().email(),
      subject: yup.string().required(),
      message: yup.string().required(),
    });

    const onSubmit = handleSubmit(async values => {
      await api.sendMail({sender: values.sender, subject: values.subject, message: values.message})
      router.push(`/`);
    })

    return {
      schema, 
      onSubmit,
    };
  },
});
</script>

<style scoped>

.contact {
  @apply bg-gray-300 w-full py-4 px-8 rounded-t-lg mb-2;
}

form {
  @apply flex flex-row w-full gap-4 justify-center;
}
.form-group {
  @apply flex flex-col w-1/2 ml-4 my-2
}

img {
  max-height: 75vh;
}

h2 {
  font-size: 32px;
  font-family: "Permanent Marker", cursive;
}

textarea, input {
  @apply rounded;
}

textarea {
  min-height: 150px;
  max-height: 150px;
  min-width: 350px;
  max-width: 350px;
}

button {
  @apply w-full justify-center flex;
}

.error {
  @apply text-red-600
}

.social {
  @apply w-full bg-brand-500 py-4 px-8 rounded-b-lg text-white
}
</style>
