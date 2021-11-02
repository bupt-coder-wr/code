class ScorePanel {
  sroce = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  MAX_LEVEL: number;
  upScore: number;

  constructor(MAX_LEVEL: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.MAX_LEVEL = MAX_LEVEL;
    this.upScore = upScore;
  }
  addScore() {
    this.scoreEle.innerHTML = ++this.sroce + "";
    if (this.sroce % this.upScore === 0) {
      this.levelUp();
    }
  }
  levelUp() {
    if (this.level < this.MAX_LEVEL) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}
export default ScorePanel;
