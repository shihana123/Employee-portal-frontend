

<template>
  <VTable
    height="250"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-uppercase">
          Employee Name
        </th>
        <th>
          Email
        </th>
        <th>
          Phone
        </th>
        <th>
          Designation
        </th>
        <th>
          Department
        </th>
        <th>
          Action
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="employees in employee"
        :key="employees.employee"
      >
        <td>
          {{ employee.firstname }}
        </td>
        <td class="text-center">
          {{ item.calories }}
        </td>
        <td class="text-center">
          {{ item.fat }}
        </td>
        <td class="text-center">
          {{ item.carbs }}
        </td>
        <td class="text-center">
          {{ item.protein }}
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
                console.log(response);
                this.employees = response.data
              }).catch(error=>{
                  console.log(error)
                  this.employees = []
              })
            }
            
        },
      
    
  }
</script>
