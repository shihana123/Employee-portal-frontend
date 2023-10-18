import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: () => import('../auth/login.vue') },
    { path: '/unauthorized', component: () => import('../components/ErrorHeader.vue') },

    //admin 
    { 
      path: '/dashboardAdmin', 
      name: 'AdminDashboard', 
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: '/dashboardAdmin',
          component: () => import('../admin/dashboard.vue'),
        },
      ],
      meta: { requiresAuth: true, roles: ['1'] }, 
    },
    { 
      path: '/employeeList', 
      name: 'Employee List', 
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: '/employeeList',
          component: () => import('../admin/tables.vue'),
        },
      ],
      meta: { requiresAuth: true, roles: ['1'] }, 
    },
    //employee
    { 
      path: '/dashboardEmployee', 
      name: 'employer-dashboard', 
      component: () => import('../layouts/default.vue'), 
      children: [
        {
          path: '/dashboardEmployee',
          component: () => import('../employee/dashboard.vue'),
        },
      ],
      meta: { requiresAuth: true, roles: ['2'] }, 
    }
  ],
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const userRole = getUserRoleFromToken() // Implement a function to get the user's role
  
  if (requiresAuth && !userRole) {
    next('/');
  } 
  else if (requiresAuth && !hasPermission(userRole, to.meta.roles)) {
    next('/unauthorized');
  } else {
    next();
  }
});

function hasPermission(userRole, role)
{
  const haspermission = role.includes(userRole) ? true : null;
  const token = localStorage.getItem('auth_token'); // Retrieve the authentication token from local storage
  
  if (token) {
    return haspermission;
  }
  
}
function getUserRoleFromToken() {

  // For example, if you're using JWT, you can decode it and return the 'role' claim
  const token = localStorage.getItem('auth_token'); // Retrieve the authentication token from local storage
  
  if (token) {
    const user_type = localStorage.getItem('user_type'); // Re
    
    return user_type;
  }
  return null; // Return null if no valid token is found
}
export default router
