import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export interface Props {
    name: string,
    enthusiasmLevel?: number//可选属性
    onIncrement?: () => void
    onDecrement?: () => void
}

interface State {
    enthusiasmLevel: number
}

export class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        if ((props.enthusiasmLevel || 0) <= 0) {//||或运算符：如果第一个运算子为true，返回第一个运算子的值，且不进行第二个求值，如果第一个运算子
            //布尔值为false，则返回第二个运算子求值
            throw new Error('you could be a little more enthusiastic, :D')
        }

        this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        }
    }

    onIncrement = () => this.setState({enthusiasmLevel: this.state.enthusiasmLevel + 1})
    onDecrement = () => this.setState({enthusiasmLevel: this.state.enthusiasmLevel - 1})
    getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!')

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.greeting}>
                    Hello {this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)}
                </Text>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        {/*accessibilityLabel用于给残障人士显示的文本（比如读屏应用可能会读取这一内容）*/}
                        <Button
                            title="-"
                            onPress={this.onDecrement}
                            accessibilityLabel="decrement"
                            color="red"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="+"
                            onPress={this.onIncrement}
                            accessibilityLabel="increment"
                            color="blue"
                        />
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold'
    }
})