<template lang="html">
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
           <!--    Hover Rows  -->
          <div class="panel panel-default">
            <div class="panel-heading">
                {{ details.prev_details.acc_name }}'s Transcations
                <a href="#" @click="$emit('switch-component', {data:details.prev_details, comp:'ViewDetails'})" role="button" class="btn btn-xs btn-danger pull-right"><i class="glyphicon glyphicon-remove"></i></a>
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr class="default">
                      <th>Transaction Type</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <!-- <th>Status</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="trans in details.user_transactions" :class="{'text-danger text-uppercase': trans.trans_type == 'debit'}" >
                      <td>{{ trans.trans_type }}</td>
                      <td>{{ trans.description |truncate(80) }}</td>
                      <td> {{ trans.amount | currency }}</td>
                      <td> {{ trans.trans_date }}</td>
                      <!-- <td> {{ trans.status }}</td> -->
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  props: ['details'],
  created(){}
}
</script>

<style lang="css">
  td:last-child{
    white-space: nowrap;
  }
</style>
