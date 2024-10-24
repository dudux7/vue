<template>
    <div class="character-list">
        <div class="character-card" v-for="character in characters" :key="character.id">
            <img :src="character.image" :alt="character.name" class="character-image" />
            <div class="character-info">
                <h2>{{ character.name }}</h2>
                <p><strong>Status:</strong> {{ character.status }}</p>
                <p><strong>Espécie:</strong> {{ character.species }}</p>
                <p><strong>Origem:</strong> {{ character.origin.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { getCharacters } from "@/services/HttpService";

    export default {
        data() {
            return {
                characters: [],
            };
        },
        created() {
            this.loadCharacters();
        },
        methods: {
            async loadCharacters() {
                try {
                    const response = await getCharacters();
                    this.characters = response.data.results;
                } catch (error) {
                    console.error("Erro ao buscar personagens:", error);
                }
            },
        },
    };
</script>

<style scoped>
    .character-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        padding: 20px;
    }

    .character-card {
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        text-align: center;
        width: 200px;
        transition: transform 0.2s ease-in-out;
    }

    .character-card:hover {
        transform: scale(1.05);
    }

    .character-image {
        width: 100%;
        height: auto;
        border-bottom: 2px solid #eee;
    }

    .character-info {
        padding: 15px;
    }

    .character-info h2 {
        font-size: 18px;
        margin: 10px 0;
        color: #333;
    }

    .character-info p {
        font-size: 14px;
        margin: 5px 0;
        color: #666;
    }
</style>
