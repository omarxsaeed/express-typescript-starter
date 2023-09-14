const getUptime = () => {
  const uptime = process.uptime();
  const days = Math.floor(uptime / 86400); // 86400 seconds in a day
  const hours = Math.floor((uptime % 86400) / 3600); // 3600 seconds in an hour
  const minutes = Math.floor((uptime % 3600) / 60); // 60 seconds in a minute
  const seconds = Math.floor(uptime % 60);

  const segments = [];

  if (days > 0) segments.push(`${days} ${pluralize(days, "day")}`);
  if (hours > 0) segments.push(`${hours} ${pluralize(hours, "hour")}`);
  if (minutes > 0) segments.push(`${minutes} ${pluralize(minutes, "minute")}`);
  if (seconds > 0) segments.push(`${seconds} ${pluralize(seconds, "second")}`);

  return segments.join(", ");
};

const pluralize = (count: number, noun: string, suffix: string = "s"): string => {
  return `${noun}${count === 1 ? "" : suffix}`;
};

export default getUptime;
