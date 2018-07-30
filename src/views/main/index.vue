<template>
  <main-layout>
    <ul slot="nav" class="navigation-links">
      <li v-for="item in routes" :key="item.path">
        <router-link :to="item.path">{{ item.path.replace('/', '') }}</router-link>
      </li>
    </ul>
    <article>
      <router-view />
    </article>
  </main-layout>
</template>

<script>
// 布局组件
import mainLayout from '@/layout/main-layout';

// 路由配置
import { routes } from '@/router';

export default {
  name: 'App',
  components: {
    mainLayout,
  },
  data () {
    return {
      routes: routes.filter(item => item.component),
    };
  },
};
</script>

<style>
a {
  color: #42b983;
}

.navigation-links {
  text-align: center;
  margin: 20px 0;
}

.navigation-links > li {
  display: inline-block;
  margin: 0 10px;
}

.navigation-links a {
  font-size: 20px;
  text-decoration: underline;
}
</style>
