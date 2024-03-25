import {
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from "@mui/material";
import dotIcon from "../../assets/dots.png";

const Action = (props) => {
  console.log(props)
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <FormControl fullWidth>
        <label htmlFor="demo-simple-select">
          <img
            src={dotIcon}
            style={{
              height: "25px",
            }}
            alt=""
          />
        </label>
        <select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Action"
        >
          <option value="view">VIEW</option>
          <option value="edit">EDIT</option>
        </select>
      </FormControl>
    </Box>
  );
};

export default Action;
