import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Button from '../../shared/Button';

import { HomeContainer, Lorem } from './HomeStyles';
import HomeView from './HomeView';

describe('<HomeView />', () => {
    const minProps = {
        handleClickRaisedButton: () => {
        },
        handleClickFlatButton: () => {
        },
        values: {
            test: '',
        },
    };

    const wrapper = shallow(<HomeView {...minProps} />);

    it('renders <HomeView />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render Lorem', () => {
        expect(wrapper.find(Lorem)).to.have.length(1);
    });

    it('should render HomeContainer', () => {
        expect(wrapper.find(HomeContainer)).to.have.length(1);
    });

    it('should render two (2) <Button />', () => {
        expect(wrapper.find(Button)).to.have.length(2);
    });
});
