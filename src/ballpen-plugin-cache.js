import Localforage from 'localforage';

class BallpenPluginCache {
    static set(...args) {
        return Localforage.setItem(...args);
    };

    static get(...args) {
        return Localforage.getItem(...args);
    };

    static remove(...args) {
        return Localforage.remove(...args);
    };

    static length(...args) {
        return Localforage.length(...args);
    };

    static clear(...args) {
        return Localforage.clear(...args);
    };

    static key(...args) {
        return Localforage.key(...args);
    };

    static keys(...args) {
        return Localforage.keys(...args);
    };

    static iterate(...args) {
        return Localforage.iterate(...args);
    };

    static setDriver(...args) {
        return Localforage.setDriver(...args);
    };

    static config(...args) {
        return Localforage.config(...args);
    };

    static defineDriver(...args) {
        return Localforage.defineDriver(...args);
    };

    static driver(...args) {
        return Localforage.setDriver(...args);
    };

    static supports(...args) {
        return Localforage.supports(...args);
    };
}

export default BallpenPluginCache;
