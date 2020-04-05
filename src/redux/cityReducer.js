
const initialState = {
    data: [
        {name: 'Nur-Sultan'},
        {name: 'Aktau'},
        {name: 'Aktobe'},
        {name: 'Almaty'},
        {name: 'Arkalyk'},
        {name: 'Atyrau'},
        {name: 'Baikonur'},
        {name: 'Balqash'},
        {name: 'Zhezkazgan'},
        {name: 'Karagandy'},
        {name: 'Kentau'},
        {name: 'Kyzylorda'},
        {name: 'Kokshetau'},
        {name: 'Kostanay'},
        {name: 'Zhanaozen'},
        {name: 'Pavlodar'},
        {name: 'Petropavl'},
        {name: 'Ridder'},
        {name: 'Saran'},
        {name: 'Satpayev'},
        {name: 'Semey'},
        {name: 'Stepnogorsk'},
        {name: 'Taldykorgan'},
        {name: 'Taraz'},
        {name: 'Temirtau'},
        {name: 'Turkistan'},
        {name: 'Oral'},
        {name: 'Oskemen'},
        {name: 'Shymkent'},
        {name: 'Shakhtinsk'},
        {name: 'Schuchinsk'},
        {name: 'Ekibastuz'},
    ]
}

const cityReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default cityReducer;