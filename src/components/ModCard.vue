<script setup>

defineProps({
  img: String,
  title: String,
  description: String,
  links: Array
})
</script>

<template>
  <div class="card">
    <div class="image">
      <img :src="img" :alt="title"/>
      <div class="links">
        <a v-for="link in links" :href="link.url" :key="link.url" class="link">
          <font-awesome-icon :icon="link.icon" />
        </a>
      </div>
    </div>
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
  }

  .image {
    position: relative;

    img {
      width: 100%;
      height: 25rem;
      object-fit: contain;
      object-position: center;
      padding: 1rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
      border-radius: 0.5rem;
      background-color: var(--color-background-mute);
    }

    .links {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      place-items: center;
      justify-content: center;
      gap: var(--gap-sm);

      .link {
        text-decoration: none;
        color: var(--color-heading);
        font-size: 1.25rem;
        transition: 0.4s;
        background-color: var(--color-border);
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        place-items: center;
        display: flex;
        justify-content: center;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem 1rem 2rem;

    h2 {
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--color-heading);
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-text);
    }
  }
}
</style>