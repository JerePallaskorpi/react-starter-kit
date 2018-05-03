import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Card from '../../../../ui/blocks/Card/index';
import CardView from '../CardView';

describe('<CardView />', () => {
    const minProps = {
        title: 'title',
        text: 'content text',
    };

    const wrapper = shallow(<CardView {...minProps} />);

    it('renders <CardView />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render Card', () => {
        expect(wrapper.find(Card)).to.have.length(1);
    });

    it('should render Card Header', () => {
        expect(wrapper.find(Card.Header)).to.have.length(1);
    });

    it('should render Card Content', () => {
        expect(wrapper.find(Card.Content)).to.have.length(1);
    });

    it('should render Card Text', () => {
        expect(wrapper.find(Card.Text)).to.have.length(1);
    });

    it('should render Card Title', () => {
        expect(wrapper.find(Card.Title)).to.have.length(1);
    });

    it('should render Card Image', () => {
        expect(wrapper.find(Card.Image)).to.have.length(1);
    });
});
