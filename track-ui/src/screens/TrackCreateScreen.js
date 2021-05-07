import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { requestForegroundPermissionsAsync } from 'expo-location' // ask user to track their's location or not
import Map from '../components/Map'



const TrackCreateScreen = () => {

    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            await requestForegroundPermissionsAsync()
        } catch (err) {
            setErr(err)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen