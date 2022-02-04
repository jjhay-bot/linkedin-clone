import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import Badge from "@mui/material/Badge";

const IconTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab icon={<HomeIcon size="small" />} label="Home" />

      {/* <MailIcon color="action" /> */}

      <Tab
        icon={
          <Badge badgeContent={4} color="secondary">
            <PeopleAltTwoToneIcon />
          </Badge>
        }
        label="MY NETWORK"
      />

      <Tab icon={<WorkTwoToneIcon />} label="JOBS" />
      <Tab icon={<EmailTwoToneIcon />} label="MESSAGE" />
      <Tab icon={<NotificationsNoneTwoToneIcon />} label="NOTIFICATION" />
      <Tab icon={<AccountCircleTwoToneIcon />} label="ME" />
      <Tab icon={<WidgetsTwoToneIcon />} label="WORK" />
    </Tabs>
  );
};

export default IconTab;
