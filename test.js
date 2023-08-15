let count = 0;

function cc(card) {
  // Змініть код лише під цим рядком

  switch (card) {
    case 2:
      count++;
      break;
    case 3:
      count++;
      break;
    case 4:
      count++;
      break;
    case 5:
      count++;
      break;
    case 6:
      count++;
      break;
    case 7:
      count += 0;
      break;
    case 8:
      count += 0;
      break;
    case 9:
      count += 0;
      break;
    case 10:
      count--;
      break;
    case "J":
      count--;
      break;
    case "Q":
      count--;
      break;
    case "K":
      count--;
      break;
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    return count + ' Bet';
  }
  return count + ' Hold';
  // Змініть код лише над цим рядком
}



//cc(10);
//cc("J");
cc(7);
cc(8);
log(cc(9));