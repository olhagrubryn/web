import React from 'react';
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  style,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  style?: React.CSSProperties;
  titleClassName?: string;
}) => {
  const isIdOne = id === 1;
  const isIdTwo = id === 2;
  const isIdThree = id === 3;

  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition-transform duration-300 transform hover:translate-y-1 hover:scale-105 shadow-input dark:shadow-none p-4 dark:bg-red dark:border-white/[0.2] bg-white border border-transparent flex flex-col border-red",
        className
      )}
      style={style}
    >
      {isIdThree && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(108, 0, 162)"
            gradientBackgroundEnd="rgb(0, 17, 82)"
            firstColor="18, 113, 255"
            secondColor="221, 74, 255"
            thirdColor="100, 220, 255"
            fourthColor="200, 50, 50"
            fifthColor="180, 180, 50"
            pointerColor="140, 100, 255"
            size="100%"
            blendingValue="hard-light"
            interactive={true}
            className="absolute inset-0"
          />
        </div>
      )}
      <div className={`relative z-10 flex flex-col ${isIdThree ? 'items-center justify-center h-full' : 'h-full'}`}>
        {header}
        <div className={`flex flex-col ${isIdThree ? 'items-center justify-center h-full' : 'flex-grow'} ${isIdOne ? 'items-end justify-end' : ''}`}>
          <div className={`flex ${isIdOne ? 'flex-row-reverse' : 'flex-row'} items-start space-x-2`}>
            <div className={`flex-shrink-0 ${isIdOne ? 'order-2' : 'order-1'}`}>
              {icon}
            </div>
            <div className={`flex-1 ${isIdOne ? 'text-right' : (isIdTwo ? 'text-left' : 'text-center')}`}>
              <div
                className={`font-sans font-bold ${isIdOne ? 'text-5xl leading-tight text-white' : 'text-2xl'} ${isIdTwo || isIdThree ? 'text-white' : 'text-neutral-600'} dark:${isIdTwo || isIdThree ? 'text-white' : 'text-neutral-200'} ${titleClassName}`}
                style={isIdOne ? { whiteSpace: 'pre-line' } : {}}
              >
                {isIdOne
                  ? (typeof title === 'string'
                      ? title
                          .split(' ')
                          .map((word, index) =>
                        (index + 1) % 2 === 0
                          ? `${word}\n`
                          : `${word} `
                      )
                      .join('')
                    : title)
                  : title}
              </div>
            </div>
          </div>
          <div
            className={`font-sans font-normal text-xs ${isIdOne ? 'text-right text-white' : (isIdTwo || isIdThree) ? 'text-center text-white' : 'text-left text-neutral-600'} ${isIdOne ? 'text-white' : 'text-neutral-300'}`}
          >
            {isIdOne
              ? (typeof description === 'string'
                  ? description
                      .split(' ')
                      .map((word, index) =>
                    (index + 1) % 2 === 0
                      ? `${word}\n`
                      : `${word} `
                  )
                  .join('')
                : description)
              : description}
          </div>
        </div>
      </div>
    </div>
  );
};
