const format = (eachObj) => {
  let today = eachObj.updatedAt;
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let hour = String(today.getHours());
  let minute = String((today.getMinutes()<10?'0':'') + date.getMinutes());

  const stringDate = `${dd}/${mm}/${yyyy}`;
  const stringTime = `${hour}:${minute}`;

  return {
    id: eachObj.id,
    name: eachObj.name,
    title: eachObj.title,
    date: stringDate,
    time: stringTime,
  }
}

const formatMap = (arrayOfCommitments) => {
  const formatedArray = arrayOfCommitments.map((eachObj) => format(eachObj));
  console.log(formatedArray);
  return formatedArray;
}

const splitForDate = (dateInString) => {
  return dateInString.split('T')[0];
};

const splitForTime = (timeInString) => {
  const time = timeInString.split('T')[1];

  const newSplit = time.split('.')[0];

  return newSplit;
}

module.exports = {
  formatMap,
}