<template lang="html">
  <section id="u_details" class="">

    <div class="grid-container">

      <div class="grid-80  push-10 flex-center">
        <div class="ui compact menu inverted">
          <a class=" active red item" :href="routes.adminViewGames">
            <i class="gamepad icon"></i>
            Games
          </a>
          <a class="red item" :href="routes.adminViewTransactions">
            <i class="file alternate outline icon"></i>
            Transactions
          </a>
          <a class="red item" :href="routes.adminViewMessages">
            <i class="folder open outline icon"></i>
            Messages
          </a>
          <router-link :to="{ name: 'hhhhh' }" class="item">
            <i class="users icon"></i>
            Agents
          </router-link>

        </div>
      </div>

    </div>

  </section>
</template>

<script>
import routes from '../../config/endpoints';

export default {
  name: 'AdminNav',
  props: ['admin_details'],
  data() {
    return {
      routes
    };
  },
  methods: {
    setActive(num, comp) {
      this.isActive = num;
      this.$emit('go-to', {
        comp
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
    i {
        padding-right: 2px;
    }
}
#u_details{
  margin-bottom: 80px !important;
  background-color: transparent !important;
  border-bottom: none !important;
}
</style>
