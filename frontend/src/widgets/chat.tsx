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

export function Chat() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any>({
        age: 19,
        gender: "male",
        weight: "65",
        health_goals: "gain weight",
        activity_level: "low",
        dietary_restrictions: "No",
  messages: [
  ],
});

  const handleSendMessage = async (message: string) => {
      const newData = {
            ...data,
            messages: [
                ...data.messages,
                {
                    role: "user",
                    text: message,
                    time: new Date().toISOString(),
                },
            ],
      }
      setData(newData)
      setLoading(true);
    try {
        const response = await fetch('http://localhost:8000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });
        const responseData = await response.json();
        setData({
            ...data,
            messages: [
                ...newData.messages,
                {
                    role: "model",
                    text: responseData.response,
                    time: responseData.time,
                },
            ],
        });
        setLoading(false);
    } catch (error) {
        console.error(error);
        setLoading(false);
    }
  }

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
        {!loading ? (
          <MessageList
            messages={data.messages}
            sx={{
              maxHeight: "100%",
              overflowY: "auto",
              overscrollBehavior: "none",
            }}
          />
        ) : (
          <Stack justifyContent="center" alignItems="center" width={"100%"} gap={"10px"}>
               <MessageList
            messages={data.messages}
            sx={{
              maxHeight: "100%",
              overflowY: "auto",
              overscrollBehavior: "none",
                width: "100%",
            }}
          />
            <CircularProgress />
          </Stack>
        )}
        <Input
            disabled={loading}
          placeholder="How can I help you?"
          sx={{ mt: "auto" }}
          onSubmit={(message) => {
            handleSendMessage(message);
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
