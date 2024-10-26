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
      <Message
        type="user"
        message="Hello, how can I help you?"
        sender="User"
        timestamp="2021-11-01T14:48:00"
      />
      <Message
        type="bot"
        message="Hi! I'm here to help you with any questions you have."
        sender="Bot"
        timestamp="2021-11-01T14:49:00"
      />
      <Message
        type="user"
        message="I have a question about my account."
        sender="User"
        timestamp="2021-11-01T14:50:00"
      />
      <Message
        type="bot"
        message="Sure, what would you like to know?"
        sender="Bot"
        timestamp="2021-11-01T14:51:00"
      />
      <Message
        type="user"
        message="I have a question about my account."
        sender="User"
        timestamp="2021-11-01T14:50:00"
      />
      <Message
        type="bot"
        message="Sure, what would you like to know?"
        sender="Bot"
        timestamp="2021-11-01T14:51:00"
      />
      <Message
        type="user"
        message="I have a question about my account."
        sender="User"
        timestamp="2021-11-01T14:50:00"
      />
      <Message
        type="bot"
        message="Sure, what would you like to know?"
        sender="Bot"
        timestamp="2021-11-01T11:17:00"
      />
    </Stack>
  );
}
