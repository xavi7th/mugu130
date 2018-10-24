<template lang="html">
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
           <!--    Hover Rows  -->
          <div class="panel panel-default">
            <div class="panel-heading">
                {{ details.prev_details.acc_name }}'s Transfer Requests
                <a href="#" @click="$emit('switch-component', {data:details.prev_details, comp:'ViewDetails'})" role="button" class="btn btn-xs btn-danger pull-right"><i class="glyphicon glyphicon-remove"></i></a>
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr class="default">
                      <tr class="default">
                        <th>Recipient</th>
                        <th>Bank Name</th>
                        <th>Amount</th>
                        <th>Payment Type</th>
                        <th>Country</th>
                        <th>Status</th>
                      </tr>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="trans in details.user_transfer_requests" :class="{'text-danger text-uppercase': trans.status == 'error'}" >
                      <td> {{ trans.acc_name }}</td>
                      <td> {{ trans.bank_name }}</td>
                      <td> {{ trans.amount | currency }}</td>
                      <td> {{ trans.payment_type }}</td>
                      <td> {{ trans.country }}</td>
                      <td> {{ trans.status }}</td>
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
