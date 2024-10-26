import { Avatar, Stack, Typography } from "@mui/material";
import UserAvatar from "../assets/userAvatar.png";
import BotAvatar from "../assets/botAvatar.png";

export interface MessageProps {
  type: "user" | "bot";
  message: string;
  sender: string;
  timestamp: string;
}

export function Message({ type, message, sender, timestamp }: MessageProps) {
  const data = new Date(timestamp);
  const isUser = type === "user";

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        background: isUser ? "transparent" : "#fff",
        padding: "24px",
        gap: "15px",
      }}
    >
      <Stack direction="row" alignItems="center" gap={"10px"}>
        <Avatar src={isUser ? UserAvatar : BotAvatar} />
        <Typography sx={{ color: "#19213D" }}>{sender}</Typography>
        <Typography sx={{ color: "#666F8D" }}>{formatToTime(data)}</Typography>
      </Stack>
      <Typography sx={{ color: "#666F8D" }}>{message}</Typography>
    </Stack>
  );
}

function formatToTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  const adjustedHours = hours % 12 || 12;

  // Add a leading zero to minutes if needed
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${adjustedHours}:${formattedMinutes} ${period}`;
}
