

<template>
  <VTable
    height="250"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-center">
          Employee Id
        </th>
        <th class="text-center">
          Employee Name
        </th>
        <th class="text-center">
          Department
        </th>
        <th class="text-center">
          Role
        </th>
        
        <th class="text-center">
          Mobile
        </th>
        <th class="text-center">
          Email
        </th>
        <th class="text-center">
          Joining Date
        </th>
        <th class="text-center">
          Action
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="employee in employees" :key="employee.id">
        <td class="text-center">
          {{ employee.employee_id }}
        </td>
        <td class="text-center">
          {{ employee.firstname }}
        </td >
        <td class="text-center">
          {{ employee.department.department }}
        </td>
        <td class="text-center">
          {{ employee.designation }}
        </td>
        
        <td class="text-center">
          {{ employee.mobile_no }}
        </td>
        <td class="text-center">
          {{ employee.user.email }}
        </td>
        <td class="text-center">
          {{ employee.joining_date }}
        </td>
        <td class="text-center">
         <!-- view -->
          <IconBtn
          class="ms-n3 d-lg-none"
          :to=" {name: 'Employee Details', params: { id: employee.id }}"
        >
          <VIcon icon="bx-bullseye" />
        </IconBtn>
          <!-- edit -->
        <IconBtn
          class="ms-n3 d-lg-none"
          :to=" {name: 'Employee Update', params: { id: employee.id }}"
        >
          <VIcon icon="bx-edit-alt" />
        </IconBtn>
        <!-- delete -->
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="deleteEmployee(employee.id)"
        >
          <VIcon icon="bx-trash" />
        </IconBtn>

        </td>
       
      </tr>
    </tbody>
  </VTable>
</template>
<script>
import axios from 'axios';
  export default {
    name:"employees",
    data(){
        return {
          employees:[]
        }
    },
    mounted(){
        this.getEmployees()
    },
    methods:{
      getEmployees()
            {
              axios.get('/employees').then(response=>{
                
                this.employees = response.data
              }).catch(error=>{
                  console.log(error)
                  this.employees = []
              })
            },
      deleteEmployee(id)
          {
            axios.delete(`/employees/${id}`).then(response=>{
              this.$router.push({ name: 'Employee List' });
              }).catch(error=>{
                  console.log(error)
                  this.employees = []
              })
          }
            
        },
      
    
  }
</script>
