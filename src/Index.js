import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

const Index = () => {
    return (
        <View style={style.container}>
            <Text style={style.textStyle}>My first with React Native</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#121212',
    },
    textStyle: {
        color: '#fff',
    }
})

export default Index;