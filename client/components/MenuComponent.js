import React, {Component} from 'react'
import {FlatList} from "react-native";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import {Tile} from "react-native-elements";
import {Loading} from "./LoadingComponent";
import { ScrollView, Text, View } from 'react-native';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}

class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    };

    render() {

        const renderMenuItem = ({item, index}) => {
            return (
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('DishDetail', { dishId: item.id })}
                    imageSrc={{ uri: baseUrl + item.image}}
                />
            )
        }

        const {navigate} = this.props.navigation;

        if (this.props.dishes.isLoading) {
            return(
                <Loading />
            );
        } else if (this.props.dishes.errMess) {
            return(
                <View>
                    <Text>{props.dishes.errMess}</Text>
                </View>
            );
        } else {
            return (
                <FlatList
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            )
        }
    }
}

export default connect(mapStateToProps)(Menu);