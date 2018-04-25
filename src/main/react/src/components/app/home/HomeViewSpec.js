import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import { HomeContainer, Lorem } from './HomeStyles';
import HomeView from './HomeView';

describe('<HomeView />', () => {
    const wrapper = shallow(<HomeView
        handleClickRaisedButton={() => {
        }}
    />);

    it('renders <HomeView />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render Lorem', () => {
        expect(wrapper.find(Lorem)).to.have.length(1);
    });

    it('should render HomeContainer', () => {
        expect(wrapper.find(HomeContainer)).to.have.length(1);
    });
});
