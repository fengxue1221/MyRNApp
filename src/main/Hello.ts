import React from 'react';
import {View} from 'react-native';

export interface Props{
    name:string,
    enthusiasmLevel?:number//可选属性
    onIncrement?:()=>void
    onDecrement?:()=>void
}

interface State{
    enthusiasmLevel:number
}

export class Hello extends React.Component<Props,State>{
    constructor(props: Props){
        super(props)

        if ((props.enthusiasmLevel||0)<=0){

        }

    }
}