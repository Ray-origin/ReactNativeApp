import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';

export default class StopWatchDraft extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.timerWrapper}>
                        <Text>
                            00:00:00
                        </Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Text>Start</Text>
                        <Text>Lap</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.lap}>
                        <Text>Lap #2</Text>
                        <Text>00:00:00</Text>
                    </View>
                    <View style={styles.lap}>
                    <Text>Lap #1</Text>
                        <Text>00:00:00</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 40
    },
    timerWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
});