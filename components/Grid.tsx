import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from './data';

function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            style={item.style}
            titleClassName={item.titleClassName} // titleClassName wird hier übergeben
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
