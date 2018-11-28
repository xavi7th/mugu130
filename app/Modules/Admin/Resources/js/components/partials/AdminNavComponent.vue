<template lang="html">
  <section id="u_details" class="">

    <div class="grid-container">

      <div class="grid-80  push-10 flex-center">
        <div class="ui compact menu">
          <a class="item" :href="routes.adminViewQuestions">
            <i class="tasks icon"></i>
            Questions
          </a>
          <a class="item" :href="routes.adminViewAdmins">
            <i class="user mdicon"></i>
            Admins
          </a>
          <a class="item" :href="routes.adminViewUsers">
            <i class="venus mars icon"></i>
            Users
          </a>
          <a class="item" :href="routes.adminViewEarnings">
            <i class="money bill alternate outline icon"></i>
            Earnings
          </a>
          <a class="item" :href="routes.adminViewGames">
            <i class="gamepad icon"></i>
            Games
          </a>
          <a class="item" :href="routes.adminViewTransactions">
            <i class="file alternate outline icon"></i>
            Transactions
          </a>
          <a class="item" :href="routes.adminViewMessages">
            <i class="folder open outline icon"></i>
            Messages
          </a>
          <router-link :to="{ name: 'admin.view-agents' }" class="item" active-class="active">
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

.header {
    color: white;
}
</style>
