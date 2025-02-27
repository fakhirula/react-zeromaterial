const formatThousandNumber = (num, format) => {
  if (format === "ENG") {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  }

  if (format === "IND") {
    const numFormat = new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);

    return numFormat;
  }

  if (format === "default") {
    const numFormat = parseFloat(num.replace(/,/g, ''))
    return numFormat;
  }

  return num.toString();
};

const formatDateString = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
    new Date(dateString)
  );
  return formattedDate;
};

const formatTruncateText = (text) => {
  if (text.length > 100) {
    return text.substring(0, 100) + "...";
  }
  return text;
};

const formatIsActive = (status) => {
  return status ? "active" : "inactive";
};

const formatPageName = (pageName) => {
  return pageName
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatDaysLeft = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const differenceInTime = end.getTime() - start.getTime();

  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
};

const formatProgress = (targetDonation, collectedDonation) => {
  const target = parseFloat(targetDonation);
  const collected = parseFloat(collectedDonation);

  if (target === 0) {
    return 0;
  }

  const progress = (collected / target) * 100;

  return Math.min(progress, 100).toFixed(2);
};

export {
  formatThousandNumber,
  formatDateString,
  formatTruncateText,
  formatIsActive,
  formatPageName,
  formatDaysLeft,
  formatProgress,
};
