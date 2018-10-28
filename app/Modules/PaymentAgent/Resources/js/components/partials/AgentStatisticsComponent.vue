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
                    <i class="inbox icon" style="color: #03A9F4; text-shadow:1px 1px 2px #999;"></i><span style="color: #03A9F4; text-shadow:1px 1px 2px #999;" class="">2</span>
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
                    <i class="users icon"></i> 392
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
                    <i class="money bill alternate outline icon " style="color: red"></i>
                    <span style="color: red">6</span>
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
}
</script>

<style lang="scss">

  .ui.card{
    width: 100%;
  }

</style>
