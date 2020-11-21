import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'About'
    }

    renderPartnerItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
            />
        );
    };

    render() {

        const { navigate } = this.props.navigation;


        return (
            <ScrollView>
                <Card title="Mission">
                    <Text>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</Text>
                </Card>
                <Card title="Community Partners">
                    <FlatList
                        data={this.state.campsites}
                        renderItem={this.renderPartnerItem}
                        keyExtractor={item => item.id.toString()}
                    />  
                </Card>
            </ScrollView>
            )
    }
}
export default About;
