"use strict";

const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

class Robot {
  constructor(x = 0, y = 0, f = "NORTH") {
    this.x = x;
    this.y = y;
    this.f = f;
  }

  // these methods are here temporarily
  // they will be moved off at some point
  // when I remember to do it
  // after I build an interface

  // placement
  // to-do: constraint checking
  // to-do: make less redundant
  place(x = 0, y = 0, f = "NORTH") {
    this.x = x;
    this.y = y;
    this.f = f;
  }
  // directional movement
  // to-do: check constraints of table
  move() {
    if (this.f == "NORTH" && this.y < 5) {
      this.y++;
    }
    if (this.f == "EAST" && this.x < 5) {
      this.x++;
    }
    if (this.f == "SOUTH" && this.y > 0) {
      this.y--;
    }
    if (this.f == "WEST" && this.x > 0) {
      this.x--;
    }
  }
  // left rotation
  // to-do: make this like, a single function for turnin'
  left() {
    //get new direction index
    let dir = directions.indexOf(this.f) - 1;
    if (dir >= 0) {
      //if valid return direction from index
      this.f = directions[dir];
    } else {
      //if invalid, get last item from directions
      this.f = directions[directions.length - 1];
    }
  }
  // right rotation
  right() {
    //get index for new direction
    let dir = directions.indexOf(this.f) + 1;
    if (dir < directions.length) {
      //if valid return direction from index
      this.f = directions[dir];
    } else {
      //if invalid, get first item from directions
      this.f = directions[0];
    }
  }
  // report position to console
  report() {
    return console.log(`${this.x}, ${this.y}, ${this.f}`);
  }
}

// technically this isn't required for anything at the moment but it's here :)
class Table {
  constructor(length = 4, width = 4) {
    this.length = length;
    this.width = width;
  }
}
/* Old bad code is staying here as a reminder that I should add it to the above
const place = function (x, y, f) {
  //check if all values are valid & if so send it
  if (
    x >= table.westConstraint &&
    x <= table.eastConstraint &&
    y >= table.southConstraint &&
    y <= table.northConstraint &&
    directions.indexOf(f) >= 0
  ) {
    robot.xPosition = x;
    robot.yPosition = y;
    robot.facing = f;
  }
};

const setTableSize = function (n, e, s, w) {
  //check all values are valid numbers
  if (!isNaN(n) && !isNaN(e) && !isNaN(s) && !isNaN(w) && n >= s && e >= w) {
    table.northConstraint = Number(n);
    table.eastConstraint = Number(e);
    table.southConstraint = Number(s);
    table.westConstraint = Number(w);
  }
};

const report = function () {
  if (
    //check all values exist for robot
    robot.xPosition === null ||
    robot.yPosition === null ||
    robot.facing === null
  ) {
    console.log(`I haven't been placed yet!`);
  } else if (
    //check robot is in bounds
    robot.yPosition > table.northConstraint ||
    robot.yPosition < table.southConstraint ||
    robot.xPosition > table.eastConstraint ||
    robot.xPosition < table.westConstraint
  ) {
    console.log(
      `Uh oh, the table seems to have shrunk - I'm currently floating in the air at ${robot.xPosition},${robot.yPosition}. You better put me back, I can't move like this!`
    );
  } else {
    console.log(
      `I am currently at ${robot.xPosition},${robot.yPosition}, facing ${robot.facing}!`
    );
  }
}; */

const toyRobot = new Robot();

console.log(
  `Hi this is a conceptual robot. These are commands:
    toyRobot.place(x, y, f): places the robot at the specified coordinates facing the given cardinal direction (NORTH, EAST, SOUTH, WEST)
    toyRobot.move(): moves the robot forward one grid unit
    toyRobot.left(): turns 90 degrees to the left
    toyRobot.right(): like the above but the other way
    toyRobot.report(): the robot will tell you where it is and the direction it's facing

    have fun!`
);
