import Slider from "@mui/joy/Slider";
import Typography from "@mui/joy/Typography";

export const SliderScore = ({ setScore }) => {
  return (
    <div>
      <Typography id="SilderTitel">Score auswählen</Typography>
      <Slider
        sx={{ width: 150 }}
        size="md"
        orientation="horizontal"
        valueLabelDisplay="auto"
        defaultValue={0}
        min={0}
        step={25}
        max={100}
        marks
        onChange={(e, newValue) => setScore(newValue)}
      />
    </div>
  );
};
