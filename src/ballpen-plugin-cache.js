import Localforage from 'localforage';

class BallpenPluginCache {
	static init() {
        return {
            // Data API
            set: Localforage.setItem.bind(Localforage),
            get: Localforage.getItem.bind(Localforage),
            remove: Localforage.removeItem.bind(Localforage),
            length: Localforage.length.bind(Localforage),
            clear: Localforage.clear.bind(Localforage),
            key: Localforage.key.bind(Localforage),
            keys: Localforage.keys.bind(Localforage),
            iterate: Localforage.iterate.bind(Localforage),
            // Settings API
            setDriver: Localforage.setDriver.bind(Localforage),
            config: Localforage.config.bind(Localforage),
            // Custom Driver API
            defineDriver: Localforage.defineDriver.bind(Localforage),
            driver: Localforage.driver.bind(Localforage),
            supports: Localforage.supports.bind(Localforage)
        };
    };
}

export default BallpenPluginCache;
