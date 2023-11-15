import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Use, Rect, Circle } from 'react-native-svg';
import { ContainerSvg, ContainerSvgProps } from './styles';

export interface SvgProps extends ContainerSvgProps {
    color: string;
    size: number
}

const WalletIconSVG: React.FunctionComponent<SvgProps> = ({ color, size, ...props }) => {
    return (
        <ContainerSvg
            {...props}
        >
            <Svg
                id="wallet"
                height={size}
                width={size}
                viewBox={`0 0 52 52`}
                fill={'transparent'}
            >
                <Path
                    d="M45.4444 51H6.55556C5.08213 51 3.66905 50.4147 2.62718 49.3728C1.58532 48.3309 1 46.9179 1 45.4444V6.55556C1 5.08213 1.58532 3.66905 2.62718 2.62718C3.66905 1.58532 5.08213 1 6.55556 1H45.4444C46.9179 1 48.3309 1.58532 49.3728 2.62718C50.4147 3.66905 51 5.08213 51 6.55556V45.4444C51 46.9179 50.4147 48.3309 49.3728 49.3728C48.3309 50.4147 46.9179 51 45.4444 51Z"
                    stroke={color}
                    strokeWidth="2" />
                <Path
                    d="M1 34.3333H18.7778C19.6972 34.3333 20.4583 35.1056 20.8611 35.9333C21.4333 37.1083 22.7889 38.5 26 38.5C29.2111 38.5 30.5667 37.1111 31.1389 35.9333C31.5417 35.1056 32.3028 34.3333 33.2222 34.3333H51M1 12.1111H51M1 23.2222H51"
                    stroke={color}
                    strokeWidth="2" />

            </Svg>
        </ContainerSvg>
    );
}

export default WalletIconSVG;
