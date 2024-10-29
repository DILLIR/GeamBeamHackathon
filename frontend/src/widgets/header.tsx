import { Breadcrumbs, Button, IconButton, Stack, styled } from "@mui/material";
import Logo from "../assets/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <img src={Logo} alt="logo" height={51} width={173} />
        <Stack direction="row" gap={"6px"} alignItems="center">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        sx={{ p: "10px 0px" }}
        direction="row"
        alignItems="center"
        gap={"24px"}
      >
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/")}
          sx={{
            background: "#F7F8FA",
            color: "#19213D"
          }}
        >
          BACK TO PAGE
        </Button>
        <Breadcrumbs separator=">">
          <span>Home</span>
          <span>Healthy Foods</span>
          <span>Fitness Food</span>
          <span>GYMBEX</span>
        </Breadcrumbs>
      </Stack>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Stack)(() => ({
  minHeight: "64px",
  borderBottom: "1px solid #DADCE0",
  justifyContent: "space-between",
  padding: "10px 34px 0px 34px",
}));
