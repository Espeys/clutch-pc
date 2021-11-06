import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';

export const state = () => ({
    product: null,
    products: null,
    searchResults: null,
    cartProducts: null,
    wishlistItems: null,
    compareItems: null,
    brands: null,
    categories: null,
    total: 0,
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
    setProducts(state, payload) {
        state.products = payload;
    },

    setCartProducts(state, payload) {
        state.cartProducts = payload;
    },
    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },
    setCompareItems(state, payload) {
        state.compareItems = payload;
    },

    setProduct(state, payload) {
        state.product = payload;
    },

    setBrands(state, payload) {
        state.brands = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    },

    setTotal(state, payload) {
        state.total = payload;
    }
};

export const actions = {
    async getProducts({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getTotalRecords({ commit }, payload) {
        const reponse = await Repository.get(`${baseUrl}/products/count`)
            .then(response => {
                commit('setTotal', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsById({ commit }, payload) {
        const reponse = await Repository.get(`${baseUrl}/products/${payload}`)
            .then(response => {
                commit('setProduct', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductByKeyword({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCartProducts({ commit, rootState }, payload) {
        let cart = [];

        payload.forEach(id => {
            cart.push(
                rootState.cart.placeholderProducts.find(
                    product => product.id === id
                )
            );
        });

        commit('setCartProducts', cart);
    },

    async getWishlishtProducts({ commit, rootState }, payload) {
        let cart = [];

        payload.forEach(id => {
            cart.push(
                rootState.cart.placeholderProducts.find(
                    product => product.id === id
                )
            );
        });

        commit('setWishlistItems', cart);
    },

    async getCompareProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/products?${query}`)
            .then(response => {
                commit('setCompareItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductBrands({ commit }) {
        const reponse = await Repository.get(`${baseUrl}/brands`)
            .then(response => {
                commit('setBrands', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductCategories({ commit }) {
        const reponse = await Repository.get(`${baseUrl}/product-categories`)
            .then(response => {
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsByBrands({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then(response => {
                if (response.data) {
                    const brands = response.data;
                    let products = [];
                    brands.forEach(brand => {
                        brand.products.forEach(product => {
                            products.push(product);
                        });
                    });
                    commit('setProducts', products);
                    commit('setTotal', products.length);
                    return products;
                } else {
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getProductsByPriceRange({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
