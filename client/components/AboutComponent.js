import React, {Component} from 'react';
import {Text, FlatList} from "react-native";
import {Card, ListItem} from "react-native-elements";
import {ScrollView} from "react-native";
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

const RenderHistory = () => {
    return (
        <Card
            style={{margin: 10}}
            title="Our History"
        >
            <Text style={{marginBottom: 10}}>
                Started in 2010, Ristorante con Fusion
                quickly established itself as a culinary
                icon par excellence in Hong Kong. With its
                unique brand of world fusion cuisine that
                can be found nowhere else, it enjoys patronage
                from the A-list clientele in Hong Kong.
                Featuring four of the best three-star
                Michelin chefs in the world, you never
                know what will arrive on your plate the
                next time you visit us.
            </Text>
            <Text style={{marginBottom: 10}}>
                The restaurant traces its humble beginnings
                to The Frying Pan, a successful chain started
                by our CEO, Mr. Peter Pan, that featured for
                the first time the world's best cuisines in a pan.
            </Text>
        </Card>
    )
}


class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    };

    render() {

        const renderLeadersItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            )
        }

        return(
            <ScrollView>
                <RenderHistory/>
                <Card style={{margin: 10}}>
                    <FlatList
                        data={this.props.leaders.leaders}
                        renderItem={renderLeadersItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
                <Text />
            </ScrollView>
        )
    }

}

export default connect(mapStateToProps)(About);