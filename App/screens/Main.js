import React, { Component, } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    PermissionsAndroid,
    BackHandler,
} from 'react-native';

import MainTabNavigator from '../navigators/MainTabNavigator';
import PermissionManager from '../utils/PermissionManager';
import {updateState} from '../components/Student_BasicFlatList';

export default class Main extends Component {

    state = {
        first : true,
    }

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        if (Platform.OS === 'android' && Platform.Version >= 23) {
            PermissionManager.getPermissions(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
        }
    }

    goBack = async () =>{
        BackHandler.exitApp();
    }

    componentWillMount(){
        console.log("componentWillMount!!!!!!!!!!!!!!!!!!!!~~~~~~");
    }
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.goBack();
            return true;
        });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    componentDidUpdate(){
        console.log("Main.js componentDidUpdate")
        //if(!this.state.first)
            //updateState({ refresh : false });
        //else
            //this.setState({first : false});
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
        //if(!this.state.first)
           // updateState({ refresh : this.props.navigation.getParam('changed', false) });
        
    }

    render() {
        console.log("!@#!@#??? 랜더 함수가 불렸다!~!")
    
        return (
            <View style={styles.containers}>
                <MainTabNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
    },
});