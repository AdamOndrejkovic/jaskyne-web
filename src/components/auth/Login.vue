<template>
    <div class="login">
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
        <button @click="login"><span>Login</span></button>
    </form>
    </div>
</template>
<script lang="ts">
import api from '@/services/api'
import { LoginUser } from '@/types/api';
import { defineComponent } from 'vue'
import { useForm, Field, ErrorMessage, Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';
import router from '@/router';
import { useUserActions } from '@/store/user';

export default defineComponent({
    components: {Field, ErrorMessage},
    setup() {
        const { setUser } = useUserActions()
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

        const login = handleSubmit(async values => {
            const loginUser: LoginUser = {
                email: values.email,
                password: values.password,                
            }
            const user = await api.loginUser(loginUser)
            if(user != null){
                setUser(user)
                router.push(`/`); 
            }else {
                alert("Error occoured while logging in. Please try again")
            }
        })

        return {
            login,
        }
        
    },
})
</script>
<style scoped>
.login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.form-group {
    @apply flex flex-col py-4;
}

button {
    @apply w-full border-r-2 border-l-2 border-solid text-white hover:text-brand-500 hover:border-brand-500 mt-2;
}
</style>
