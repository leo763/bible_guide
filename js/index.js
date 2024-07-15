var week, book;

// Create a new Date object representing the current date and time
var currentDate = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
var dayOfWeek = currentDate.getDay();

// Get the week number
// The ISO week date system is used, where weeks start on Monday
// The first week of the year contains January 4th
var onejan = new Date(currentDate.getFullYear(), 0, 1);
var weekNumber = Math.ceil((((currentDate - onejan) / 86400000) + onejan.getDay()) / 7);
// var weekNumber1 = Math.ceil((((currentDate - onejan) / 86400000) + onejan.getDay() + 1) / 7);



setInterval(() => {
    // Create a new Date object representing the current date and time
    var currentDate1 = new Date();

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    var date1 = currentDate1.getDate() < 10 ? '0'+currentDate1.getDate() : currentDate1.getDate();
    var mon1 = currentDate1.getMonth() < 10 ? '0'+(currentDate1.getMonth() + 1) : currentDate1.getMonth() + 1;
    var yr1 = currentDate1.getFullYear();
    var hr1 = currentDate1.getHours() < 10 ? '0'+currentDate1.getHours() : currentDate1.getHours();
    var min1 = currentDate1.getMinutes() < 10 ? '0'+currentDate1.getMinutes() : currentDate1.getMinutes();
    var sec1 = currentDate1.getSeconds() < 10 ? '0'+currentDate1.getSeconds() : currentDate1.getSeconds();

    document.getElementById('time').innerText = yr1 + '-' + mon1 + '-' + date1 + ' ' + hr1 + ':' + min1 + ':' + sec1;


}, 1000);






 
 var books = [
    [
        ['Romans', 16, 2, 0, -1],
        ['1 Corinthians', 16, 2, 0, -1],
        ['2 Corinthians', 13, 3, 0, -1, 'formula1', 1],
        ['Galatians', 6, 3, 0, -1],
        ['Ephesians', 6, 3, 0, -1],
        ['Philippians', 4, 2, 0, -1],
        ['Colossians', 4, 2, 0, -1],
        ['1 Thessalonians', 5, 3, 0, -1, 'formula1', 1],
        ['2 Thessalonians', 3, 3, 0, -1, 'formula'],
        ['1 Timothy', 6, 3, 0, -1],
        ['2 Timothy', 4, 2, 0, -1],
        ['Titus', 3, 3, 0, -1, 'formula'],
        ['Philemon', 1, 1, 0, -1, 'formula'],
        ['Hebrews', 13, 4, 0, -1, 'formula2', 1],
        ['James', 5, 3, 0, -1, 'formula1', 1],
        ['1 Peter', 5, 3, 0, -1, 'formula1', 1],
        ['2 Peter', 3, 3, 0, -1, 'formula'],
        ['1 John', 5, 3, 0, -1, 'formula1', 1],
        ['2 John', 1, 1, 0, -1, 'formula'],
        ['3 John', 1, 1, 0, -1, 'formula'],
        ['Jude', 1, 1, 0, -1, 'formula'],
    ],
    [
        ['Genesis', 50, 3, 0, -1, 'formula3', 1, 1],
        ['Exodus', 40, 4, 0, -1],
        ['Leviticus', 27, 3, 0, -1],
        ['Numbers', 36, 4, 0, -1],
        ['Deuteronomy', 34, 3, 0, -1, 'formula4', 1],

    ],
    [
        ['Joshua', 24, 5, 0, -1, 'formula5', 1],
        ['Judges', 21, 6, 0, -1, 'formula2', 1],
        ['Ruth', 4, 6, 0, -1, 'formula2', 1],
        ['1 Samuel', 31, 5, 0, -1, 'formula7', 1],
        ['2 Samuel', 24, 4, 0, -1, 'formula3', 1, 1],
        ['1 Kings', 22, 4, 0, -1, 'formula3', 1, 1],
        ['2 Kings', 25, 5, 0, -1],
        ['1 Chronicles', 29, 4, 0, -1, 'formula3', 1],
        ['2 Chronicles', 36, 5, 0, -1, 'formula6', 1],
        ['Ezra', 10, 5, 0, -1],
        ['Nehemiah', 9, 5, 0, -1, 'formula3', 1, 1],
        ['Esther', 10, 5, 0, -1],
    ],
    [
        ['Psalms', 150, 3, 0, -1, 'formula8', 1]
    ],
    [
        ['Job', 42, 2, 0, -1],
        ['Proverbs', 31, 1, 0, -1, 'formula9', 1],
        ['Ecclesiastes', 12, 2, 0, -1],
        ['Song', 8, 2, 0, -1],
    ],
    [
        ['Isaiah', 66, 6, 0, -1, 'formula1', 1],
        ['Jeremiah', 52, 6, 0, -1, 'formula10', 1],
        ['Lamentations', 4, 4, 0, -1, 'formula'],
        ['Ezekiel', 48, 6, 0, -1],
        ['Daniel', 12, 6, 0, -1],
        ['Hosea', 14, 7, 0, -1],
        ['Joel', 4, 4, 0, -1, 'formula'],
        ['Amos', 9, 4, 0, -1, 'formula3', 1, 1],
        ['Obadiah', 1, 1, 0, -1, 'formula'],
        ['Jonah', 4, 4, 0, -1, 'formula'],
        ['Micah', 7, 7, 0, -1, 'formula'],
        ['Nahum', 3, 3, 0, -1, 'formula'],
        ['Habakkuk', 3, 3, 0, -1, 'formula'],
        ['Zephaniah', 3, 3, 0, -1, 'formula'],
        ['Haggai', 2, 2, 0, -1, 'formula'],
        ['Zechariah', 14, 7, 0, -1],
        ['Malachi', 4, 4, 0, -1, 'formula'],
        ['Revelation', 22, 6, 0, -1, 'formula1', 1],
    ],
    [
        ['Matthew', 28, 2, 0, -1, 'formula3', 1, 2],
        ['Mark', 16, 2, 0, -1],
        ['Luke', 24, 2, 0, -1],
        ['John', 21, 2, 0, -1, 'formula3', 1, 3],
        ['Acts', 28, 2, 0, -1],
    ],

    
 ]

  // Get the table
  var table = document.getElementById('myTable');

  // Define the number of rows and columns
  var numRows = 52;
  var numCols = 8;

  // Create rows and columns dynamically
  for (var i = 0; i < numRows; i++) {
    var row = table.insertRow(-1); // -1 appends the row at the end

    for (var j = 0; j < numCols; j++) {
      var cell = row.insertCell(j);
      if (j === 0) {
        cell.textContent = i+1;
        cell.style.backgroundColor = 'lightblue';
      }


      var range = 0;
        for (let index = 0; index < books.length; index++) {
            if (j === (index + 1)) {
                for (let index1 = 0; index1 < books[index].length; index1++) {
                    if (books[index][index1][3] < books[index][index1][1]) {
                        range = books[index][index1][2];

                        if (books[index][index1][5] === 'formula1') {
                            range  = books[index][index1][6] % 2 == 0 ?  books[index][index1][2] - 1: books[index][index1][2];
                            books[index][index1][6]++;
                        } 

                        if (books[index][index1][5] === 'formula2') {
                            range  = books[index][index1][6] == 1 ? books[index][index1][2] :  (books[index][index1][2] - 1);
                            books[index][index1][6]++;
                        } 

                        if (books[index][index1][5] === 'formula3') {
                            range  = books[index][index1][6] <= books[index][index1][7] ? books[index][index1][2] :  (books[index][index1][2] + 1);
                            books[index][index1][6]++;
                        } 

                        if (books[index][index1][5] === 'formula4') {
                            range  = books[index][index1][6] != 6 ? books[index][index1][2] :  (books[index][index1][2] + 1);
                            books[index][index1][6]++;
                        }
                        
                        if (books[index][index1][5] === 'formula5') {
                            range  = books[index][index1][6] == 5 ? books[index][index1][2] - 1 :  (books[index][index1][2]);
                            books[index][index1][6]++;
                        } 

                        if (books[index][index1][5] === 'formula6') {
                            range  = books[index][index1][6] <= 3 ? books[index][index1][2] :  (books[index][index1][2] - 1);
                            books[index][index1][6]++;
                        } 

                        if (books[index][index1][5] === 'formula7') {
                            range  = books[index][index1][6] == 6 ? books[index][index1][2] + 1 :  (books[index][index1][2]);
                            books[index][index1][6]++;
                        } 

                        if (books[index][index1][5] === 'formula8') {

                            if(books[index][index1][6] == 41){
                                range  = books[index][index1][2] - 2;
                            }
                            else if(books[index][index1][6] == 1 || books[index][index1][6] == 40 || books[index][index1][6] == 42){
                                range  = books[index][index1][2] - 1;
                            }
                            else{
                                range  = books[index][index1][2];
                            } 
                            books[index][index1][6]++;
                        } 

                        if (books[index][index1][5] === 'formula9') {
                            range  = books[index][index1][6] % 2 == 1 ?  books[index][index1][2]: books[index][index1][2] + 1;
                            books[index][index1][6]++;
                        } 

                        if (books[index][index1][5] === 'formula10') {
                            range  = (books[index][index1][6] == 1 || books[index][index1][6] == 10) ?  books[index][index1][2]: books[index][index1][2] - 1;
                            books[index][index1][6]++;
                        } 

                        if (weekNumber === i+1) {
                            week = weekNumber;
                            cell.classList = 'text-white bg-secondary';
                            if (dayOfWeek === j-1) {
                                // cell.style.backgroundColor = 'green';
                                cell.classList = 'text-white bg-primary';
                                cell.focus();
                                book =  books[index][index1][0] + (books[index][index1][5] !== 'formula' ? ('(' + (books[index][index1][3]+1) + '-' + (books[index][index1][3] + range)+ ')') : '');
                                cell.onClick(alert(book));
                            }
                        }

                        cell.innerHTML = books[index][index1][0] + (books[index][index1][5] !== 'formula' ? ('<br>' + (books[index][index1][3]+1) + '-' + (books[index][index1][3] + range)) : '');
                        books[index][index1][4] = books[index][index1][3];
                        books[index][index1][3] = books[index][index1][3] + range;
 
                        break;  
                    }
                }
            } 
        }

    }
  }

  document.getElementById('content').innerHTML = '<span>WEEK: '+ week + '</span> <span>' + book + '</span>';
