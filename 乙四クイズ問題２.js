//問題と解答
originalqa = new Array()
originalqa[1] = ["法別表第一に掲げる第4類の危険物の品名に該当しないものはどれ？", "特殊引火物", "第1石油類", "アルコール類","アルキルアルミニウム","第4石油類", 4];
originalqa[2] = ["法令上、予防規程に関する説明として、最も適切なものはどれ？", "製造所等における危険物保安監督及び危険物取扱者の責務を定めた規定をいう。", "製造所等の点検について定めた規程をいう", "製造所等の火災を予防するため、危険物の保安に関し必要な事項を定めた規程をいう。","製造所等における危険物保安総括管理者の責務を定めた規程をいう。","危険物の危険性をまとめた規程をいう。", 3];
originalqa[3] = ["法令上、品名の異なる危険物？", "禍牛", "鍋牛", "蝸牛","","", 4];
originalqa[4] = ["バッタを漢字で書くとどれ？", "飛蝗", "飛蟻", "飛脚","","", 1];
originalqa[5] = ["タツノオトシゴを英語にするとどれ？", "sea fish", "sea horse", "sea dragon","","", 4];
originalqa[6] = ["マグロを英語にするとどれ？", "funa", "suna", "tuna","","", 2];
originalqa[7] = ["トンボを英語にするとどれ？", "fly", "dragonfly", "butterfly","","", 1];
originalqa[8] = ["ヒトデを英語にするとどれ？", "starfish", "starshell", "starmine","","", 2];
originalqa[9] = ["恒星の中で最も明るい星は？", "デネブ", "スピカ", "シリウス","","", 5];
originalqa[10] = ["惑星の中で最も重たいのはどれ？", "太陽", "木星", "天王星","","", 4]

function shuffle(array){
  length = array.length
  index =-1
  lastIndex = -1
  result = [...array]
  while (++index < length) {
   rand = index + Math.floor(Math.random()*(lastIndex - index + 1))
   value = result[rand]
   result[rand] = result[index]
   result[index] = value
  }
  return result
}
qa = shuffle(originalqa).filter(function (x){return !!x})

//初期設定
q_sel = 5; //選択肢の数
count = 1; //問題番号
setReady(count);

//初期設定

function setReady(count) {
    
    ansers = new Array(); //解答記録

    //最初の問題
    quiz(count);
}

//問題表示
function quiz(count) {
    //問題
    document.getElementById("text_q").innerHTML = (count) + "問目：" + qa[count][0];
    //選択肢
    s = "";
    for (n = 1; n <= q_sel; n++) {
        s += "<div> [<a href='javascript:anser(" + n + ")'>" + n + "：" + qa[count][n] + "</a>] <div>";
    }
    document.getElementById("text_s").innerHTML = s;
}
//解答表示
function anser(num) {
    var s;
    // 解答
    s = (count + 1) + "問目↓";
    //答え合わせ
    if (num == qa[count][q_sel + 1]) {
        //正解
        s += "○" + qa[count][num];
        ansers[count] = "○";
    } else {
        s += "×" + qa[count][num];
        ansers[count] = "×";
    }

    document.getElementById("text_a").innerHTML = s;
    count++

    if (count < qa.length) {
        document.getElementById("next-button").innerHTML = 
        '<a href="javascript:quiz(' + (count) +')">　　Next　　</a>'
    } else {
        document.getElementById("text_a").innerHTML="お疲れ様でした！！";
        //終了
        s = "<table border='2'><caption>成績発表</caption>";
        //1行目
        s += "<tr><th>問題</th>";
        for (n = 0; n < qa.length -1 ; n++) {
            s += "<th>" + (n + 1) + "</th>";
        }
        s += "</tr>";
        //2行目
        s += "<tr><th>成績</th>";
        for (n = 1; n < qa.length; n++) {
            s += "<td>" + ansers[n] + "</td>";
        }
        s += "</tr>";
        s += "</table>";
        document.getElementById("text_q").innerHTML = s;
        //次の選択肢
        s = "【<a href='javascript:history.back()'>前のページに戻る</a>】";
        s += "【<a href=''> 最初に戻る</a>】";
        document.getElementById("text_s").innerHTML = s;
        document.getElementById("next-button").innerHTML="";
    }
}

