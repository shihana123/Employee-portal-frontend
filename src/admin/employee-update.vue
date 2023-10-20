<script setup>
import EmployeeUpdateForm from '@/views/pages/form-layouts/employee/EmployeeUpdate.vue';
</script>

<template>
  <div>
    <VRow>
      <VCol
        cols="12"
        md="12"
      >
       
        <!-- 👉 Multiple Column -->
        <VCard title="Create Employee">
          <VCardText>
            <EmployeeUpdateForm />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
