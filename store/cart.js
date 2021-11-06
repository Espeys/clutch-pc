const calculateAmount = obj =>
    Object.values(obj).reduce(
        (acc, { quantity, price }) => acc + quantity * price,
        0
    );

export const state = () => ({
    total: 0,
    amount: 0,
    cartItems: [],
    loading: false,
    placeholderProducts: [
        {
            id: 1,
            inventory: 90,
            depot: 80,
            is_sale: true,
            price: 499,
            review: 124,
            sale_price: 299,
            ratingCount: 5,
            slug: 'ww',
            thumbnail: {
                id: 1,
                alternativeText: 'clutch-pc',
                url: '/img/products/clutch/clutch-earphone.jpg'
            },
            images: [
                {
                    id: 1,
                    alternativeText: 'clutch-pc',
                    url: '/img/products/clutch/clutch-earphone.jpg'
                }
            ],
            title: 'NV-11 Noise-cancelling Stereo Headset',
            updated_at: '2021-11-06 12:30',
            vendor: 'SM Valenzuela',
            created_at: '2021-11-06 12:30'
        },
        {
            id: 2,
            inventory: 160,
            depot: 155,
            is_sale: true,
            price: 699,
            review: 12,
            sale_price: 1299,
            ratingCount: 5,
            slug: 'ww',
            thumbnail: {
                id: 2,
                alternativeText: 'clutch-pc',
                url: '/img/products/clutch/clutch-keyboard.jpg'
            },
            images: [
                {
                    id: 2,
                    alternativeText: 'clutch-pc',
                    url: '/img/products/clutch/clutch-keyboard.jpg'
                }
            ],
            title: 'Astrum Mechanical Gaming Keyboard (Red)',
            updated_at: '2021-11-06 12:30',
            vendor: 'SM Valenzuela',
            created_at: '2021-11-06 12:30'
        },
        {
            id: 3,
            inventory: 10,
            depot: 2,
            is_sale: true,
            price: 549,
            review: 1,
            sale_price: 1099,
            ratingCount: 5,
            slug: 'ww',
            thumbnail: {
                id: 3,
                alternativeText: 'clutch-pc',
                url: '/img/products/clutch/clutch-monitor.jpg'
            },
            images: [
                {
                    id: 3,
                    alternativeText: 'clutch-pc',
                    url: '/img/products/clutch/clutch-monitor.jpg'
                }
            ],
            title: 'Generic 22-inch LED Monitor (1680p x 1080p resolution)',
            updated_at: '2021-11-06 12:30',
            vendor: 'SM Valenzuela',
            created_at: '2021-11-06 12:30'
        },
        {
            id: 4,
            inventory: 81,
            depot: 33,
            is_sale: true,
            price: 1499,
            review: 1,
            sale_price: 699,
            ratingCount: 5,
            slug: 'ww',
            thumbnail: {
                id: 4,
                alternativeText: 'clutch-pc',
                url: '/img/products/clutch/clutch-headphone.jpg'
            },
            images: [
                {
                    id: 4,
                    alternativeText: 'clutch-pc',
                    url: '/img/products/clutch/clutch-headphone.jpg'
                }
            ],
            title: 'AirBeats v2 Bluetooth Stereo Headset with Noise-cancelling',
            updated_at: '2021-11-06 12:30',
            vendor: 'SM Valenzuela',
            created_at: '2021-11-06 12:30'
        }
    ]
});

export const mutations = {
    initCart(state, payload) {
        state.cartItems = payload.cartItems;
        state.amount = payload.amount;
        state.total = payload.total;
    },

    setLoading(state, payload) {
        state.loading = payload;
    },

    addItem(state, payload) {
        console.log('addItem', payload);
        if (state.cartItems !== null) {
            let existItem = state.cartItems.find(
                product => product.id === payload.id
            );

            console.log(existItem);

            if (existItem) {
                existItem.quantity += payload.quantity;
            } else {
                state.cartItems.push(payload);
            }
            state.total++;
        } else {
            state.cartItems.push(payload);
            state.total = 1;
        }
        state.amount = calculateAmount(state.cartItems);
    },

    removeItem: (state, payload) => {
        const index = state.cartItems.findIndex(item => item.id === payload.id);
        state.total = state.total - payload.quantity;
        state.cartItems.splice(index, 1);
        state.amount = calculateAmount(state.cartItems);
        if (state.cartItems.length === 0) {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
        }
    },

    increaseItemQuantity(state, payload) {
        let selectedItem = state.cartItems.find(item => item.id === payload.id);
        if (selectedItem) {
            selectedItem.quantity++;
            state.total++;
            state.amount = calculateAmount(state.cartItems);
        }
    },

    decreaseItemQuantity(state, payload) {
        let selectedItem = state.cartItems.find(item => item.id === payload.id);
        if (selectedItem && selectedItem.quantity > 1) {
            selectedItem.quantity--;
            state.total--;
            state.amount = calculateAmount(state.cartItems);
        }
    },

    clearCart: state => {
        state.cartItems = [];
        state.amount = 0;
        state.total = 0;
    }
};

export const actions = {
    addProductToCart({ commit, state }, payload) {
        commit('addItem', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        console.log('cookie', cookieParams);

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    removeProductFromCart({ commit, state }, payload) {
        commit('removeItem', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    increaseCartItemQuantity({ commit, state }, payload) {
        commit('increaseItemQuantity', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    decreaseCartItemQuantity({ commit, state }, payload) {
        commit('decreaseItemQuantity', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    clearCart({ commit }) {
        commit('clearCart');
        const cookieParams = {
            total: 0,
            amount: 0,
            cartItems: []
        };
        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
