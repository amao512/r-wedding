
const initialState = {
    data: [
        {name: 'Nur-Sultan'},
        {name: 'Aqtau'},
        {name: 'Aqtobe'},
        {name: 'Almaty'},
        {name: 'Arkalyk'},
        {name: 'Atyrau'},
        {name: 'Baikonur'},
        {name: 'Balqash'},
        {name: 'Zhezqazgan'},
        {name: 'Qaragandy'},
        {name: 'Kentau'},
        {name: 'Qyzylorda'},
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
        {name: 'Taldyqorgan'},
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