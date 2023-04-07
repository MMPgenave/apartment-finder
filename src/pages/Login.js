import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import tw from "twin.macro";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const style = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "rgb(17 24 39)",
    },
  },
};
const checkboxstyle = {
  "&.Mui-checked": {
    "&, & + .MuiFormControlLabel-label": {
      color: "#c5ab7b",
    },
  },
};
const theme = createTheme({
  components: {
    TextField: {
      styleOverrides: {
        root: {
          color: "#c5ab7b",
        },
      },
    },
  },
  palette: {
    //  gray900 17 24 39   gray500   rgb(107 114 128)    gray400  156 163 175  gray300 209 213 219  gray100 243 244 246
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#c5ab7b",
      secondary: "#46505A",
      gray100: "#f3f4f6",
      gray300: "#d1d5db",
      gray400: "#9ca3af",
      gray500: "#6b7280",
      gray800: "#1f2937",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      main: "#009688",
      dark: "#009688",
    },
  },
});

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Wrapper>
      <div>
        <ThemeProvider theme={theme}>
          <Container
            component="main"
            maxWidth="xs"
            sx={{ mb: 15, color: "text.gray100" }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1 }}>
                <LockOutlinedIcon sx={{ color: "text.gray800" }} />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                sx={{ color: "text.gray800" }}
              >
                ورود
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder=" email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={style}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  placeholder="رمز"
                  id="password"
                  autoComplete="current-password"
                  sx={style}
                />

                <Button className="btn" type="submit" sx={{ mt: 3, mb: 2 }}>
                  ثبت نام
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs({})`
  & {
    div {
      ${tw`bg-gray-200 text-gray-900 w-[97%] mx-auto rounded-lg mb-2`}
    }
    .btn {
      ${tw`bg-gray-400 [border-color: gray] w-[95%] text-gray-900 text-xl hover:bg-gray-500`}
    }
  }
`;
