<template>
    <div class="footer">
        <div class="team-info">
            <div class="wordmark">
                <img alt="Terrarium Earth Logo" class="logo" src="../assets/logo-with-background.png"/>
                <h1 class="title">
                    Terrarium <br/>
                    Earth
                </h1>
            </div>
            <h5>
                Copyright © {{ new Date().getFullYear() }} Terrarium Earth. <br/>
                All Rights Reserved.
            </h5>
        </div>
        <div class="footer-links">
            <div>
                <h1 class="title">Resources</h1>
                <a href="https://github.terrarium.earth" target="_blank" rel="noopener">GitHub</a>
                <a href="https://modrinth.terrarium.earth" target="_blank" rel="noopener">Modrinth</a>
                <a href="https://blog.terrarium.earth" target="_blank" rel="noopener">Blog</a>
                <a href="https://docs.terrarium.earth" target="_blank" rel="noopener">Documentation</a>
            </div>
            <div>
                <h1 class="title">Socials</h1>
                <a href="https://discord.terrarium.earth" target="_blank" rel="noopener">Discord</a>
                <a href="https://twitter.terrarium.earth" target="_blank" rel="noopener">Twitter</a>
                <a href="https://youtube.terrarium.earth" target="_blank" rel="noopener">YouTube</a>
                <a href="https://instagram.terrarium.earth" target="_blank" rel="noopener">Instagram</a>
            </div>
            <div>
                <h1 class="title">Contact</h1>
                <a href="mailto:adrian@terrarium.earth">Email</a>
                <a href="https://discord.com/users/218557488142876683" target="_blank" rel="noopener">Discord</a>
                <a href="https://twitter.terrarium.earth" target="_blank" rel="noopener">Twitter</a>
                <a href="https://github.terrarium.earth" target="_blank" rel="noopener">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.logo {
    width: 7rem;
    aspect-ratio: 1/1;
}

.footer {
    width: 100%;

    background-color: var(--vt-c-black-soft);

    display: flex;
    justify-content: space-between;

    font-weight: 700;
    font-size: larger;

    padding: 2rem 10%;
}

.footer-links {
    display: flex;
    gap: 10rem;
}

.footer-links > div {
    display: flex;
    flex-direction: column;
}

.footer-links h1 {
    color: var(--branding-color);
    margin-bottom: 1rem;

    font-size: 1.5rem;
    letter-spacing: 0.01rem;
    font-weight: 900;

    text-transform: uppercase;
}

.footer-links a {
    text-align: right;
    margin-top: 0.075rem;
    margin-bottom: 0.075rem;
}

.footer-links a:hover {
    filter: brightness(0.75);
}

.team-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.wordmark {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.wordmark > h1 {
    font-size: 3rem;
    line-height: 3.25rem;
    font-weight: bolder;
}
</style>