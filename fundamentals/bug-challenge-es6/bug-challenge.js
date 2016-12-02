export default class BugChallenge {
  //Do NOT change the top10Movies and top10Actors variables to fix your tests
  //believe me: the problem is in bug() functions, not in these arrays ;)
  top10Movies = [
    'AI',
    'Shawshank Redemption',
    'Godfather',
    'Pulp Fiction',
    'Fight club',
    'Forrest Gump',
    'Inception',
    'Goodfellas',
    'The Matrix',
    'Interstellar'
  ]
  top10Actors = [
    'Marlon Brando',
    'Jack Nickolson',
    'Robert De Niro',
    'Al Pacino',
    'Daniel Day-Lewis',
    'Duston Hoffman',
    'Tom Hanks',
    'Anthony Hopkins',
    'Paul Newman',
    'Denzel Washington'

  ]
  //------
  // Bugs

    bug1() {
      const people = [{
        name: 'Alice',
        age: 25
      }, {
        name: 'Bob',
        age: 27
      }, {
        name: 'Charlie',
        age: 40
      }];

      for (let person of people) {
        console.log(`${person.name} is ${person.age}`);
      }
    }
    /* bug1: I replace the keyword 'in' within the for loop with 'of' */
    
    bug2() {
      const array = [1, 2, 3, 4];
       
        while (array.length > 0) {
          console.log(array.pop());
        }
    }
   /* bug2: I used console log and the functions pop() so that every time the function loops 
      it prints out the last element in the array. So that it is reversed.*/
   
    bug3() {
      const array = [];
      array[0] = 'a';
      array[1] = 'b';
      array[2] = 'c';
      
       
      let total = 0;
      for (let key in array) {
         total = ++key;
      }

      console.log(total);
    }
  /* bug3: First I replace the empty curly bracket with an empty square bracket as it is an array.
           Then I increment the index number of the array and assigned it to the variable total. */
   
    bug4() {
      // We list all movies, except the top 3.
    
      for (let index = 3; index < this.top10Movies.length; index++) {
        console.log(`movie: ${this.top10Movies[index]}`);
      }

      // We also list all actors, except the top 3.
      
      for (let index = 3; index < this.top10Actors.length; index++) {
        console.log(`actor: ${this.top10Actors[index]}`);
      }
    }
   /* bug4: The first for loop was working but the second one was saying undefined as we have not 
            specified the starting for the loop that is the the third index.*/
   
    bug5() {
      const defaultMethod = 'GET';
      const defaultUseCaching = true;

      function fetch(options) {
        const url = options.url;
        const method = options.method || defaultMethod;
        const useCaching = options.useCaching;

        console.log(`fetch: ${method} ${url} (useCaching=${useCaching})`);
      }

      fetch({
        url: 'http://www.example.com',
        useCaching: false
      });
    }

  /* bug5: I deleted the default value for caching on the const 'useCaching'. Although I need more explanation 
          on this. And I hope I have done the right thing here. */ 
        
   
    bug6() {
      function run(options = {}) {
        if (options.script == undefined) {
          options.script = 'main.js';
        }

        console.log(`run: script=${options.script}`);
      }

      run();
    }
  /* bug6: I have declared the script property within the parameter and as an empty bracket. 
           So it is undefined which meets the if statement.*/
   
    bug7() {
      function run(options = {}) {
        if (options.stopOnError === undefined) {
          options.stopOnError = 'all';
        } 
           console.log(`run: stopOnError=${options.stopOnError}`);
      }
     
      run();
      run({stopOnError: null});
    }
  /* bug7: The comparison operator inside the if statement must compare for the exact value and
       type '===' inorder to run the second callback*/
   
     bug8() {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          console.log(i+1);
        }, 100*i);
      }
    }
 /* bug8: I replaced 'var' with the keyword 'let' so that it can be used only with function. And I 
          also replaced the anonymous function with the arrow function.*/
   
    bug9() {
      const cars = [{
        make: 'Volvo',
        type: 'S90'
      }, {
        make: 'BMW',
        type: 'i8'
      }, {
        make: 'BMW',
        type: 'M3'
      }, {
        make: 'Audi',
        type: 'A6'
      }];

      function findCars(make) {
        return cars.filter(car =>car.make === make);
      }

      for (let bmw of findCars('BMW')) {
        console.log(`${bmw.make} ${bmw.type}`);
      }
    }
  /*bug9: The argument 'BMW' should be equal to the property of the cars.make and not assigned as it 
  used to print them all as having the same value 'BMW' */ 
   
    bug10() {
      const command = 'printHelp';

      switch (command) {
        case 'printMath':
          console.log(`√9=${Math.sqrt(9)}`);
          break;
        case 'printHelp':
          console.log('Help');
          break;
        case 'quit':
          console.log('Quitting');
          break;
      }
    }
 /* bug10: The original code doesn't have the keyword 'break;' and the exection would go continously.
          I add the keyword 'break' so that the exection can stop when a match is found.*/
    
    bug11() {
      class Game {
        constructor() {
          this.players = [];
        }

        addPlayers(names) {
          names.forEach((name) => {
             this.players.push({name, points: 0});
          });
        }
      }

      const game = new Game();
      game.addPlayers(['Alice', 'Bob']);

      for (let player of game.players) {
        console.log(`Player ${player.name} has ${player.points} points`);
      }
    }
 /* bug11:  this.players fails, because the function’s this is undefined, it is not the same as the 
            this of the constructor. This method has a second parameter whose value is passed to the 
            callback as this.*/   
    
    bug12() {
      let y = 5;

      function printVector() {
        let x = 6;
        let y = 7;

        console.log(`Printing vector at (${x}, ${y})`);
      }

      printVector();
      console.log(`y=${y}`);
    }
 /* bug12: I added the keyword let for the value 7 so that it can only be used within the function. */
   
    bug13() {
      var notInTop10 = (movieName) => {
        return this.top10Movies.indexOf(movieName) === -1
      }
      console.log('Independence Day is ' + (notInTop10('Independence Day')?'not ':'') + 'in the top 10!');
      console.log('AI is ' + (notInTop10('AI')?'not ':'') + 'in the top 10!');
      console.log('Godfather is ' + (notInTop10('Godfather')?'not ':'') + 'in the top 10!');
      console.log('Inception is ' + (notInTop10('Inception')?'not ':'') + 'in the top 10!');
    }
  /* bug13: The index of the first occurrence of the specified value if not found is -1. If the index is 
     not found that means it index is equal to -1 and prints out as not found within the top 10.  */ 
    
    bug14() {
      var isInFirstPlace = (movieName) => {
        return this.top10Movies[0] === movieName
      }  
         console.log('AI is ' + (isInFirstPlace('AI')?'':'not ') + 'best movie ever');
         console.log('Godfather is ' + (isInFirstPlace('Godfather')?'':'not ') + 'best movie ever');
      
    }
    /* bug14:Putting the console.log statements after the function declaration solved the problem. That is 
             because functions are hoisted up, and variables are not (only their declaration is).*/
    
    bug15() {
      var getAlphabeticalFirst = () => {
        return this.top10Actors.sort()[0];
      }

      console.log(`The first actor when sorted alphabetically is ${getAlphabeticalFirst()}`)
    }
    /* bug15: When I changed the anonymous function to an arrow function it works. But how it 
               works is a puzzle to me. I need an explanation on this one.*/

    bug16() {
      const ranking = this.top10Actors.indexOf('Al Pacino');
      console.log(`Al Pacino is ranked ${ranking + 1}`)
    }

    /* bug16: Before the number 1 was within a string so it was concatenated. The result was '31'.
        Now it is adding the index of the passed parameter and returning 4. But the real ranking is 
        that he is first because of the previous function which has ranked them based on alphabet.*/
}
