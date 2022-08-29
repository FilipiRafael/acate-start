import { useState } from 'react';
import {
    View, 
    SafeAreaView,
    StatusBar,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    Pressable
} from 'react-native';

const Index = () => {

    const [press, setPress] = useState(0);

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scrollcontent}>
                <View>
                    <Image
                        source={require('./images/avatar.png')}
                        style={style.picture}
                    />
                </View>
                <Text style={style.textStyle}>
                    Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Quem num gosta di mé, boa gentis num é.
                </Text>
                <Text style={style.textStyle}>
                    Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Quem num gosta di mé, boa gentis num é.
                </Text>
                <Text style={style.textStyle}>
                    Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Quem num gosta di mé, boa gentis num é.
                </Text>
                <Text style={style.textStyle}>
                    Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Quem num gosta di mé, boa gentis num é.
                </Text>
                <Text style={style.textStyle}>
                    Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis.Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Quem num gosta di mé, boa gentis num é.
                </Text>
                <View>
                    <Text>Pressionado {press}x</Text>
                </View>
                <View style={style.textBox}>
                    <Pressable
                        onPress={() => setPress(press + 1)}
                        style={ ({pressed}) => [
                            {
                                backgroundColor: pressed ? '#000' : '#fff',
                                borderRadius: 10,
                            },
                            style.pressStyle
                        ] }
                    >
                        {({pressed}) => (
                            <Text
                                style={{ color: pressed ? '#fff' : '#000',
                                fontSize: 30, textAlign: 'center' }}
                            >
                                Press Here
                            </Text>
                        )}
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'red',
        paddingHorizontal: 15,
        marginHeight: StatusBar.currentHeight
    },
    textStyle: {
        color: '#fff',
        marginTop: 32,
        fontSize: 22,
    },
    scrollcontent: {
        paddingHorizontal: 15,
    },
    textBox: {
        marginVertical: 20,
        paddingVertical: 20,
    }, 
    picture: {
        width: 160,
        height: 160,
        marginTop: 50,
    },
    pressStyle: {
        fontSize: 26,
    }
})

export default Index;