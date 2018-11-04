<template lang="html">
  <section id="u_details" class="">

    <div class="grid-container">

      <div class="grid-80  push-10 flex-center">
        <div class="ui compact menu inverted">
          <router-link :to="{ name: 'admin.view-agents' }" class="item red" active-class="active">
            <i class="users icon"></i>
            View Agents
          </router-link>
          <router-link :to="{ name: 'admin.create-agent' }" class="item red" active-class="active">
            <i class="user plus icon"></i>
            Create Agent
          </router-link>

        </div>
      </div>

    </div>

  </section>
</template>

<script>
import routes from '../../config/endpoints';

export default {
  name: 'AdminAgentsNav',
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
