<template>
    <div class="character-list">
        <div class="character-card" v-for="character in characters" :key="character.id">
            <img :src="character.image" :alt="character.name" class="character-image" />
            <div class="character-info">
                <h2>{{ character.name }}</h2>
                <p><strong>Status:</strong> {{ character.status }}</p>
                <p><strong>Espécie:</strong> {{ character.species }}</p>
                <p><strong>Origem:</strong> {{ character.origin.name }}</p>
                <p><strong>genero:</strong> {{ character.gender }}</p>
                
            </div>
                <button class="button-favorites" @click="toggleFavorite(character.id)">
                    {{ isFavorite(character.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos' }}
                </button>
        </div>
    </div>
</template>

<script>
    import { getCharacters } from "@/services/HttpService";

    export default {
        data() {
            return {
                characters: [],
                favorites: [],
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
            isFavorite(characterId) {
                return this.favorites.includes(characterId);
            },
            toggleFavorite(characterId) {
                if (this.isFavorite(characterId)) {
                    this.favorites = this.favorites.filter(id => id !== characterId);
                } else {
                    this.favorites.push(characterId);
                }
            },
        },
        
    };
</script>

<style scoped>
    .character-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
        max-width: 80em;
        margin: auto; 
        gap: 40px;
    }

    .character-card {
        background-color: #ebe6e6;
        border-radius: 10px;
        box-shadow: 0 5px 8px #2b9dac;
        overflow: hidden;
        text-align: center;
        width: 250px;
        transition: transform 0.4s ease-in-out;
    }

    .character-card:hover {
        transform: scale(1.08);
    }

    .character-image {
        width: 100%;
        height: auto;
        border-bottom: 2px solid #eee;
    }

    .character-info {
        padding: 15px;
        text-align: left;
    }

    .character-info h2 {
        font-size: 18px;
        margin: 10px 0;
        color: #0e6670;
    }

    .character-info p {
        font-size: 14px;
        margin: 5px 0;
        color: rgb(32, 32, 32);
    }

    .button-favorites{
        background-color: #222831;
        color: #0e6670;
        border: 10px;
        padding: 30px 50px;
        cursor: pointer;
        border-radius: 5px;
        width: 100%;
        height: 50px;
        font-size: 18px;
        text-align: ;
        transition: .5s;

    }

    .button-favorites:hover {
    background-color: #131d2c;
    }

</style>
