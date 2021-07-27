<template>
  <div>
    <div class="topNavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个面向学习者的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/suian-cmd/easy-ui">GitHub 源码</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>体验 Vue3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>基于 Markdown</h3>
          <p>文档采用 Markdown 语法编写</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  name: "Home.vue",
  components: {
    TopNav: TopNav
  }
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topNavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(60% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (max-width: 500px) {
      margin: 20px auto;
  }

  @media (min-width: 800px) {
    width: 800px;

    >ul {
      >li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }

  >ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: $color;
  padding: 140px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      width: 100px;
      padding: 8px 0;
      text-align: center;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

