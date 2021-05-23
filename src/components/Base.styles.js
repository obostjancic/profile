import { css } from 'styled-components';

export const theme = {
  primary: '#0077b2',
  primaryLight: '#0077b2df',
  primaryDark: '#a6c3cf',
  backgroundDark: '#f2f6f8',
  backgroundCanvas: '#f5f7fb00',
  backgroundOverlay: '#eeeeeeaa',
};

export const Flex = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const JustifyContentStart = css`
  -ms-flex-line-pack: justify;
  align-content: space-between;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const JustifyContentSpaceBetween = css`
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const JustifyContentCenter = css`
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const JustifyContent = (direction) => {
  if (direction === 'space-between') return JustifyContentSpaceBetween;
  else if (direction === 'center') return JustifyContentCenter;
  else return JustifyContentStart;
};

export const Border = ({ size, radius = '0' }) => css`
  border: ${size}px solid ${theme.primary};
  border-radius: ${radius};
`;

export const Transition = ({
  duration,
  scope = 'all',
  animation = 'ease-in-out',
  delay = '0',
}) => css`
  -moz-transition: ${scope} ${duration}s ${animation};
  -o-transition: ${scope} ${duration}s ${animation};
  -webkit-transition: ${scope} ${duration}s ${animation};
  transition: ${scope} ${duration}s ${animation};
  -webkit-transition-delay: ${delay}s;
  -o-transition-delay: ${delay}s;
  transition-delay: ${delay}s;
`;

export const Scale = ({ amount }) => css`
  -webkit-transform: scale(${amount});
  -ms-transform: scale(${amount});
  transform: scale(${amount});
`;
