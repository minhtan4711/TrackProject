import { useState, useEffect } from 'react'
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)
    const [subscriber, setSubscriber] = useState(null)





    useEffect(() => {
        let subscriber
        const startWatching = async () => {
            try {
                await requestForegroundPermissionsAsync()
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation, // the accuracy
                    timeInterval: 1000, // update every 1 seconde
                    distanceInterval: 10 // update every 10 meters
                },
                    callback
                )
            } catch (err) {
                setErr(err)
            }
        }
        if (shouldTrack) {
            startWatching()
        } else {
            // stop watching
            subscriber = null
        }
        return () => {
            if (subscriber) {
                subscriber.remove()
            }
        }
    }, [shouldTrack, callback, subscriber])

    return [err]
}