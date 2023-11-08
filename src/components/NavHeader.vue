<script setup>

</script>

<template>
  <div class="heading">
    <RouterLink to="/" class="title">
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="32" height="32" />
      Terrarium Modding
    </RouterLink>
    <a href="https://discord.terrarium.earth" target="_blank" rel="noopener" class="discord">
      <font-awesome-icon :icon="['fab', 'discord']" />
      Discord
    </a>
  </div>
</template>

<style scoped lang="scss">
.heading {
  display: flex;
  place-items: center;
  justify-content: space-between;
  padding: 1rem 6rem;
  width: 100%;
  background-color: #254b3a;
}

.title {
  text-decoration: none;
  color: var(--color-heading);
  font-size: 1.25rem;
  font-weight: 700;
  transition: 0.4s;
  display: flex;
  place-items: center;
  gap: var(--gap-sm);
}

.logo {
  border-radius: 50%;
  transition: 0.4s;
}

.tabs {
  display: flex;
  place-items: center;
  gap: var(--gap-md);

  .tab {
    text-decoration: none;
    color: var(--color-heading);
    font-size: 1rem;
    font-weight: 700;
    transition: 0.4s;
  }
}

.discord {
  text-decoration: none;
  color: var(--color-heading);
  font-size: 1.25rem;
  font-weight: 700;
  transition: 0.4s;
  display: flex;
  place-items: center;
  gap: var(--gap-sm);
}
</style>