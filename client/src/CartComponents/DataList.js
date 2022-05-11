import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import IconButton from "@mui/material/IconButton";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Divider from "@mui/material/Divider";
import EmptyCart from "./EmptyCart";

function DataList({ botCartList, handleDeleteCartItem }) {
  return (
    <List
      sx={{
        width: "500%",
        maxWidth: "500px",
      }}
    >
      <Divider variant="inset" component="li" />
      {botCartList.length === 0 ? (
        <EmptyCart />
      ) : (
        botCartList.map((el) => {
          return (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={el.bot.image}>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={el.bot.title} align="left" />
                <ListItemText secondary={`$${el.bot.price}`} align="right" />
                <IconButton
                  onClick={() => {
                    handleDeleteCartItem(el.id);
                  }}
                >
                  <DeleteForeverOutlinedIcon style={{ color: "red" }} />
                </IconButton>
              </ListItem>
            </>
          );
        })
      )}

      <Divider variant="inset" component="li" />
    </List>
  );
}

export default DataList;
