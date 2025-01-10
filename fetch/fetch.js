//fetchは外部からデータを貰うための関数
fetch("test.txt")
   .then((data) => data.txt())
   .then((res) => console.log(res));

   console.log("done");
