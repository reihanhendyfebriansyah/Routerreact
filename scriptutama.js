import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';

const Utama = () => (
    <Switch>
    <Route exact path="/" Components={Beranda}/>
    <Route exact path="/tentangsaya" Components={TentangSaya}/>
    <Route exact path="/karya" Components={Karya}/>
    <Route exact path="/kontak" Components={Kontak}/>
    </Switch>
)

export default Utama;
