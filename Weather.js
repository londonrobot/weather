import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#2980B9', '#6DD5FA', '#FFFFFF'],
        title: 'Говорят, дождь пахнет небом',
        subTitle: 'Можно гулять, можно мокнуть, а можно дать дождю пройти'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'А теперь здесь растет снег',
        subTitle: 'Половина людей на планете никогда не видели снега'
    },
    Clouds: {
        iconName: 'apple-icloud',
        gradient: ['#085078', '#85D8CE'],
        title: 'Облаков много разных',
        subTitle: 'Кто смотрит на облако и видит только облако?'
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#536976', '#292E49'],
        title: 'На землю падает гроза',
        subTitle: 'Гром и молния!'
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#E4E5E6', '#00416A'],
        title: 'Дождик моросит',
        subTitle: 'О чем-то шепчет'
    },
    Dust: {
        iconName: 'blur',
        gradient: ['#544a7d', '#ffd452'],
        title: 'Эта пыль точно звездная?',
        subTitle: 'Пыль поднимается до небес, падает к ногам, пускается в пляс'
    },
    Mist: {
        iconName: 'grain',
        gradient: ['#654ea3', '#eaafc8'],
        title: 'Туман накрывает',
        subTitle: 'Перспектива в тумане, и это в буквальном смысле!'
    },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#659999', '#f4791f'],
        title: 'Дым',
        subTitle: 'С неохотой заполоняет пространство'
    },
    Sand: {
        iconName: 'grain',
        gradient: ['#C02425', '#F0CB35'],
        title: 'Песчаная буря',
        subTitle: 'Марсианские вихри, зато потом как приятно увидеть деревья!'
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#ff4b1f', '#1fddff'],
        title: 'Легкий туман',
        subTitle: 'Снижена видимость, зато очень красиво'
    },
    Clear: {
        iconName: 'white-balance-sunny',
        gradient: ['#ffe259', '#ffa751'],
        title: 'Погода хорошая',
        subTitle: 'Ясная погода прощает хмурые ошибки. А вокруг улыбки!'
    },
    Tornado: {
        iconName: 'weather-hurricane',
        gradient: ['#614385', '#516395'],
        title: 'Ураган',
        subTitle: 'И в глаз ему лучше не смотреть'
    },
    Squall: {
        iconName: 'weather-windy',
        gradient: ['#360033', '#0b8793'],
        title: 'Шквалистый ветер',
        subTitle: 'Временами творится что-то невообразимое'
    },
    Ash: {
        iconName: 'weather-cloudy-alert',
        gradient: ['#833ab4', '#fd1d1d', '#fcb045'],
        title: 'Вулканическая пыль',
        subTitle: 'Если вы не в Помпеях, лучше из дома не выходить'
    }
}


export default function Weather({temp, condition, wind}){
    const condit = condition;
    const windType = windTypeDesc(wind);
    // console.log(condit);

    return (
        <LinearGradient
        colors={weatherOptions[condit].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condit].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.windText}>Ветер {windType}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condit].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condit].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

const windTypeDesc = wind => {
    if (wind == 0) return 'отсутствует';
    else if (wind <= 5) return 'слабый';
    else if (wind <= 14) return 'умеренный';
    else if (wind < 25) return 'сильный';
    else if (wind < 33) return 'очень сильный';
    else if (wind >= 33) return 'ураганный';
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado', 'Clear', 'Clouds']).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    }, 
    windText: {
        color: 'white',
        fontSize: 24
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "400",
        marginBottom: 10
    }, 
    subTitle: {
        color: "white",
        fontWeight: "700",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
})