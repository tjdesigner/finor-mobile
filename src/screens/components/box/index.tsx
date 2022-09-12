import { Container, PageTitleComponentProps } from './boxStyles';

export function Box({ ...props }: PageTitleComponentProps) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  );
}