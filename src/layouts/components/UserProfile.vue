<script setup>
import avatar1 from '@images/avatars/avatar-1.png';
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{ user_name }}
            </VListItemTitle>
            <VListItemSubtitle>{{ user_type }}</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-user"
                size="22"
              />
            </template>

            <VListItemTitle>Profile</VListItemTitle>
          </VListItem>

          
          
          

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem  @click="handleLogout">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="bx-log-out"
                size="22"
              />
            </template>

            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
<script>
import axios from 'axios';
    export default {
        data() {
            return {
              user_name: '',
              user_type: ''
            }
        },
        methods: {
            getUser(){
              
                axios.get('/user_details')
                     .then((response)=>{
                      //  this.users = response.data.users
                      
                      this.user_name = response.data.user.name;
                      this.user_type = (response.data.user.user_type == 1) ? 'Admin' : 'Employee';
                     })
            },
            handleLogout() {
              axios.post('/logout') // Replace '/api/logout' with the actual logout endpoint on your server
              .then(response => {
              
                if(response.status == 200)
                {
                  localStorage.removeItem('auth_token');
                  this.$router.push({ name: 'Home' });
                }
              })
              .catch(error => {
                // Handle any errors that occur during the logout request
                console.error('Logout error:', error);
              });
            }
        },
        created() {
            this.getUser()
        }
    }
</script> 
