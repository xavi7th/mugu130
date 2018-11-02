<template>

  <master-layout>

      <template slot="content-section">

        <agent-menu></agent-menu>

        <div class="grid-container">
          <div class="grid-100 flex-center stack small">
            <div class="ui segment compact left floated">
              <div class="ui horizontal statistic">
                  <div class="value">
                    {{ 'total' }}
                  </div>
                  <div class="label">
                    Agents
                  </div>
                </div>
            </div>
            <button class="ui orange button" ng-click="newQuestion()">New Agent</button>
            <div class="ui search flex-center" style="justify-content:flex-end">
              <div class="ui icon input">
                <input class="prompt" type="text" placeholder="Search..." ng-model="search">
                <i class="search icon"></i>
              </div>
              <div class="results"></div>
            </div>
            <br>
          </div>
        </div>

        <div class="grid-container">
          <div class="grid-100">

            <div class="ui red segment">
              <page-loading :size="60"></page-loading>
              <table class="ui  striped celled table">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Question</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>

                  <tr class="animate translate-in" ng-class="{'negative': transaction.trans_type == 'withdrawal'}">
                    <td>{{ 'q.id' }}</td>
                    <td><span style="cursor:pointer;" ng-click="previewQuestion(q)">{{ 'q.question | limitTo : 100' }}</span></td>
                    <td>{{ 'q.created_at | timeAgo' }}</td>
                    <td>
                      <div class="ui mini buttons">
                        <button class="ui orange button" ng-click="openModal(q)">Edit</button>
                        <div class="or"></div>
                        <button class="ui red button" ng-click="deleteQuestion(q)">Delete</button>
                      </div>
                    </td>
                  </tr>


                </tbody>
              </table>
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
    import apiRoutes from '../config/endpoints';

    export default {
        name: 'AdminManageAgents',
        components: {
            pageLoading: Loader,
            MasterLayout,
            AgentMenu
        },
        created(){

        },
        data() {
          return {
          };
        },
        computed: {

        },
        methods: {

        }
    }
</script>
<style>

</style>
