// @flow
import React from 'react';
import Card from '../../../ui/blocks/Card';

type Props = {
    title: string,
    text: string,
    imageColor: string,
};

const CardView = ({ title, text, imageColor }: Props) => (
    <Card>
        <Card.Header>
            <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Image imageColor={imageColor} />
        <Card.Content>
            <Card.Text>{text}</Card.Text>
        </Card.Content>
    </Card>
);

export default CardView;
