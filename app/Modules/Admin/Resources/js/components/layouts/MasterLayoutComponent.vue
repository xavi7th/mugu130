<template>

  <div>

      <admin-header  v-on:logout-admin="logoutAdmin()" v-bind="{total_earnings}"></admin-header>

      <admin-nav v-bind="{admin_details}"></admin-nav>

      <div id="dashboard">

        <slot name="content-section"></slot>

      </div>

      <admin-footer></admin-footer>

  </div>

</template>

<script>
  import AdminHeader from '../partials/AdminHeaderComponent'
  import AdminNav from '../partials/AdminNavComponent'
  import AdminFooter from '../partials/AdminFooterComponent'
  import apiRoutes from '../../config/endpoints'

  export default {
    name: 'MasterLayout',
    created(){
      this.getAdminDetails();
      this.getTotalEarnings();
    },
    data (){
      return {
        admin_details: {},
        total_earnings: 0
      }
    },
    components: {
      AdminHeader, AdminFooter, AdminNav
    },
    methods: {
      logoutAdmin(){
        apiRoutes.logoutAdmin();
      },
      getAdminDetails(){
        axios.post(apiRoutes.getAdminDetails).then(rsp => {
          this.admin_details = rsp.data.userdetails;
        },
        err => {
          apiRoutes.logoutAdmin('Could not retrieve user details. Logging you out.');
        });
      },
      getTotalEarnings(){
        axios.post(apiRoutes.getTotalEarnings).then(rsp => {
          this.total_earnings = rsp.data.total_earnings;
        },
        err => {
          apiRoutes.logoutAdmin('Could not retrieve user details. Logging you out.');
        });
      }
    }
  }
</script>
<style scoped>
  div#main-controller #dashboard{
    padding: 0px 0px 100px 0px;
  }
</style>
