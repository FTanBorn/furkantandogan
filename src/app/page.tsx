"use client";

import Image from "next/image";
import styles from "./page.module.css";
import meImage from "../../public/images/me.jpg";
import { Box, Card, keyframes, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import FavoriteIcon from "@mui/icons-material/Favorite";

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(60);
  }
`;

export default function Home() {
  return (
    <div className="homePage">
      <Box
        height={"90vh"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        sx={{ mt: { xs: 5, md: 0 } }}
      >
        <Box
          sx={{
            backgroundColor: "#ae9991",
            height: "auto",
            width: { xs: "99vw", md: "40vw" },
            padding: 2,
            paddingBottom: 10,
            margin: 0,
            border: "3px solid #392822",
            position: "relative",
            borderRadius: "16px",
          }}
        >
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"center"}
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                height: "150px",
                width: "150px",
                borderRadius: "16px",
                border: "3px solid #392822",
                overflow: "hidden",
              }}
            >
              <Image
                height={150}
                width={150}
                alt="me"
                src={meImage}
                objectFit="cover"
              />
            </Box>
          </Stack>
          <Stack direction={"row"} display={"flex"} justifyContent={"center"}>
            <Typography fontFamily={"cursive"} fontWeight={"400"} variant="h5">
              Furkan Tandoğan
            </Typography>
          </Stack>

          <Stack
            sx={{ mt: { xs: 5, md: 10 } }}
            direction={"row"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Typography
              fontFamily={"cursive"}
              fontWeight={"400"}
              variant="subtitle1"
              gutterBottom
              sx={{ textIndent: "50px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              vitae alias neque molestiae corrupti! Vitae, tempora animi! Beatae
              iure, inventore sunt error illum quam nisi molestias distinctio
              doloremque, nemo nulla. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas dolor exercitationem blanditiis iste
              sunt consequatur repellendus porro est deleniti. Voluptatum vel
              facere iste quidem. Vero laboriosam veritatis inventore deleniti
              ipsa.
            </Typography>
          </Stack>

          <Box
            sx={{
              backgroundColor: "white",
              height: "150px",
              width: "150px",
              borderRadius: "16px",
              border: "3px solid #392822",
              position: "absolute",
              top: -75,
              animation: `${moveUpDown} 5s infinite`,
              overflow: "hidden",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image
              height={150}
              width={150}
              alt="me"
              src={meImage}
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
