import Image from "next/image";
import styles from "./page.module.css";
import { Box, Stack, Typography } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={25}
      >
        <Stack
          direction={"column"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography textAlign={"center"} variant="h2" fontWeight={"bold"}>
            AHSENİİ ÇOKK SEVİYORUMM
          </Typography>
          <FavoriteIcon sx={{ fontSize: 90, color: "red" }} />
        </Stack>
      </Box>
    </main>
  );
}
