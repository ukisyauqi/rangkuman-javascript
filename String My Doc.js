/*~~~ Array => String => Number => String => Array ~~~*/
a = [1, 2, "3", "4"];
a = a.join(""); //a = "1234"
a = parseInt(a); //a = 1234 | parseInt(a,16) => num (hexa)           | parseFloat(), Number()
a = a.toString(); //a = "1234"
a = a.split(""); //a = ['1','2','3','4']

/*~~~ akses char dgn index ~~~*/
a = "hello world";
b = a[a.length - 1]; //"d"   gada a[-1]
b = a.slice(1, 4); //"ell" gada a[1:3] | ditambah 1 dari last idx | ber;aku -1
b = a.substr(2, 5); //"llo w" dari i=2 ambil sebanyak 5

/*~~~ NgeCHECK string ~~~*/
a = "hello world.";
b = a.endsWith("ld."); //true
b = a.startsWith("he"); //true
b = a.includes("wor"); //true

/*~~~ Find char in array ~~~*/
a = "Hello world lo";
b = a.indexOf("lo"); //4
b = a.indexOf("p"); //-1
b = a.lastIndexOf("lo"); //12 ; cari "lo" dari belakang, idx "l"
b = a.match(/lo/g); //['lo','lo'] ; return 'lo' yg ada di string
b = a.match(/lo/g).length; //2 ; ada berapa 'lo' di string
/*~~~ indexOf vs search ~~~*/
a = "aokWokWaoWAoWk".indexOf("W", 7); //9 | searchnya dari idx 7 | kalo pake /w/i => -1
a = "aokWokWaoWAoWk".search(/w/i); //3 | bisa pake regEx

/*~~~ toLowerCase toUpperCase ~~~*/
a = "HALLO GUYS DAVID DISINI";
b = a.toLowerCase(); //hallo guys david disini
c = b.toUpperCase(); //HALLO GUYS DAVID DISINI
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
d = c.capitalize(); //Hallo guys david disini
String.prototype.capitalizeAll = function () {
  var arr = this.split(" ");
  var res = [];
  for (i of arr) {
    res.push(i.charAt(0).toUpperCase() + i.slice(1).toLowerCase());
  }
  return res.join(" ");
};
e = d.capitalizeAll(); //Hallo Guys David Disini

/*~~~ Duplicate string ~~~*/
a = "ha";
b = a.repeat(5); //"hahahahaha" | nggak berlaku "ha"*5

/*~~~ Compare string ~~~*/
a = "12";
b = "bz"; //if a<b => -1, if a==b => 0, if a>b => 1
c = a.localeCompare(b); //c = -1

/*~~~ Replace anggota string ~~~*/
a = "HAAAI";
b = a.replace("A", "E"); //"HEAAI" | first match
b = a.replace(/A/g, "E"); //"HEEEI" | all match

/*~~~ Remove white space ~~~*/
a = "       Hello World!        ";
b = a.trim();

/*~~~ UNICODE (ASCII) ~~~*/
a = "hello";
b = a.charCodeAt(0); //104 ASCII dari h
b = String.fromCharCode(104); //"h" Char dari ASCII 104

// fungsi untuk mengganti char di index tertentu
String.prototype.modifStr = function (index, changeWithStr) {
  let res = this.split("");
  res[index] = changeWithStr;
  res = res.join("");
  return res;
};
