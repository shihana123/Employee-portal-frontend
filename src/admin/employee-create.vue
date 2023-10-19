<script setup>
import EmployeeCreateForm from '@/views/pages/form-layouts/Employee/EmployeeCreate.vue';
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
            <EmployeeCreateForm />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
