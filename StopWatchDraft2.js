import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';

export default class StopWatchDraft2 extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.timerWrapper}>
                        <Text style={styles.timer}>
                            00:00:00
                        </Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableHighlight style={styles.button}
                                        underlayColor='gray'
                                        onPress={this.handleStartPress}>
                            <Text>Start</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.button}
                                        underlayColor='gray'
                                        onPress={this.handleStartPress}>
                            <Text>Lap</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.lap}>
                        <Text style={styles.lapText}>Lap #2</Text>
                        <Text style={styles.lapText}>00:00:00</Text>
                    </View>
                    <View style={styles.lap}>
                        <Text style={styles.lapText}>Lap #1</Text>
                        <Text style={styles.lapText}>00:00:00</Text>
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
    header: {
        flex: 1
    },
    footer: {
        flex: 1
    },
    timerWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        padding: 10,
        marginTop: 10
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer: {
        fontSize: 60
    },
    lapText: {
        fontSize: 30
    }
});