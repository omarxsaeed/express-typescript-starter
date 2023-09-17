import getUptime from "../../utils/uptime";

const check = () => {
  return {
    uptime: getUptime(),
    message: "Server's healthy and running ⚡!",
    date: new Date()
  };
};

export default check;
