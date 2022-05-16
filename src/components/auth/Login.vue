<template>
    <div>
        <h2>Login</h2>
    <form @submit.prevent>
        <div class="form-group">
          <label for="email">Email</label>
          <Field type="text" name="email" />
          <ErrorMessage class="error" name="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage class="error" name="password" />
        </div>        
        <button @click="login">Login</button>
    </form>
    </div>
</template>
<script lang="ts">
import api from '@/services/api'
import { LoginUser } from '@/types/api';
import { defineComponent } from 'vue'
import { useForm, Field, ErrorMessage, Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

export default defineComponent({
    components: {Field, ErrorMessage},
    setup() {

        const schema = yup.object({
          email: yup.string().required().email(),
          password: yup.string().required(),
        });

        const { values, handleSubmit, resetForm } = useForm<LoginUser>({
            validationSchema: schema,
            initialValues: {
                email: '',
                password: '',
            }
        })

        const login = handleSubmit(values => {
            console.log(values)
        })

        return {
            login,
        }
        
    },
})
</script>
