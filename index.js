/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const splitTimeString = timeString.split(':');
  const hour = parseInt(splitTimeString[0], 10);
  // const minute = parseInt(splitTimeString[1], 10);
  if (hour > 17) {
    return 'Good Evening'
  } else if (hour > 12) {
    return 'Good Afternoon'
  } else {
    return 'Good Morning'
  }
}
/* Write your implementation of displayMessage() */
