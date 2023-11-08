<script setup>

</script>

<template>
    <div class="heading">
        <RouterLink to="/" class="title">
            <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="32" height="32"/>
            Terrarium Modding
        </RouterLink>
        <div class="nav-links">
            <a href="https://twitter.terrarium.earth" target="_blank" rel="noopener" class="nav-link">
                <font-awesome-icon :icon="['fab', 'twitter']"/>
                Twitter
            </a>
            <a href="https://github.terrarium.earth" target="_blank" rel="noopener" class="nav-link">
                <font-awesome-icon :icon="['fab', 'github']"/>
                Github
            </a>
            <a href="https://discord.terrarium.earth" target="_blank" rel="noopener" class="nav-link">
                <font-awesome-icon :icon="['fab', 'discord']"/>
                Discord
            </a>
        </div>
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

    cursor: pointer;
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

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--color-heading);
    font-size: 1.25rem;
    font-weight: 700;
    transition: 0.4s;
    display: flex;
    place-items: center;
    gap: var(--gap-sm);
}

.nav-link:hover {
    filter: brightness(0.7);
}
</style>