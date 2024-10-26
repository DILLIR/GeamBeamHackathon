import { Stack, styled } from "@mui/material";
import { Sidebar } from "../widgets/sidebar";
import { Header } from "../widgets/header";
import { Chat } from "../widgets/chat";

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

const Layout = styled(Stack)(() => ({
  height: "calc(100vh - 106px)",
  display: "flex",
  flexDirection: "row",
}));
