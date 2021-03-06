import React from 'react';
import TopMenu from 'app-comps/top-menu';
import IndicatorsLoader from 'app-comps/top-bar/indicators-loader';
import Content from 'app-comps/content/bookmarks';
import { SortBar } from 'app-comps-common';

const BookmarksLayout = ({ className = '' }) => (
  <main className={className}>
    <TopMenu className="mv3" />
    <IndicatorsLoader className="mv3" />
    <hr className="bt b--light-gray mt3" />
    <SortBar />
    <Content className="ph2" />
  </main>
);

export default BookmarksLayout;
