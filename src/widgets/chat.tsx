import {
  Button,
  Chip,
  CircularProgress,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Input } from "../components/input";
import { MessageList } from "../components/messageList";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const data = {
  messages: [
    {
      type: "user" as const,
      message: "Hello, how can I help you?",
      sender: "User",
      timestamp: "2021-11-01T14:48:00",
    },
    {
      type: "bot" as const,
      message: "Hello, how can I help you?",
      sender: "GYMBEX",
      timestamp: "2021-11-01T14:51:00",
    },
  ],
};

export function Chat() {
  const [loading] = React.useState(true);
  return (
    <ChatContainer>
      <Stack
        sx={{ background: "#fff", width: "100%", padding: "18px 24px" }}
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
        {loading ? (
          <MessageList
            messages={data.messages}
            sx={{
              maxHeight: "100%",
              overflowY: "auto",
              overscrollBehavior: "none",
            }}
          />
        ) : (
          <Stack justifyContent="center" alignItems="center">
            <CircularProgress />
          </Stack>
        )}
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

const ChatContainer = styled(Stack)(() => ({
  height: "100%",
  background: "#F7F8FA",
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));
