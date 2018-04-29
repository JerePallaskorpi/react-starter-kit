import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import H1 from '../../../ui/elements/H1';
import P from '../../../ui/elements/P';
import CardView from './CardView';

describe('<CardView />', () => {
    const minProps = {
        title: 'title',
        text: 'content text',
    };

    const wrapper = shallow(<CardView {...minProps} />);

    it('renders <CardView />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render title', () => {
        expect(wrapper.find(H1)).to.have.length(1);
    });

    it('should render content text', () => {
        expect(wrapper.find(P)).to.have.length(1);
    });
});
