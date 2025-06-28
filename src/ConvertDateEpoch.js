
export const convertDateEpoch = (date) => {

    const date_time = new Date(date);
    const epochValue = Math.floor(date_time.getTime() / 1000);

    return epochValue;
};