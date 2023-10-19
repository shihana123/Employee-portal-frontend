<template>
    <VForm v-on:submit.prevent="createEmployee">
        <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
      <VRow>
        <!-- 👉 First Name -->
        <VCol 
        cols="12"
          md="6"
        >
          <VTextField
            v-model="form.firstname"
            label="First Name"
            placeholder="John"
          />
        </VCol>
  
        <VCol 
        cols="12"
          md="6"
        >
          <VTextField
            v-model="form.lastname"
            label="Last Name"
            placeholder="Doe"
          />
        </VCol>
        
        <VCol 
        cols="12"
          md="6"
        >
          <VSelect
            v-model="form.gender"
            label="Gender"
            placeholder="Gender"
            :items="['Female', 'Male']"
          />
        </VCol>
        <VCol 
        cols="12"
          md="6"
        >
          <VTextField
            v-model="form.mobile_no"
            label="Mobile Number"
            placeholder="Mobile Number"
          />
        </VCol>
  
        <VCol 
        cols="12"
          md="6"
        >
        <VTextField
                  v-model="form.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
        </VCol>
  
        <VCol 
        cols="12"
          md="6"
        >
          <VTextField
            v-model="form.designation"
            label="Designation"
            placeholder="Designation"
          />
        </VCol>
  
        <VCol 
        cols="12"
          md="6"
        >
          <VSelect
          v-model="form.department_id"
          :items="[1, 2, 3, 4, 5]"
          label="Department"
          placeholder="Department"
          />
        </VCol>
  
        <VCol 
        cols="12"
          md="6"
        >
          <VTextField
            v-model="form.email"
            label="Email"
            placeholder="Email"
          />
        </VCol>
  
        <VCol 
        cols="12"
          md="12"
        >
          <VTextarea
            v-model="form.address"
            label="Address"
            placeholder="Address"
          />
        </VCol>
  
        <VCol 
        cols="12"
          md="6"
        >
          <VTextField
            v-model="form.dob"
            label="Date of Birth"
            placeholder="Date of Birth"
            type="date"
          />
        </VCol>
  
        <VCol 
        cols="12"
          md="6"
        >
          <VTextField
            v-model="form.education"
            label="Education"
            placeholder="Education"
          />
        </VCol>
  
        <VCol
          cols="12"
          class="d-flex gap-4"
        >
          <VBtn type="submit">
            Submit
          </VBtn>
  
          <VBtn
            type="reset"
            color="secondary"
            variant="tonal"
          >
            Reset
          </VBtn>
        </VCol>
      </VRow>
    </VForm>
  </template>

<script>
 import axios from 'axios';
export default {
  data() {
    return {
        errorMessage: '',
        form:{
            firstname: '',
            lastname: '',
            gender: '',
            mobile_no: '',
            password: '',
            designation: '',
            department_id: '',
            email: '',
            address: '',
            dob: '',
            education: ''
        },
      
      options: [],
    };
  },
  
  methods:{
    createEmployee()
            {
                axios.post('/employees', this.form).then(res => {
                    this.$router.push({ name: 'Employee List' });

               }).catch(err =>{    
                   
                   if(err.response.data.message)
                   {
                       this.errorMessage = err.response.data.message;
                       console.log(this.errorMessage);
                   }
                   
               });
            }
        }
};
</script>
