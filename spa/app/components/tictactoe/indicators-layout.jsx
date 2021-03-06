import React from 'react';
import TopMenu from 'app-comps/top-menu';
import CryptoFilter from 'app-comps/top-bar/crypto-filter';
import Content from 'app-comps/content/indicators';
import { SortBar } from 'app-comps-common';

const IndicatorsLayout = ({ className = '' }) => (
  <main className={className}>
    <TopMenu className="mv3" />
    <CryptoFilter className="mv3" />
    <hr className="bt b--light-gray mt3" />
    <SortBar />
    <Content className="ph2" />
  </main>
);

export default IndicatorsLayout;
