<template lang="html">
  <div class="grid-container">
    <div class="grid-100 grid-parent">
      <div class="grid-33">
        <div class="ui people shape" name="ppleshape">
          <div class="sides">
            <div class="side active">
              <div class="ui card" style="width:100%;">

                <div class="ui statistic">
                  <div class="value">
                    <i class="inbox icon"></i>
                    <span>{{ agent_details.available_units | currency('₦') }}</span>
                  </div>
                  <div class="label">
                    Wallet Balance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-33">
        <div class="ui people shape" name="ppleshape">
          <div class="sides">
            <div class="side active">
              <div class="ui card" style="width:100%;">

                <div class="ui statistic">
                  <div class="value ">
                    <i class="users icon"></i> {{ agent_details.total_user_fundings }}
                  </div>
                  <div class="label">
                    Total User Fundings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-33">
        <div class="ui people shape" name="ppleshape">
          <div class="sides">
            <div class="side active">
              <div class="ui card" style="width:100%;">

                <div class="ui statistic">
                  <div class="value">
                    <i class="money bill alternate outline icon " style="color: green"></i>
                    <span style="color: green"> {{ agent_details.total_untransferred_earnings | currency('₦') }}</span>
                  </div>
                  <div class="label">
                    Profit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['agent_details']
}
</script>

<style lang="scss">

  .ui.card{
    width: 100%;
  }

  .inbox.icon{
    color: #03A9F4;
    text-shadow:1px 1px 2px #999;

    &+span{
      color: #03A9F4; text-shadow:1px 1px 2px #999;
    }
  }

</style>
