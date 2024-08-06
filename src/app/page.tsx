import Image from "next/image";
import styles from "./page.module.css";
import { Box, Card, Stack, Typography } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Home() {
  return (
    <div className="homePage">
      <Stack
        height={"90vh"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <Card
          sx={{
            backgroundColor: "#ae9991",
            height: "40vh",
            width: "40vw",
            border: "3px solid #392822 2",
            borderRadius: "4",
            padding: 4,
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fffff",
              height: "20px",
              width: "20px",
              border: "3px solid #392822",
              borderRadius: "4",
              padding: 4,
              position: "absolute",
              top:-5,
              left: '10%',
            }}
          >
          </Box>
          
        </Card>
      </Stack>
    </div>
  );
}
