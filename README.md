# Snake Game

### Objective
In the game of Snake, the player uses the arrow keys to move a "snake" around the board. As the snake finds food, it eats the food, and thereby grows larger. The game ends when the snake eats the poison or either moves off the screen or moves into itself. The goal is to make the snake as large as possible before that happens.

### History
Snake is a video game that came out in the late 1970s and has maintained popularity since then, becoming somewhat of a classic. The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the "walls" that surround the playing area. Each time the snake eats a piece of food, its tail grows longer, making the game increasingly difficult. The user controls the direction of the snake's head (up, down, left, or right), and the snake's body follows. The player cannot stop the snake from moving while the game is in progress.

### Rules of the Game
+ The snake starts at the center of the board, moving north (upward).
+ The snake moves at a constant speed.
+ The snake moves only north, south, east, or west (ignore the versions of the game where the snake can move in curves).
+ The snake "moves" by adding a square to its head and simultaneously deleting a square from the tip of its tail.
+ "Orange circle" appear at random locations, and persist for a random amount of time (but usually long enough for it to be possible for the snake to get to the apple).
+ Blue circle is a poison, if the snake eat that food he will die and the game will be over.
+ There is always exactly one orange circle visible at any given time.
+ When the snake "eats" (runs into) an orange circle, it gets longer.
+ (This is hard to describe, so play a couple of games to see what I mean.) When the snake gets longer, say by n squares, it does so by not deleting squares from its tail for the next n moves.
+ The game continues until the snake "dies".
+ A snake dies by either (1) running into the edge of the board, or (2) by running into its own tail.
+ The final score is based on the number of apples eaten by the snake.

### Take a look
![WhatsApp Image 2021-07-26 at 02 41 46](https://user-images.githubusercontent.com/65845120/126913818-8f6c259f-7662-4a67-8e12-e0a8bf952aaa.jpeg)
![WhatsApp Image 2021-07-26 at 02 41 46 (2)](https://user-images.githubusercontent.com/65845120/126913808-e2cbba79-f2c7-426c-ae49-63b8fa864229.jpeg)
![WhatsApp Image 2021-07-26 at 02 41 46 (1)](https://user-images.githubusercontent.com/65845120/126913810-4626a709-4147-4b56-a264-b9d4fda89257.jpeg)
