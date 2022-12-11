import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainButton = styled(Button)(() => ({
  backgroundColor: "#000",
  borderRadius: "23px",
  width: "56px",
  height: "56px",
  minWidth: "56px",
  transform: "rotate(45deg)",
  "&:hover": {
    backgroundColor: "#000",
  },
  "& > span": {
    transform: "rotate(-45deg)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12.8px",
    lineHeight: "19px",
  },
}));

export default MainButton;
