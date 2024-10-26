import { Button, Stack, styled, SxProps, Theme } from "@mui/material";
import { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

interface InputProps {
  onSubmit: (message: string) => void;
  sx?: SxProps<Theme>;
  placeholder?: string;
}

export function Input({ onSubmit, sx, placeholder }: InputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    onSubmit(message);
    setMessage("");
  };

  return (
    <Stack
      sx={{
        background: "#FFFFFF",
        width: "100%",
        p: "24px",
        ...sx,
      }}
    >
      <InputContainer>
        <textarea
          placeholder={placeholder}
          //   type="text"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
      </InputContainer>
      <ActionContainer>
        <Button
          startIcon={<TelegramIcon />}
          onClick={handleSubmit}
          sx={{ background: "#FF4100", color: "white", fontWeight: "600", padding: "8px 16px", borderRadius: "0px" }}
        >
          Send message
        </Button>
      </ActionContainer>
    </Stack>
  );
}

const InputContainer = styled(Stack)(() => ({
  borderBottom: "1px solid #DADCE0",
  alignItems: "flex-start",
  justifyContent: "center",

  "& textarea": {
    border: "none",
    width: "100%",
    fontSize: "16px",
    height: "64px",
    outline: "none",
    resize: "none"
  },
}));

const ActionContainer = styled(Stack)(() => ({
  alignItems: "flex-end",
  justifyContent: "center",
  paddingTop: "16px",
}));
