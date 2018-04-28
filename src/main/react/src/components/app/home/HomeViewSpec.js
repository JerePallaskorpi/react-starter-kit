import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Button from '../../ui/elements/Button';
import P from '../../ui/elements/P';
import HomeView from './HomeView';
import { ButtonWrapper, HomeContainer } from './styles';

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

    it('should render two (2) Paragraphs', () => {
        expect(wrapper.find(P)).to.have.length(2);
    });

    it('should render HomeContainer', () => {
        expect(wrapper.find(HomeContainer)).to.have.length(1);
    });

    it('should render two (2) ButtonWrappers', () => {
        expect(wrapper.find(ButtonWrapper)).to.have.length(2);
    });

    it('should render four (4) <Button />', () => {
        expect(wrapper.find(Button)).to.have.length(4);
    });
});
