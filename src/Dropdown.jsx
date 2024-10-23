import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export const Dropdown = ({ options, setoption, placeholder }) => {
  return (
    <Select
      sx={{ height: "50px" }}
      color="primary"
      size="md"
      placeholder={placeholder}
      onChange={(e, newValue) => setoption(newValue)}
    >
      {options.map((eintrag, index) => (
        <Option key={index} name={eintrag} value={eintrag}>
          {eintrag}
        </Option>
      ))}
    </Select>
  );
};
