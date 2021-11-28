import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                { 
                    id: 'm1', 
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg",
                    title: 'A trip into the mountains',
                    description: 'It was a really nice trip'
                },
                {
                    id: 'm2',
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/640px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg",
                    title: 'Surfing the sea side',
                    description: 'Feeling the cool breeze'
                },
                {
                    id: 'm3',
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
                    title: 'Good eating',
                    description: 'Really tasty!'
                }
            ]
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return(memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            };
        }
    }
});

export default store;