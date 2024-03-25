import {
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from "@mui/material";
import dotIcon from "../../assets/dots.png";

const ActionComponent = (props) => {
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
          <option value="view">view</option>
          <option value="edit">edit</option>
        </select>
      </FormControl>
    </Box>
  );
};

export default ActionComponent;
