'use client'

import React, { useState } from 'react'
import { CardType } from '../types';
import { Card } from './Card';

const CardList = ({ cards }: { cards: CardType[] }) => {
    const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}

export default CardList