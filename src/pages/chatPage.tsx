import {
  Breadcrumbs,
  Button,
  Chip,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Input } from "../components/input";
import { MessageList } from "../components/messageList";
import Logo from "../assets/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChatIcon from "@mui/icons-material/Chat";
import BookIcon from "@mui/icons-material/Book";
import AddIcon from "@mui/icons-material/Add";

export function ChatPage() {
  return (
    <Stack>
      <Header />
      <Layout>
        <Sidebar />
        <Chat />
      </Layout>
    </Stack>
  );
}

function Sidebar() {
  return (
    <SidebarContainer>
      <Stack>
        <MenuItem sx={{ background: "#F7F8FA" }}>
          <ListItemIcon>
            <ChatIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Chats</ListItemText>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ⌘1
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Library</ListItemText>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ⌘2
          </Typography>
        </MenuItem>
      </Stack>
      <Stack>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", padding: "0px 15px", mt: "40px" }}
        >
          LAST CHATS
        </Typography>
        <MenuItem>
          <ListItemText>Lorem ipsum dolor sit</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Duis aute irure dolor in repre</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Lorem ipsum dolor sit</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Duis aute irure dolor in repre</ListItemText>
        </MenuItem>
      </Stack>
      <Button
        startIcon={<AddIcon />}
        sx={{
          mt: "auto",
          background: "#FF4100",
          color: "white",
          fontWeight: "600",
          padding: "8px 16px",
          borderRadius: "0px",
        }}
      >
        New chat
      </Button>
    </SidebarContainer>
  );
}

function Chat() {
  return (
    <ChatContainer>
      <Stack
        sx={{ background: "#F0F2F5", width: "100%", padding: "18px 24px" }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" gap={"8px"}>
          <Typography>Best protein suited for beginners in sports</Typography>
          <Chip
            label="PRODUCT RECOMMENDATIONS"
            sx={{ color: "#19213D", fontWeight: "600", borderRadius: "none" }}
          />
        </Stack>
        <Button
          startIcon={<AddIcon />}
          sx={{
            mt: "auto",
            background: "#FF4100",
            color: "white",
            fontWeight: "600",
            padding: "8px 16px",
            borderRadius: "0px",
          }}
        >
          New chat
        </Button>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          maxWidth: "860px",
          width: "100%",
          p: "40px",
          gap: "20px",
          height: "calc(100% - 76px)",
        }}
      >
        <MessageList
          messages={[]}
          sx={{
            maxHeight: "100%",
            overflowY: "auto",
            overscrollBehavior: "none",
          }}
        />
        <Input
          placeholder="How can I help you?"
          sx={{ mt: "auto" }}
          onSubmit={(message) => {
            console.log(message);
          }}
        />
      </Stack>
    </ChatContainer>
  );
}

function Header() {
  return (
    <HeaderContainer>
      <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
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
      <Stack sx={{ p: "10px 0px" }}>
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

const Layout = styled(Stack)(() => ({
  height: "calc(100vh - 106px)",
  display: "flex",
  flexDirection: "row",
}));

const SidebarContainer = styled(Stack)(() => ({
  height: "100%",
  background: "#F0F2F5",
  width: "294px",
  padding: "24px",
}));

const ChatContainer = styled(Stack)(() => ({
  height: "100%",
  background: "#F7F8FA",
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));

const HeaderContainer = styled(Stack)(() => ({
  minHeight: "64px",
  borderBottom: "1px solid #DADCE0",
  justifyContent: "space-between",
  padding: "10px 34px 0px 34px",
}));
