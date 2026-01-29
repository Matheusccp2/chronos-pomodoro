import { Container } from '../../components/Container';
import { CoutnDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
      <MainTemplate>
        <Container>
          <CoutnDown />
        </Container>
        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
  );
}
