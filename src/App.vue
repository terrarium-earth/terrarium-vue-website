<script setup>
import NavHeader from "@/components/NavHeader.vue";
import {ref} from "vue";
import ModCard from "@/components/ModCard.vue";
import Footer from "@/components/Footer.vue";

const mods = ref([
    {
        img: "https://imgur.com/f08lwOv.png",
        title: "Ad Astra",
        description: "A mod that adds a new dimension to Minecraft, the Moon!",
        links: [
            {
                url: "https://modrinth.com/mod/ad-astra",
                icon: "link",
            },
            {
                url: "http://github.com/terrarium-earth/Ad-Astra",
                icon: "github",
            },
        ],
    },
    {
        img: "https://cdn.modrinth.com/data/BAscRYKm/images/cbbeeca232f2632aef4ac4856f80c2e7566a4461.png",
        title: "Chipped",
        description: "A mod that adds a new dimension to Minecraft, the Moon!",
        links: [
            {
                url: "https://modrinth.com/mod/ad-astra",
                icon: "link",
            },
            {
                url: "http://github.com/terrarium-earth/Ad-Astra",
                icon: "github",
            },
        ],
    },
    {
        img: "https://media.forgecdn.net/avatars/676/448/638067467429210259.gif",
        title: "Handcrafted",
        description: "A mod that adds a new dimension to Minecraft, the Moon!",
        links: [
            {
                url: "https://modrinth.com/mod/ad-astra",
                icon: "link",
            },
            {
                url: "http://github.com/terrarium-earth/Ad-Astra",
                icon: "github",
            },
        ],
    },
    {
        img: "https://imgur.com/RjsDGGr.png",
        title: "Botarium",
        description: "A mod that adds a new dimension to Minecraft, the Moon!",
        links: [
            {
                url: "https://modrinth.com/mod/ad-astra",
                icon: "link",
            },
            {
                url: "http://github.com/terrarium-earth/Ad-Astra",
                icon: "github",
            },
        ],
    },
    {
        img: "https://imgur.com/mk9LgDb.png",
        title: "Argonauts",
        description: "A mod that adds a new dimension to Minecraft, the Moon!",
        links: [
            {
                url: "https://modrinth.com/mod/ad-astra",
                icon: "link",
            },
            {
                url: "http://github.com/terrarium-earth/Ad-Astra",
                icon: "github",
            },
        ],
    },
    {
        img: "https://imgur.com/h3QVdrl.png",
        title: "Cadmus",
        description: "A mod that adds a new dimension to Minecraft, the Moon!",
        links: [
            {
                url: "https://modrinth.com/mod/ad-astra",
                icon: "link",
            },
            {
                url: "http://github.com/terrarium-earth/Ad-Astra",
                icon: "github",
            },
        ],
    },
    {
        img: "https://imgur.com/6exUulN.png",
        title: "Heracles",
        description: "A mod that adds a new dimension to Minecraft, the Moon!",
        links: [
            {
                url: "https://modrinth.com/mod/ad-astra",
                icon: "link",
            },
            {
                url: "http://github.com/terrarium-earth/Ad-Astra",
                icon: "github",
            },
        ],
    },
    {
        img: "https://imgur.com/5afAJum.png",
        title: "Prometheus",
        description: "A mod that adds a new dimension to Minecraft, the Moon!",
        links: [
            {
                url: "https://modrinth.com/mod/ad-astra",
                icon: "link",
            },
            {
                url: "http://github.com/terrarium-earth/Ad-Astra",
                icon: "github",
            },
        ],
    },
])
</script>

<template>
    <NavHeader/>
    <header>
        <div class="greetings">
            <img alt="Vue logo" class="logo" src="./assets/logo-with-background.png" width="112" height="112"/>
            <h1 class="title">
                Terrarium <br/>
                Modding
            </h1>
            <h3 class="description">
                We're a passionate team of modders who love creating Minecraft mods for the latest <br/>
                versions of Minecraft, on both Fabric and Neoforge. We're the creators of mods like
                <a href="http://modrinth.com/mod/ad-astra" target="_blank"> Ad Astra, </a> <br/>
                <a href="http://modrinth.com/mod/ad-astra" target="_blank"> Chipped, </a>
                <a href="http://modrinth.com/mod/ad-astra" target="_blank"> Tempad, </a>
                and more!
                <br/>
            </h3>
            <div class="buttons">
                <a href="https://modrinth.com/user/Terrarium" target="_blank" rel="noopener">
                    <img alt="modrinth" height="75"
                         src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/modrinth_vector.svg">
                </a>
                <a href="https://discord.terrarium.earth" target="_blank" rel="noopener">
                    <img alt="discord-plural" height="75"
                         src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/social/discord-plural_vector.svg">
                </a>
            </div>
        </div>
    </header>
    <div class="mods">
        <h1>
            Making some of your favorite mods
        </h1>
        <div class="mod-grid">
            <ModCard v-for="mod in mods" :key="mod.title" :img="mod.img" :title="mod.title"
                     :description="mod.description" :links="mod.links"/>
        </div>
    </div>
    <Footer/>
</template>

<style lang="scss" scoped>
header {
    line-height: 1.5;
    background-image: url(./assets/background.jpg);
    background-size: cover;
    background-position: center;

    .greetings {
        display: grid;
        // logo title
        // description description
        // logo should be 125px
        grid-template-areas:
      "logo title"
      "description description"
      "buttons buttons";
        grid-template-columns: 125px 1fr;
        gap: var(--gap-md);

        .logo {
            grid-area: logo;
        }

        .title {
            grid-area: title;
            font-size: 3rem;
            justify-content: center;
            display: flex;
            flex-direction: column;
            font-weight: bolder;
            position: relative;
            line-height: 3.25rem;
            text-shadow: 0 0 1.5rem #000;
            color: var(--color-heading);
        }

        .description {
            grid-area: description;
            font-size: 1.5rem;
            text-shadow: 0 0 1.5rem #000;
            color: var(--color-heading);
            font-weight: 600;

            a {
                font-weight: 700;
                color: var(--color-heading);
                text-decoration: none;
                transition: 0.4s;
            }
        }

        .buttons {
            grid-area: buttons;
            display: flex;
            place-items: center;
            gap: var(--gap-sm);
        }

        @media (min-width: 1024px) {
            .greetings h1,
            .greetings h3 {
                text-align: left;
            }
        }
    }
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding: 15rem 6rem;
        width: 100%;
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        font-size: 2rem;
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}

.mods {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem;
    color: var(--color-text);

    h1 {
        font-size: 3rem;
        font-weight: 700;
        color: var(--color-heading);
        text-align: center;
        margin-bottom: 6rem;
    }

    .mod-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--gap-md);
    }
}
</style>

<style lang="scss">
a,
.green {
    text-decoration: none;
    color: var(--color-heading);
    transition: 0.4s;
}

a:hover, .green:hover {
    filter: brightness(1.2);
}

a:active, .green:active {
    filter: brightness(1.5);
}
</style>
