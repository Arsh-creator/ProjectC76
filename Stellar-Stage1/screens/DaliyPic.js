import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DailyPic extends React.Component{
    render(){
        return(
            <View>
                <Text style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    Daily Pic!
                </Text>
            </View>
        );
    }
}