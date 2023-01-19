import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikeButton = styled(FavoriteIcon)(() => ({
  width: "15px",
  height: "15px",
  fill: "#fff"
}));

export default LikeButton;
