export default function () {
  return function (ms) {
    function addLeadingZeros(num) {
      const strNum = '' + num;
      return strNum.length > 1 ? strNum : '0' + strNum;
    }

    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);

    return `${addLeadingZeros(minutes)}:${addLeadingZeros(seconds % 60)}`;
  };
}
