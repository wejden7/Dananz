import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";
import { header } from "../db/data";

export default function TemporaryDrawer() {
  const location = useLocation();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = () => (
    <div className="bg-white w-250 relative h-screen">
      <div className=" text-center  mx-8 ">
        <h1 className="text-h32 font-bold ">Dananz</h1>
      </div>

      <List>
        {header.map((item, index) => (
          <ListItem className="text-pink-base " key={index} disablePadding>
            <ListItemButton>
              <NavLink
                to={`/${item.to}`}
                key={item.name}
                className={({ isActive }) =>
                  isActive || (item.to == "home" && location.pathname === "/")
                    ? "font-semibold "
                    : " "
                }
              >
                {item.name}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="bg-blue-10 absolute bottom-0 w-full py-2">
        <button
          className="text-h24 text-center text-blue-100 w-full font-bold  "
          onClick={toggleDrawer(false)}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className=" md:hidden  ">
      <button className="" onClick={toggleDrawer(true)}>
        <TfiAlignJustify className="text-h32 mt-1 text-black  cursor-pointer" />
      </button>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
