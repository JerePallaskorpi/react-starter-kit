import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { Button, P } from '../../ui/elements';
import HomeView from './HomeView';
import { ButtonWrapper, HomeContainer, TextWrapper } from './styles';

describe('<HomeView />', () => {
    const minProps = {
        handleClickRaisedButton: () => {},
        handleClickFlatButton: () => {},
        values: {
            test: 'test text',
            modalOpen: false,
            cards: [
                {
                    title: 'card title',
                    text: 'card text',
                },
            ],
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

    it('should render ButtonWrapper', () => {
        expect(wrapper.find(ButtonWrapper)).to.have.length(1);
    });

    it('should render TextWrapper', () => {
        expect(wrapper.find(TextWrapper)).to.have.length(1);
    });

    it('should render four (5) <Button />', () => {
        expect(wrapper.find(Button)).to.have.length(5);
    });
});
