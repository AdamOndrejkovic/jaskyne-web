<template>
    <div class="register">
    <form @submit.prevent class="align-middle">
        <div class="flex flex-row gap-2">
                <div class="form-group">
            <label for="firstName">First name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage class="error" name="firstName" />
            </div>  
            <div class="form-group">
            <label for="lastName">Last name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage class="error" name="lastName" />
            </div> 
        </div> 
        <div class="flex flex-row gap-2">
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
        </div>  
        <div class="flex justify-center">
            <button @click="register">Register</button>
        </div>
    </form>
    </div>
</template>
<script lang="ts">
import api from '@/services/api'
import { defineComponent } from 'vue'
import { useForm, Field, ErrorMessage, Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';
import { RegisterUser } from '@/types/api';
import router from '@/router';
import { useUserActions } from '@/store/user';

export default defineComponent({
    components: {Field, ErrorMessage},
    setup() {
        const { setUser } = useUserActions()
        const schema = yup.object({
          firstName: yup.string().required(), 
          lastName: yup.string().required(),   
          email: yup.string().required().email(),
          password: yup.string().required(),
        });

        const { values, handleSubmit, resetForm } = useForm<RegisterUser>({
            validationSchema: schema,
            initialValues: {
                lastName: '',
                firstName: '',
                email: '',
                password: '',
            }
        })


        const register = async () => {
            const registerUser: RegisterUser = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
            } 
            const user = await api.registerUser(registerUser)  
            if(user != null){
                setUser(user)
                 router.push(`/`); 
            }else {
                alert("Error occoured while logging in. Please try again")
            }    
        }

        return {
            register,
        }
        
    },
})
</script>
<style scoped>
.register {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.form-group {
    @apply flex flex-col py-4;
}

button {
    @apply w-1/2 border-r-2 border-l-2 border-solid text-white hover:text-brand-500 hover:border-brand-500 mt-2;
}
</style>