import {
    Button,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import BookIcon from "@mui/icons-material/Book";
import AddIcon from "@mui/icons-material/Add";
export function Sidebar() {
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

const SidebarContainer = styled(Stack)(() => ({
  height: "100%",
  background: "#fff",
  width: "294px",
  padding: "24px",
  borderRight: "1px solid #E0E0E0",
}));
