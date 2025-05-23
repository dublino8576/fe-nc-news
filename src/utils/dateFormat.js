export const dateFormat = (created_at) => {
  const date = new Date(created_at);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  return formattedDate;
};
