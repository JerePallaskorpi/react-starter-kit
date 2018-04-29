// @flow
import React from 'react';
import Card from '../../../ui/blocks/Card';

type Props = {
    title: string,
    text: string,
};

const CardView = ({ title, text }: Props) => (
    <Card>
        <Card.Header>
            <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Image />
        <Card.Content>
            <Card.Text>{text}</Card.Text>
        </Card.Content>
    </Card>
);

export default CardView;
