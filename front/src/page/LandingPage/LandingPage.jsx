import {
  ContentContainer,
  MainContainer,
  WideCard,
} from "../../Layout/style/GlobalStyle";
import Typography from "@mui/material/Typography";

function LandingPage() {
  return (
    <ContentContainer>
      <MainContainer>
        <WideCard>
          <Typography variant="h3">강의 일지</Typography>
        </WideCard>
        <WideCard>
          <Typography variant="h3">스파링 일지</Typography>
        </WideCard>
        <WideCard>
          <Typography variant="h3">친구 목록</Typography>
        </WideCard>
        <WideCard>
          <Typography variant="h3">1일1 주짓수</Typography>
        </WideCard>
      </MainContainer>
    </ContentContainer>
  );
}

export default LandingPage;
