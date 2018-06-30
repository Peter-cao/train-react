
export default {

    namespace: 'main',

    state: {
        selectedTab: 'main',
        hidden: false,
        fullScreen: true,
        carouselList: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 176,
    },

    subscriptions: {
        setup({ dispatch, history }) {
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({ type: 'save' });
        },
    },

    reducers: {
        changeTabBar(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
