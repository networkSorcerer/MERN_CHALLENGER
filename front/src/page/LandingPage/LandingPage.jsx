import {
  ContentContainer,
  MainContainer,
  WideCard,
} from "../../Layout/style/GlobalStyle";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <ContentContainer>
      <MainContainer>
        <WideCard onClick={() => navigate("/class")}>
          <Typography variant="h3">강의 일지</Typography>
        </WideCard>
        <WideCard onClick={() => navigate("/sparring")}>
          <Typography variant="h3">스파링 일지</Typography>
        </WideCard>
        <WideCard onClick={() => navigate("/chatting")}>
          <Typography variant="h3">친구 목록</Typography>
        </WideCard>
        <WideCard onClick={() => navigate("/calendar")}>
          <Typography variant="h3">1일1 주짓수</Typography>
        </WideCard>
      </MainContainer>
    </ContentContainer>
  );
}

export default LandingPage;
