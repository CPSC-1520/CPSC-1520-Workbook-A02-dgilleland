const students = [
    { name: 'Stewart Dent', mark: 90 },
        { name: 'Anna Lyst', mark: 75 },
            { name: 'Phobe Nominal', mark: 80 },
                { name: 'Derdrie Veloper', mark: 85 },
                    { name: 'Hugh Mann', mark: 95 },
                        { name: 'Pete Sariya', mark: 70 },
                            { name: 'Marge Arin', mark: 65 },
                                { name: 'Artie Fishel', mark: 60 },
                                    { name: 'Minnie Mum', mark: 55 },
                                        { name: 'Max E. Mumm', mark: 50 },
                                          ];
console.clear()
console.table(students)
const highest = function(previousHigh, currentStudent) {
if(!previousHigh) return currentStudent;
if(previousHigh.mark > currentStudent.mark) return previousHigh;
return currentStudent;
}
students.reduce(highest)
students.talkAbout = function(callBack) {
let self = this;
for(let index = 0; index < self.length; index++) {
  callback(self[index]);
}
}
const isHonours = function(somebody) {
if(somebody.mark > 80)
   console.log(somebody.name + ' has honours');
else if(somebody.mark >= 50)
   console.log(somebody.name + ' has passed');
else
   console.log('so sad for ' + somebody.name);
}
students.talkAbout = function(callback) {
let self = this;
for(let index = 0; index < self.length; index++) {
  callback(self[index]);
}
}
students.talkAbout(isHonours)