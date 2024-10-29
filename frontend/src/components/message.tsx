import { Avatar, Stack, Typography } from "@mui/material";
import UserAvatar from "../assets/userAvatar.png";
import BotAvatar from "../assets/botAvatar.png";
import Markdown from "marked-react";
import { ProductCard, ProductCardProps } from "./productCard";

export interface MessageProps {
  role: "user" | "bot";
  text: string;
  time: string;
  products?: ProductCardProps[];
}

export function Message({
  role,
  text,
  time,
  products,
}: MessageProps) {
  const data = new Date(time);
  const isUser = role === "user";

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
        <Typography sx={{ color: "#19213D" }}>{isUser ? "User" : "GYMBEX"}</Typography>
        <Typography sx={{ color: "#666F8D" }}>{formatToTime(data)}</Typography>
      </Stack>
      <Markdown>{text}</Markdown>
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Stack>
  );
}

function formatToTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  const adjustedHours = hours % 12 || 12;

  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${adjustedHours}:${formattedMinutes} ${period}`;
}
