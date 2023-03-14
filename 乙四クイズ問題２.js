//問題と解答
originalqa = new Array()//問題と解答
originalqa = new Array()
originalqa[1] = ["法別表第一に掲げる第4類の危険物の品名に該当しないものはどれ？", "特殊引火物", "第1石油類", "アルコール類","アルキルアルミニウム","第4石油類", 4];
originalqa[2] = ["法令上、予防規程に関する説明として、最も適切なものはどれ？", "製造所等における危険物保安監督及び危険物取扱者の責務を定めた規定をいう。", "製造所等の点検について定めた規程をいう", "製造所等の火災を予防するため、危険物の保安に関し必要な事項を定めた規程をいう。","製造所等における危険物保安総括管理者の責務を定めた規程をいう。","危険物の危険性をまとめた規程をいう。", 3];
originalqa[3] = ["法令上、危険物の貯蔵の技術上の基準として、次のうち誤っているものはどれか。+", "貯蔵所には、原則として危険物以外の物品を貯蔵してはならない。", "屋内貯蔵所においては、容器に収納して貯蔵する危険物の温度が60℃を超えないように必要な措置を講じなければならない。", "移動貯蔵タンクには、当該タンクに貯蔵し、又は取り扱う危険物の類、品名及び最大数量を表示しなければならない。","屋外貯蔵タンクの周囲に防油堤が設けられている場合、当該防油堤の水抜口を通常閉鎖しておき、内部に滞油し、又は滞水したときは遅滞なく排出しなければならない。","移動タンク貯蔵所には、「完成検査済証」、「定期点検記録」、「危険物貯蔵所譲渡・引渡の届出書」、「危険物の品名、数量又は指定数量の倍数の変更届出書」を備え付けなければならない。", 2];
originalqa[4] = ["法別表第１に定める危険物の品名と物品名の組合せとして、次のうち誤っているものはどれか。", "ジエチルエーテルは特殊引火物に該当する。", "ガソリンは第1石油類に該当する。", "軽油は第2石油類に該当する。","重油は第3石油類に該当する。","クレオソート油は第4石油類に該当する。", 5];
originalqa[5] = ["法令上、予防規程に定めなければならない事項として、該当しないものは次のうちどれか。", "危険物の在庫の管理と発注に関すること。", "危険物の保安に関する業務を管理する者の職務及び組織に関すること。", "危険物の取扱い作業の基準に関すること。","災害及びその他の非常の場合に対する、取るべき措置に関すること。","危険物の保安に係る業務に従事する者に対する保安教育に関すること。", 1];
originalqa[6] = ["法令上、製造所等の所有者等に対し、製造所等の使用停止を命ぜられる事由として、次のうち誤っているものはどれか。", "給油取扱所の構造を無許可で変更したとき。", "完成検査を受けないで、屋内貯蔵所を使用したとき。", "地下タンク貯蔵所の定期点検を規定の期間内に行わなかったとき。"," 基準違反の製造所等に対し、修理、改造又は移転命令に従わなかったとき。","移動タンク貯蔵所の危険物取扱者が危険物の取扱作業の保安に関する講習を受講していないとき。", 5];
originalqa[7] = ["法令上、次に掲げる製造所等のうち、危険物を貯蔵し又は取り扱う建築物等の周囲に空地を保有しなければならないものはどれか。", "屋外貯蔵所", "屋内タンク貯蔵所", "地下タンク貯蔵所","給油取扱所","移動タンク貯蔵所", 1];
originalqa[8] = ["消火設備について次のうち正しいものはどれか。", "消火設備は第１種から第６種に区分されている。", "第４類の危険物に適応する消火設備を第４種消火設備という。", "泡を放射する大型消火器は第３種消火設備である。","乾燥砂は第５種の消火設備に該当する。","消火粉末を放射する小型消火器は第４種消火設備である。", 4];
originalqa[9] = ["法令上、製造所等における地下貯蔵タンク及び地下埋設配管の規則に定める点検について、次のうち正しいものはどれか。", "点検は、完成検査済証の交付を受けた日又は直近の漏れの点検を行った日から5年を超えない日までの間に1回以上行わなければならない。", "点検の記録の保存期間は、1年間である。", "点検は、危険物取扱者又は危険物施設保安員で、漏れの点検方法に関する知識及び技能を有する者が行うことができる。","点検は、タンク容量3,000Ｌ以上のものについて行わなければならない。","点検を実施した場合は、その結果を消防長又は消防署長に報告しなければならない。", 3];
originalqa[10] = ["法令上、製造所等の所有者等が、あらかじめ市町村長等に届け出なければならないものは次のうちどれか。", "製造所等の譲渡又は引渡しをしたとき。", "製造所等の位置、構造、設備を変更しないで、貯蔵し、又は取り扱う危険物の品名･数量又は指定数量の倍数を変更しようとするとき。", "製造所等の用途を廃止したとき。","危険物保安監督者を定めなければならない製造所等において、危険物保安監督者を定めたとき。"," 危険物施設保安員を定めなければならない製造所等において、危険物施設保安員を定めたとき。", 2]

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
