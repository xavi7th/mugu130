<template>

  <master-layout>

      <template slot="content-section">

        <agent-menu></agent-menu>

          <div class="grid-container">

            <div class="grid-100">

              <div class="ui red segment">

                <transition name="slide-in"  mode="out-in">

                  <page-loading :size="60" v-if="loading"></page-loading>

                  <div class="ui purple segment" v-else-if="user_details" :key="1">

                    <form class="ui form" @submit.prevent="createAgent">

                      <h1 class="ui header">Make {{ user_details.firstname }} an Agent</h1>

                      <div class="ui divider"></div>

                      <div class="user-details ui positive message">
                        <h4>User's Name: {{ user_details.firstname }} {{ user_details.lastname }}</h4>
                        <h4>User's Email: {{ user_details.email }}</h4>
                      </div>

                      <button :class="['ui', 'blue', 'button', {'loading' : loading}]"
                      :disabled="loading" type="submit">Create Agent</button>

                    </form>

                  </div>

                  <div class="ui red segment" v-else>

                    <form class="ui form" @submit.prevent="findUser" :key="2">

                      <h1 class="ui header">Fund a User</h1>

                      <div class="ui divider"></div>

                      <div class="ui search" :class="{loading:loading}">

                        <div class="ui icon input">

                          <input class="prompt" type="text" placeholder="enter email address" name="user_email" autofocus
                                 v-model="user_email" v-validate="'email'">

                          <i class="search icon"></i>

                        </div>

                        <div class="ui negative message" v-if="errors.has('user_email')">

                          <i class="close icon"></i>

                          <div class="header">{{ errors.first('user_email') }}</div>

                        </div>

                      </div>

                      <button :class="['ui', 'blue', 'button', {'loading' : loading}]"
                              :disabled="loading || !user_email" type="submit">Search</button>

                    </form>

                  </div>

                </transition>

              </div>
            </div>
          </div>

      </template>

    </master-layout>
</template>
<script>
    import MasterLayout from './layouts/MasterLayoutComponent'
    import AgentMenu from './partials/AdminAgentsNavComponent'
    import Loader from './misc/LoaderComponent'
    import apiRoutes, { httpAdminApiRootUrl } from '../config/endpoints';

    export default {
        name: 'CreateAgent',
        components: {
            pageLoading: Loader,
            MasterLayout,
            AgentMenu
        },
        created(){
          // Customise the validator message to be displayed
      			const dict = {
      			  custom: {
      			    user_email: {
      			      email: 'The user email must be a valid email'
      			    }
      			  }
      			};
      			this.$validator.localize('en', dict);
        },
        data() {
          return {
            user_details: null,
            user_email: null,
            loading: false
          };
        },
        computed: {

        },
        methods: {
          checkFields() {
            return this.$validator.validate();
          },
          findUser (){

            this.checkFields().then(result => {
              if (result) {
                this.loading = true;
                axios.get(`${apiRoutes.adminFindUser}/${this.user_email}`)
                      .then( rsp =>{
                        if (rsp.status == 204) {
                          swal('Error', `User not found. Check email and try again`, 'error');
                        }
                        else{
                          this.user_details = rsp.data;
                        }
                        this.loading = false;
                      }, err =>{
                        swal('Error', `${err}`, 'error');
                        this.loading = false;
                      });
              }
            });
          },
          createAgent(){
            this.loading = true;
            this.checkFields().then(result => {
              if(result){
                swal({
                  title: "Are you sure?",
                  text: `${this.user_details.firstname} will be made an agent account. Make sure this account is a new account? `,
                  icon: "warning",
                  buttons: {
                     cancel: true,
                     confirm: {
                       text: "Proceed",
                       value: true,
                       visible: true,
                       className: "",
                       closeModal: false
                     }
                   },
                  dangerMode: true,
                })
                .then((willCreate) => {
                  if (willCreate) {
                    return axios.put(apiRoutes.adminCreateAgent, {user_id: this.user_details.id});
                  } else {
                    swal("Cancelled.", {
                      icon: "info",
                    });
                    throw null;
                  }
                })
                .then(rsp => {
                  if (!rsp.data.status) {
                    if (rsp.data.message) {
                      this.loading = false;
                      return swal(rsp.data.message, '', 'error');
                    }
                    else{
                      this.loading = false;;
                      return swal('Error', 'Something went wrong at the server.', 'error');
                    }
                  }
                  else {
                    swal({
                      title: "Success",
                      text: rsp.data.message,
                      icon: 'success',
                    });
                    this.$router.push({ name: 'admin.view-agents'});
                  }
                  this.loading = false;
                })
                .catch(err => {
                  this.loading = false;
                  console.log(err);
                  if (err) {
                    swal("Oh noes!", "The AJAX request failed!", "error");
                  }
                  else {
                    swal.stopLoading();
                    swal.close();
                  }
                });
              }
            });

          },
        }
    }
</script>
<style lang="scss" scoped>
  .ui{
    &.squared{
      border-radius:4px;
    }
    &.form{
      text-align: center;
    }
    .message{
      max-width: 35%;
      margin: 10px auto;
      @media(max-width:767px){
        max-width: none;
      }
    }
  }
  h1{
    font-family: alegreya sans;
    font-weight: 100;
    margin-bottom: 0px;
  }
</style>
