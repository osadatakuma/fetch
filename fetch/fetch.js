//fetchは外部からデータを貰うための関数
console.log("読み込み");
fetch("test.txt")
   .then((data) => data.txt())
   .then((res) => console.log(res));

   console.log("done");
