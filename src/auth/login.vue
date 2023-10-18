
<script setup>
    import logo from '@images/logo.svg?raw';

    // const form = ref({
    //   email: '',
    //   password: '',
    //   remember: false,
    // })
    
    const isPasswordVisible = ref(false);

    
</script>
<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div
              class="d-flex text-primary"
              v-html="logo"
            />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          sneat
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Welcome  👋🏻
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm v-on:submit.prevent="handleLogin">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                placeholder="johndoe@email.com"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
             
              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
              >
                Login
              </VBtn>
            </VCol>

           

            
            
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<script>
  import axios from 'axios';
  
  export default {
      data() {
        return {
          form:{
            email: '',
            password: ''
            
          }
        }
      },
      methods:{
            handleLogin()
            {
              
              axios.post('/login', this.form).then(res => {
                       
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.authorisation.token;
                        localStorage.setItem('auth_token', res.data.authorisation.token);
                        localStorage.setItem('user_type', res.data.user.user_type);
                        if(res.data.user.user_type == 1){
                            
                            this.$router.push({ name: 'AdminDashboard' });
                        } 
                        else{
                            this.$router.push({ name: "employer-dashboard"});
                        }

                }).catch(err =>{    
                    
                    if(err.response.data.message)
                    {
                        this.errorMessage = err.response.data.message;
                    }
                    
                });
            }
        }
  }
</script>

