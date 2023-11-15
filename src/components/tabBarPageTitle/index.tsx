import React from 'react';
import { PageTitleContainer, Title } from './tabBarPageTitleStyles';

interface PageTitleComponentProps {
  title?: string
}

export function TabBarPageTitle({ title }: PageTitleComponentProps) {
  return (
    <PageTitleContainer>
      <Title>{title}</Title>
    </PageTitleContainer>
  );
}