import { WiDaySunny } from 'react-icons/wi';
import { WiMoonWaningCrescent2 } from 'react-icons/wi';
import { WiNightAltCloudy } from 'react-icons/wi';
import { WiDayCloudy } from 'react-icons/wi';
import { WiCloud } from 'react-icons/wi';
import { WiDayRain } from 'react-icons/wi';
import { WiNightAltRain } from 'react-icons/wi';
import { WiDaySnowWind } from 'react-icons/wi';
import { WiNightSnow } from 'react-icons/wi';
import { WiNightSnowWind } from 'react-icons/wi';
import { WiDaySnow } from 'react-icons/wi';
import { WiDayLightning } from 'react-icons/wi';
import { WiNightAltLightning } from 'react-icons/wi';
import { WiNightAltSnowWind } from 'react-icons/wi';
import { WiRainMix } from 'react-icons/wi';
import { WiDayFog } from 'react-icons/wi';
import { WiNightFog } from 'react-icons/wi';
import { WiFog } from 'react-icons/wi';
import { WiRainWind } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import { WiSnow } from 'react-icons/wi';
import { WiNightAltSnow } from 'react-icons/wi';
import { WiDayRainMix } from 'react-icons/wi';
import { WiNightAltRainMix } from 'react-icons/wi';
import { WiNightSnowThunderstorm } from 'react-icons/wi';
import { WiDaySnowThunderstorm } from 'react-icons/wi';
import { WiStormShowers } from 'react-icons/wi';

export const climateList = [
    {
        "code": 1000,
        "day": "Sunny",
        "night": "Clear",
        "icon": 113,
        "IconDay": WiDaySunny,
        "IconNight": WiMoonWaningCrescent2
    },
    {
        "code": 1003,
        "day": "Partly cloudy",
        "night": "Partly cloudy",
        "icon": 116,
        "IconDay": WiDayCloudy,
        "IconNight": WiNightAltCloudy
    },
    {
        "code": 1006,
        "day": "Cloudy",
        "night": "Cloudy",
        "icon": 119,
        "IconDay": WiCloud,
        "IconNight": WiNightAltCloudy
    },
    {
        "code": 1009,
        "day": "Overcast",
        "night": "Overcast",
        "icon": 122,
        "IconDay": WiCloud,
        "IconNight": WiCloud
    },
    {
        "code": 1030,
        "day": "Mist",
        "night": "Mist",
        "icon": 143,
        "IconDay": WiCloud,
        "IconNight": WiCloud
    },
    {
        "code": 1063,
        "day": "Patchy rain possible",
        "night": "Patchy rain possible",
        "icon": 176,
        "IconDay": WiDayRain,
        "IconNight": WiNightAltRain
    },
    {
        "code": 1066,
        "day": "Patchy snow possible",
        "night": "Patchy snow possible",
        "icon": 179,
        "IconDay": WiDaySnowWind,
        "IconNight": WiNightSnow
    },
    {
        "code": 1069,
        "day": "Patchy sleet possible",
        "night": "Patchy sleet possible",
        "icon": 182,
        "IconDay": WiDaySnow,
        "IconNight": WiNightSnowWind
    },
    {
        "code": 1072,
        "day": "Patchy freezing drizzle possible",
        "night": "Patchy freezing drizzle possible",
        "icon": 185,
        "IconDay": WiDaySnow,
        "IconNight": WiNightSnowWind
    },
    {
        "code": 1087,
        "day": "Thundery outbreaks possible",
        "night": "Thundery outbreaks possible",
        "icon": 200,
        "IconDay": WiDayLightning,
        "IconNight": WiNightAltLightning
    },
    {
        "code": 1114,
        "day": "Blowing snow",
        "night": "Blowing snow",
        "icon": 227,
        "IconDay": WiRainMix,
        "IconNight": WiRainMix
    },
    {
        "code": 1117,
        "day": "Blizzard",
        "night": "Blizzard",
        "icon": 230,
        "IconDay": WiRainMix,
        "IconNight": WiRainMix
    },
    {
        "code": 1135,
        "day": "Fog",
        "night": "Fog",
        "icon": 248,
        "IconDay": WiFog,
        "IconNight": WiFog
    },
    {
        "code": 1147,
        "day": "Freezing fog",
        "night": "Freezing fog",
        "icon": 260,
        "IconDay": WiDayFog,
        "IconNight": WiNightFog
    },
    {
        "code": 1150,
        "day": "Patchy light drizzle",
        "night": "Patchy light drizzle",
        "icon": 263,
        "IconDay": WiRainWind,
        "IconNight": WiRainWind
    },
    {
        "code": 1153,
        "day": "Light drizzle",
        "night": "Light drizzle",
        "icon": 266,
        "IconDay": WiRainWind,
        "IconNight": WiRainWind
    },
    {
        "code": 1168,
        "day": "Freezing drizzle",
        "night": "Freezing drizzle",
        "icon": 281,
        "IconDay": WiRainMix,
        "IconNight": WiRainMix
    },
    {
        "code": 1171,
        "day": "Heavy freezing drizzle",
        "night": "Heavy freezing drizzle",
        "icon": 284,
        "IconDay": WiRainWind,
        "IconNight": WiRainWind
    },
    {
        "code": 1180,
        "day": "Patchy light rain",
        "night": "Patchy light rain",
        "icon": 293,
        "IconDay": WiDayRain,
        "IconNight": WiNightAltRain
    },
    {
        "code": 1183,
        "day": "Light rain",
        "night": "Light rain",
        "icon": 296,
        "IconDay": WiRain,
        "IconNight": WiRain
    },
    {
        "code": 1186,
        "day": "Moderate rain at times",
        "night": "Moderate rain at times",
        "icon": 299,
        "IconDay": WiDayRain,
        "IconNight": WiNightAltRain
    },
    {
        "code": 1189,
        "day": "Moderate rain",
        "night": "Moderate rain",
        "icon": 302,
        "IconDay": WiRain,
        "IconNight": WiRain
    },
    {
        "code": 1192,
        "day": "Heavy rain at times",
        "night": "Heavy rain at times",
        "icon": 305,
        "IconDay": WiDayRain,
        "IconNight": WiNightAltRain
    },
    {
        "code": 1195,
        "day": "Heavy rain",
        "night": "Heavy rain",
        "icon": 308,
        "IconDay": WiRain,
        "IconNight": WiRain
    },
    {
        "code": 1198,
        "day": "Light freezing rain",
        "night": "Light freezing rain",
        "icon": 311,
        "IconDay": WiRainMix,
        "IconNight": WiRainMix
    },
    {
        "code": 1201,
        "day": "Moderate or heavy freezing rain",
        "night": "Moderate or heavy freezing rain",
        "icon": 314,
        "IconDay": WiRainMix,
        "IconNight": WiRainMix
    },
    {
        "code": 1204,
        "day": "Light sleet",
        "night": "Light sleet",
        "icon": 317,
        "IconDay": WiRainMix,
        "IconNight": WiRainMix
    },
    {
        "code": 1207,
        "day": "Moderate or heavy sleet",
        "night": "Moderate or heavy sleet",
        "icon": 320,
        "IconDay": WiRainMix,
        "IconNight": WiRainMix
    },
    {
        "code": 1210,
        "day": "Patchy light snow",
        "night": "Patchy light snow",
        "icon": 323,
        "IconDay": WiDaySnow,
        "IconNight": WiNightAltSnowWind
    },
    {
        "code": 1213,
        "day": "Light snow",
        "night": "Light snow",
        "icon": 326,
        "IconDay": WiSnow,
        "IconNight": WiSnow
    },
    {
        "code": 1216,
        "day": "Patchy moderate snow",
        "night": "Patchy moderate snow",
        "icon": 329,
        "IconDay": WiDaySnow,
        "IconNight": WiNightAltSnow
    },
    {
        "code": 1219,
        "day": "Moderate snow",
        "night": "Moderate snow",
        "icon": 332,
        "IconDay": WiSnow,
        "IconNight": WiSnow
    },
    {
        "code": 1222,
        "day": "Patchy heavy snow",
        "night": "Patchy heavy snow",
        "icon": 335,
        "IconDay": WiDaySnow,
        "IconNight": WiNightAltSnow
    },
    {
        "code": 1225,
        "day": "Heavy snow",
        "night": "Heavy snow",
        "icon": 338,
        "IconDay": WiSnow,
        "IconNight": WiSnow
    },
    {
        "code": 1237,
        "day": "Ice pellets",
        "night": "Ice pellets",
        "icon": 350,
        "IconDay": WiSnow,
        "IconNight": WiSnow
    },
    {
        "code": 1240,
        "day": "Light rain shower",
        "night": "Light rain shower",
        "icon": 353,
        "IconDay": WiDayRainMix,
        "IconNight": WiNightAltRain
    },
    {
        "code": 1243,
        "day": "Moderate or heavy rain shower",
        "night": "Moderate or heavy rain shower",
        "icon": 356,
        "IconDay": WiDayRainMix,
        "IconNight": WiNightAltRain
    },
    {
        "code": 1246,
        "day": "Torrential rain shower",
        "night": "Torrential rain shower",
        "icon": 359,
        "IconDay": WiDayRain,
        "IconNight": WiNightAltRain
    },
    {
        "code": 1249,
        "day": "Light sleet showers",
        "night": "Light sleet showers",
        "icon": 362,
        "IconDay": WiDayRainMix,
        "IconNight": WiNightAltRainMix
    },
    {
        "code": 1252,
        "day": "Moderate or heavy sleet showers",
        "night": "Moderate or heavy sleet showers",
        "icon": 365,
        "IconDay": WiDayRainMix,
        "IconNight": WiNightAltRainMix
    },
    {
        "code": 1255,
        "day": "Light snow showers",
        "night": "Light snow showers",
        "icon": 368,
        "IconDay": WiDaySnow,
        "IconNight": WiNightAltSnow
    },
    {
        "code": 1258,
        "day": "Moderate or heavy snow showers",
        "night": "Moderate or heavy snow showers",
        "icon": 371,
        "IconDay": WiDaySnow,
        "IconNight": WiNightAltSnow
    },
    {
        "code": 1261,
        "day": "Light showers of ice pellets",
        "night": "Light showers of ice pellets",
        "icon": 374,
        "IconDay": WiDaySnow,
        "IconNight": WiNightAltSnow
    },
    {
        "code": 1264,
        "day": "Moderate or heavy showers of ice pellets",
        "night": "Moderate or heavy showers of ice pellets",
        "icon": 377,
        "IconDay": WiDaySnow,
        "IconNight": WiNightAltSnow
    },
    {
        "code": 1273,
        "day": "Patchy light rain with thunder",
        "night": "Patchy light rain with thunder",
        "icon": 386,
        "IconDay": WiDayLightning,
        "IconNight": WiNightAltLightning
    },
    {
        "code": 1276,
        "day": "Moderate or heavy rain with thunder",
        "night": "Moderate or heavy rain with thunder",
        "icon": 389,
        "IconDay": WiDayLightning,
        "IconNight": WiNightAltLightning
    },
    {
        "code": 1279,
        "day": "Patchy light snow with thunder",
        "night": "Patchy light snow with thunder",
        "icon": 392,
        "IconDay": WiDaySnowThunderstorm,
        "IconNight": WiNightSnowThunderstorm
    },
    {
        "code": 1282,
        "day": "Moderate or heavy snow with thunder",
        "night": "Moderate or heavy snow with thunder",
        "icon": 395,
        "IconDay": WiStormShowers,
        "IconNight": WiStormShowers
    }
]