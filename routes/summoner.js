const express = require('express');
const router  = express.Router();
const axios = require('axios');

function nameFormat (name) {
    const lowerCaseName = name.toLowerCase();
    const nameArr = lowerCaseName.split(' ')
    let formatedName;

    for(let i = 0; i < nameArr.length; i++) {
        formatedName += nameArr[i];
    }

    return formatedName;
    
}

router.get('/', async (req, res) => {
    const summonerName = req.query.summoner;
    //const { summonerName } = req.params;

    console.log('Pesquisa: ', req.query.summoner);

    const urlGetSummoner = `${process.env.LOL_URL}/lol/summoner/v4/summoners/by-name/${summonerName}`;

    const config = { headers: { 'X-Riot-Token': process.env.LOL_KEY }}

    const summonerIdResponse = await axios.get(urlGetSummoner, config)
    .catch(err => {
        return res.status(err.response.status).json(err.responses.data);
    })

    const { id, name, profileIconId, summonerLevel} = summonerIdResponse.data;

    const urlGetRanked = `${process.env.LOL_URL}/lol/league/v4/entries/by-summoner/${id}`;

    const responseRanked = await axios.get(urlGetRanked, config)
    .catch(err => {
        return res.status(err.response.status).json(err.responses.data);
    })

    const { tier, rank, wins, losses, queueType } = responseRanked.data[0] ? responseRanked.data[0] : responseRanked.data[1];

    const summoner = res.json({
        name,
        summonerLevel,
        tier,
        rank,
        wins,
        losses,
        queueType,
        iconUrl: `${process.env.LOL_ICONS}/${profileIconId}.png`,
        winrate: ((wins / (wins + losses)) * 100).toFixed(1)
    })

    // console.log(res.json({
    //     summonerLevel,
    //     tier,
    //     rank,
    //     wins,
    //     losses,
    //     queueType,
    //     iconUrl: `${process.env.LOL_ICONS}/${profileIconId}.png`,
    //     winrate: ((wins / (wins + losses)) * 100).toFixed(1)
    // }))
    
    // res.render('summoner', { summoner })

    return summoner;
})

module.exports = router;