import { Stack, SxProps, Theme } from "@mui/material";
import { Message, MessageProps } from "./message";

interface MessageListProps {
  messages: MessageProps[];
  sx?: SxProps<Theme>;
}

export function MessageList({ sx, messages }: MessageListProps) {
  return (
    <Stack sx={sx}>
      {messages?.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </Stack>
  );
}
