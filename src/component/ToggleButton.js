import ToggleButton from "@mui/material/ToggleButton";
import CheckIcon from "@mui/icons-material/Check";
import useTheme from "./contexts/theme";

const ThemeToggle = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <ToggleButton
      className={themeMode === "dark" ? "toggle-dark" : "toggle-light p-0 w-10"}
      value="theme"
      selected={themeMode === "dark"}
      onChange={onChangeBtn}
    >
      {themeMode === "dark" ? "🌙" : "☀️"}
    </ToggleButton>
  );
};


export default ThemeToggle;
