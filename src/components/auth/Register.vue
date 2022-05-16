<template>
    <div>
        <h2>Register</h2>
    <form @submit.prevent>
        <div class="form-group">
          <label for="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage class="error" name="name" />
        </div>  
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
        <button @click="register">Register</button>
    </form>
    </div>
</template>
<script lang="ts">
import api from '@/services/api'
import { defineComponent } from 'vue'
import { useForm, Field, ErrorMessage, Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';
import { RegisterUser } from '@/types/api';

export default defineComponent({
    components: {Field, ErrorMessage},
    setup() {

        const schema = yup.object({
          name: yup.string().required(),  
          email: yup.string().required().email(),
          password: yup.string().required(),
        });

        const { values, handleSubmit, resetForm } = useForm<RegisterUser>({
            validationSchema: schema,
            initialValues: {
                name: '',
                email: '',
                password: '',
            }
        })


        const register = () => {
            //api.registerUser()
        }

        return {
            register,
        }
        
    },
})
</script>