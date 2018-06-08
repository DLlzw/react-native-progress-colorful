import React,{Component} from 'react'
import {
View,
    TouchableWithoutFeedback,
Animated} from "react-native";
import Style from '../../../style/Style'
import LinearGradient from 'react-native-linear-gradient'
import Global from "../../../global/Global";
import PropTypes from 'prop-types'

export default class CrowdProgress extends Component{
    static  propTypes={
        pWidth:PropTypes.number,
        pHeitht:PropTypes.number,
        progress:PropTypes.number
    }
    constructor (props){
        super(props)
        this.state={
            moveWith:new Animated.Value(0),
        }
    }
    componentDidMount(){
        this.anmation()
    }
    render() {
        return (
            <View >
                <View style={{height:this.props.pHeitht,width:this.props.pWidth,borderRadius:10,backgroundColor:Global.color2}}/>
                <Animated.View style={{ position:'absolute',overflow:'hidden',width:this.state.moveWith,borderRadius:10}}>
                    <LinearGradient
                        start={{x:0.25}}
                        end={{x:1}}
                        colors={['#06bebd', '#b7ce63',]} style={{height:this.props.pHeitht,width:this.props.pWidth,borderRadius:10}}>
                    </LinearGradient>
                </Animated.View>
            </View>

        );
    }
    anmation=()=>{
        Animated.timing(
            this.state.moveWith,
            {
                toValue: this.props.progress/100*this.props.pWidth,
                duration: 2000,
            }
        ).start()
    }
}