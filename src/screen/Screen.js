/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList, TouchableOpacity, ActivityIndicator, Image, Linking
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { getdata } from '../redux/action';
import DateTimePicker from '@react-native-community/datetimepicker';
const Screen = () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(1);
    const [dataSource, setDataSource] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false)
    const { data, error, loading } = useSelector(state => state.datareducer)
    //console.log(data[0])
    useEffect(() => {
        // fetchResults();
        dispatch(getdata(offset, date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(), date1.getFullYear() + '-' + date1.getMonth() + '-' + date1.getDate(), 0))
        //getData()
    },

        [data]);
    const getData1 = () => {
        setOffset(offset + 1)
        dispatch(getdata(offset, date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(), date1.getFullYear() + '-' + date1.getMonth() + '-' + date1.getDate(), 0))

    }
    const ItemView = ({ item }) => {
        // console.log(item)
        return (
            <SafeAreaView>
                <View style={{ backgroundColor: '#fff', padding: 10, elevation: 3, borderRadius: 10, marginVertical: 5, width: '90%', alignSelf: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginTop: '2%' }}>
                        <Text style={{ fontSize: 16, color: '#00E0E0' }}>-{item.author}</Text>
                    </View>
                    <Image style={{ height: 100, width: '100%', marginTop: '2%' }} source={{ uri: item.urlToImage }} />
                    <View style={{ marginTop: '2%' }}>
                        <Text style={{ fontSize: 12, color: 'gray' }}>{item.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#578AE4' }} onPress={() => Linking.openURL(item.url)}>More detail</Text>
                        <Text style={{ color: '#42BA26' }} >{item.publishedAt}</Text>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
    const renderFooter = () => {
        return (

            <View style={styles.footer}>
                <View
                    style={styles.loadMoreBtn}>

                    {loading ? (
                        <ActivityIndicator

                            color="black"
                            style={{ alignSelf: 'center' }} />
                    ) : null}
                </View>
            </View>
        );
    };
    const [date, setDate] = useState(new Date());
    const [date1, setDate1] = useState(new Date());
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const onChange = (event, selectedDate) => {
        // console.log(selectedDate)
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate);
        dispatch(getdata(offset, date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(), date1.getFullYear() + '-' + date1.getMonth() + '-' + date1.getDate(), 1))
    };
    const onChange1 = (event, selectedDate) => {
        //console.log(selectedDate)
        const currentDate = selectedDate || date;
        setShow1(false)
        setDate1(currentDate);
        dispatch(getdata(offset, date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(), date1.getFullYear() + '-' + date1.getMonth() + '-' + date1.getDate(), 1))

    };
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={{ flexDirection: 'row', margin: '5%', justifyContent: 'space-between' }}>
                <View>
                    <TouchableOpacity onPress={() => setShow(true)} style={{ backgroundColor: 'lightblue', height: 30, width: 100, borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>{date ? date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() : 'From'}</Text>

                    </TouchableOpacity>


                    <View>{show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}

                        />
                    )}
                    </View>

                </View>

                <View style={{}}>
                    <Text >To</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setShow1(true)} style={{ backgroundColor: 'lightblue', height: 30, width: 100, borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>{date1 ? date1.getDate() + '-' + date1.getMonth() + '-' + date1.getFullYear() : 'To'}</Text>
                    </TouchableOpacity>
                    <View>{show1 && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onChange1}
                            minimumDate={date}

                        />
                    )}
                    </View>
                </View>
            </View>
            <View >
                {
                    loading1 ? <View><ActivityIndicator style={{}} color="black" size={'large'} /></View> :
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ItemView}
                            //  initialNumToRender={5}
                            onEndReachedThreshold={0.4}
                            // onEndReached={() => getData()}
                            onEndReached={() => getData1()}
                            ListFooterComponent={renderFooter}
                        />
                }

            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        padding: 10,
        // backgroundColor: '#800000',
        marginTop: 30,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});


export default Screen;
