import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Use, Rect, Circle } from 'react-native-svg';
import { ContainerSvg, ContainerSvgProps } from './styles';

export interface SvgProps extends ContainerSvgProps {
    color: string;
    backgroundCircle?: string;
    size: number
}

const PhotoIconSVG: React.FunctionComponent<SvgProps> = ({ color, size, backgroundCircle, ...props }) => {
    return (
        <ContainerSvg
            {...props}
        >
            <Svg
                id="photo"
                height={size}
                width={size}
                viewBox={`0 0 32 32`}
                fill={color}
            >
                <G clip-path="url(#clip0_1977_293)">
                    <Circle
                        cx="16"
                        cy="15.5"
                        r="16"
                        fill={backgroundCircle} />
                    <Path
                        d="M12.5385 8.5L12.2977 8.81231L11.3846 10.0385H10.6154V9.26923H7.53846V10.0385H6V23.8846H26V10.0385H20.6154L19.7015 8.81231L19.4615 8.5H12.5385ZM13.3077 10.0385H18.6923L19.6062 11.2646L19.8462 11.5769H24.4615V14.6538H19.99C19.1885 13.2815 17.6977 12.3462 16 12.3462C14.3031 12.3462 12.8115 13.2815 12.0092 14.6538H7.53846V11.5769H12.1538L12.3946 11.2646L13.3077 10.0385ZM21.3846 12.3462V13.8846H22.9231V12.3462H21.3846ZM16 13.8846C17.7077 13.8846 19.0769 15.2538 19.0769 16.9615C19.0769 18.6692 17.7077 20.0385 16 20.0385C14.2923 20.0385 12.9231 18.6692 12.9231 16.9615C12.9231 15.2538 14.2923 13.8846 16 13.8846ZM7.53846 16.1923H11.4569C11.4117 16.4463 11.3876 16.7036 11.3846 16.9615C11.3846 19.5015 13.46 21.5769 16 21.5769C18.54 21.5769 20.6154 19.5015 20.6154 16.9615C20.6154 16.7023 20.5846 16.44 20.5431 16.1923H24.4615V22.3462H7.53846V16.1923Z"
                        fill={color}
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_1977_293">
                        <Rect width="32" height="32" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>
        </ContainerSvg>
    );
}

export default PhotoIconSVG;
