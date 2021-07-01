export default class GameView{


   constructor(){
      console.log("init game view");

   }

   updateBoard(game){
      console.log("this is a board within GameView");
      console.log(game.board);
      for(let i = 0; i < game.board.length; i++){
         const tile = document.querySelector(`.board-tile[data-index='${i}']`);
         tile.textContent = game.board[i];
      }
   }

   findWinningCombinations() {
      const winningCombinations = [
         [0,1,2],
         [3,4,5],
         [6,7,8]
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [6,4,2]
      ]

      for(const combination of winningCombinations){
         for(position of combination){
            const [a,b,c] = combination;

            if(this.board[a] &&
               (this.board[a] === this.board[b] && this.board[a] === this.board[c]))
                  return combination;
         }
         
      }
      return null;
   }
}