<script setup>
import EmployeeListTable from '@/views/pages/form-layouts/employee/EmployeeList.vue';
</script>

<template>
  <VRow>
   

    <VCol cols="12">
      <VCard title="Employees">
        
        <VCardText>
          <VBtn
                color="primary"
                @click="$router.push('/createEmployee')"
              >
                <VIcon
                  icon="bx-cloud-upload"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">Create new Employee</span>
            </VBtn>
        </VCardText>
        <EmployeeListTable />
      </VCard>
    </VCol>
  </VRow>
</template>

<script>
</script>
