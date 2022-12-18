const express = require('express');
const router  = express.Router();
const axios = require('axios');

const checkQueueType = (type) => {
    switch (type) {
        case 'RANKED_SOLO_5x5':
            return 'Solo/Duo';
            break;
        case 'RANKED_FLEX_SR' || 'RANKED_TEAM_SR' :
            return 'Flex';
            break;
        case 'RANKED_TFT_DOUBLE_UP':
            return 'TFT'
            break;
        default:
            return 'Sem Dados';
    };
}

router.get('/', async (req, res) => {
    const summonerName = req.query.summoner;
    //const { summonerName } = req.params;

    console.log('Pesquisa: ', req.query.summoner);

    const urlGetSummoner = `${process.env.LOL_URL}/lol/summoner/v4/summoners/by-name/${summonerName}`;

    const config = { headers: { 'X-Riot-Token': process.env.LOL_KEY }};

    const summonerIdResponse = await axios.get(urlGetSummoner, config)
    .catch(err => {
        return err;
    })

    const { id, name, profileIconId, summonerLevel} = summonerIdResponse.data;

    const urlGetRanked = `${process.env.LOL_URL}/lol/league/v4/entries/by-summoner/${id}`;

    const responseRanked = await axios.get(urlGetRanked, config)
    .catch(err => {
        return err;
    })

    const { tier, rank, wins, losses, queueType } = responseRanked.data[0] ? responseRanked.data[0] : responseRanked.data[1];

    const formattedQueueType = checkQueueType(queueType);

    const summoner = {
        name,
        summonerLevel,
        tier,
        rank,
        wins,
        losses,
        formattedQueueType,
        iconUrl: `${process.env.LOL_ICONS}/${profileIconId}.png`,
        winRate: ((wins / (wins + losses)) * 100).toFixed(1)
    };
    
    res.render('summoner', { summoner });
})

module.exports = router;