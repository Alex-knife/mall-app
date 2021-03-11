/* eslint-disable no-param-reassign */
function moveTo(start, end, dom, prop) {
  let distance = 0;
  let speed = 3;
  if (end < 0) {
    speed *= -1;
  }
  const t = setInterval(() => {
    distance += speed;
    dom[prop] = start + distance;
    if (Math.abs(distance) > Math.abs(end)) {
      dom[prop] = start + end;
      clearInterval(t);
    }
  }, 2);
}

export default { moveTo };
