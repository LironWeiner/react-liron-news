export const getCalculatedFromDate = (minusDays, minusMonths) => {
    const today = new Date();
    let fromDate = today;
    if ((!minusDays && !minusMonths) || (minusDays <= 0 && minusMonths <= 0)) {
        fromDate = null;
    }
    else if (minusDays && minusDays >= 0) {
        fromDate.setDate(today.getDate() - minusDays);
        fromDate = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()}`;
    }
    else if (minusMonths && minusMonths >= 0) {
        fromDate.setMonth(today.getMonth() - minusMonths);
        fromDate = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()}`;
    }

    return fromDate;
};