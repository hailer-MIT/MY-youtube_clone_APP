import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { sizing } from '@mui/system';

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky",  background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>     
              <img src={logo} alt="logo" height={45} sx={{ borderRadius: 5 , background: '#fff'}} />
    </Link>
    <Typography variant="h4" sx={{ color:"#fff" }} >Welcome to Hailer Youtube!!!</Typography>
    {/* <span>the site you can search local videos ziarkey.</span> */}
    
    <SearchBar />
  </Stack>
);

export default Navbar;
