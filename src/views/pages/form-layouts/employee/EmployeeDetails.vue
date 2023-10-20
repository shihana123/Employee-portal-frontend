

<template>
  <VRow>
  
    <VCol
      md="12"
      lg="12"
      cols="12"
    >
      <VCard>
        <VRow no-gutters>
          <VCol
            cols="12"
            sm="12"
            md="12"
            lg="12"
          >
            <VCardItem>
              <VCardTitle>{{ employee.firstname }} {{ employee.lastname }}</VCardTitle>
            </VCardItem>


            <VCardText>
              <VDivider />
            </VCardText>

            <VCardText class="d-flex justify-center">
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Department -- {{ employee.department.department }}</span>
                    </p>
                </div>
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Email -- {{ employee.user.email }}</span>
                    </p>
                </div>
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Gender -- {{ employee.gender }}</span>
                    </p>
                </div>
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Address -- {{ employee.address }}</span>
                    </p>
                </div>
            </VCardText>
            <VCardText class="d-flex justify-center">
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Designation -- {{ employee.designation }}</span>
                    </p>
                </div>
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Phone -- {{ employee.mobile_no }}</span>
                    </p>
                </div>
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Date of Birth -- {{ employee.dob }}</span>
                    </p>
                </div>
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Education -- {{ employee.education }}</span>
                    </p>
                </div>
            </VCardText>
            <VCardText class="d-flex justify-center">
                <div class="me-auto pe-4">
                    <p class="d-flex align-center mb-6">
                        <VIcon
                            color="primary"
                            icon="bx-lock-open"
                        />
                        <span class="ms-3">Date of Join -- {{ employee.joining_date }}</span>
                    </p>
                </div>
            </VCardText>
          </VCol>

          
        </VRow>

      </VCard>
    </VCol>

    
    

    
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;

}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
<script>

import axios from 'axios';


    export default {
        
        data() {
            return {
                employee: {}
            }
        },
        mounted() {
            this.employee_details();
        },
        methods: {
            employee_details()
            {
                const route = useRoute();
                const id = route.params.id;
                
                axios.get('/employees/'+id).then(response=>{
                    this.employee = response.data
                }).catch(error=>{


                    console.log(error)
                    this.employee = []
                })
            }
        }
    }
</script>
