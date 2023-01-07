const express = require('express');
const cors = require('cors');
const data = require('./data/data.json');
const PORT = process.env.PORT || 8000;

data = {
  "astrol":"Astrology is a range of divinatory practices, recognized as pseudoscientific since the 18th century,[1] that claim to discern information about human affairs and terrestrial events by studying the apparent positions of celestial objects.[2][3][4][5][6] Different cultures have employed forms of astrology since at least the 2nd millennium BCE, these practices having originated in calendrical systems used to predict seasonal shifts and to interpret celestial cycles as signs of divine communications.[7] Most, if not all, cultures have attached importance to what they observed in the sky, and some—such as the Hindus, Chinese, and the Maya—developed elaborate systems for predicting terrestrial events from celestial observations. Western astrology, one of the oldest astrological systems still in use, can trace its roots to 19th_17th century BCE Mesopotamia, from where it spread to Ancient Greece, Rome, the Islamic world, and eventually Central and Western Europe. Contemporary Western astrology is often associated with systems of horoscopes that purport to explain aspects of a person's personality and predict significant events in their lives based on the positions of celestial objects; the majority of professional astrologers rely on such systems.",
  "horo":"A horoscope (or other commonly used names for the horoscope in English include natal chart, astrological chart, astro-chart, celestial map, sky-map, star-chart, cosmogram, vitasphere, radical chart, radix, chart wheel or simply chart) is an astrological chart or diagram representing the positions of the Sun, Moon, planets, astrological aspects and sensitive angles at the time of an event, such as the moment of a person's birth. The word horoscope is derived from the Greek words ōra and scopos meaning time and observer(horoskopos, pl. horoskopoi, or marker(s) of the hour). It is used as a method of divination regarding events relating to the point in time it represents, and it forms the basis of the horoscopic traditions of astrology. Horoscope columns are often featured in print and online newspapers.",
  "zodiac":"The zodiac is a belt-shaped region of the sky that extends approximately 8° north or south (as measured in celestial latitude) of the ecliptic, the apparent path of the Sun across the celestial sphere over the course of the year. The paths of the Moon and visible planets are within the belt of the zodiac. In Western astrology, and formerly astronomy, the zodiac is divided into twelve signs, each occupying 30° of celestial longitude and roughly corresponding to the following star constellations: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. These astrological signs form a celestial coordinate system, or more specifically an ecliptic coordinate system, which takes the ecliptic as the origin of latitude and the Sun's position at vernal equinox as the origin of longitude."
}

app = express();

app.use(cors({
  origin:'https://whimsical-paletas-c5a1b3.netlify.app',credentials:true
}));
app.use(express.json());


app.get('/', async (req, res)=>{
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  res.json(data);
})




app.listen(PORT,()=>{console.log(`listening on port ${PORT}`)});