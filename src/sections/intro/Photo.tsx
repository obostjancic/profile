import React from 'react';
import styled from 'styled-components';
import { theme } from '../../components';

const PhotoWrapper = styled.div`
  transition: all 0.3s ease-in-out;

  border: 1px solid ${theme.primary};
  border-radius: 100px 0 0 100px;
  min-height: 128px;
  min-width: 128px;
  max-width: 128px;
  margin: 0 auto;
  border-radius: 50%;
  pointer-events: auto;

  &:hover {
    box-shadow: 0 0 10px ${theme.primary};
  }
`;

export const Photo = () => (
  <PhotoWrapper
    style={{ background: 'url(images/profile-photo-square.jpg)', backgroundSize: 'contain' }}
  />
);
