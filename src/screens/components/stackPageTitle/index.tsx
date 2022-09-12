import React from 'react';
import { PageTitleContainer, Title } from './stackPageTitleStyles';

interface PageTitleComponentProps {
  title?: string
}

export function StackPageTitle({ title }: PageTitleComponentProps) {
  return (
    <PageTitleContainer>
      <Title>{title}</Title>
    </PageTitleContainer>
  );
}