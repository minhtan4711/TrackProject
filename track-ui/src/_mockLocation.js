import * as Location from 'expo-location'
import { LocationAccuracy } from 'expo-location'


const tenMetersWithDegrees = 0.0001

const getLocation = increment => {
    // fake data altitude longitude timestamp
    return {
        timestamp: 10000000,
        coords: {
            speed: -1,
            heading: -1,
            accuracy: 65,
            altitudeAccuracy: 14.4260892868042,
            altitude: 8.108108758926392,
            longitude: 105.77823814530053 + increment * tenMetersWithDegrees,
            latitude: 105.77823814530053 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)