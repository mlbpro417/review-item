/*eslint-disable */
let itemData = [{"id":0,"title":"Product 0 Electronics","type":"Electronics"},
                  {"id":1,"title":"Product 1 Movies","type":"Movies"},
                  {"id":2,"title":"Product 2 Grocery","type":"Grocery"},
                  {"id":3,"title":"Product 3 Automotive","type":"Automotive"},
                  {"id":4,"title":"Product 4 Books","type":"Books"},
                  {"id":5,"title":"Product 5 Clothing","type":"Clothing"},
                  {"id":6,"title":"Product 6 Home/Garden","type":"Home/Garden"},
                  {"id":7,"title":"Product 7 Electronics","type":"Electronics"},
                  {"id":8,"title":"Product 8 Movies","type":"Movies"},
                  {"id":9,"title":"Product 9 Electronics","type":"Electronics"},
                  {"id":10,"title":"Product 10 Outdoors","type":"Outdoors"},
                  {"id":11,"title":"Product 11 Electronics","type":"Electronics"},
                  {"id":12,"title":"Product 12 Books","type":"Books"},
                  {"id":13,"title":"Product 13 Outdoors","type":"Outdoors"},
                  {"id":14,"title":"Product 14 Automotive","type":"Automotive"},
                  {"id":15,"title":"Product 15 Home/Garden","type":"Home/Garden"},
                  {"id":16,"title":"Product 16 Toys","type":"Toys"},
                  {"id":17,"title":"Product 17 Books","type":"Books"},
                  {"id":18,"title":"Product 18 Grocery","type":"Grocery"},
                  {"id":19,"title":"Product 19 Outdoors","type":"Outdoors"},
                  {"id":20,"title":"Product 20 Movies","type":"Movies"},
                  {"id":21,"title":"Product 21 Toys","type":"Toys"},
                  {"id":22,"title":"Product 22 Clothing","type":"Clothing"},
                  {"id":23,"title":"Product 23 Toys","type":"Toys"},
                  {"id":24,"title":"Product 24 Books","type":"Books"},
                  {"id":25,"title":"Product 25 Electronics","type":"Electronics"},
                  {"id":26,"title":"Product 26 Toys","type":"Toys"},
                  {"id":27,"title":"Product 27 Grocery","type":"Grocery"},
                  {"id":28,"title":"Product 28 Outdoors","type":"Outdoors"},
                  {"id":29,"title":"Product 29 Outdoors","type":"Outdoors"},
                  {"id":30,"title":"Product 30 Movies","type":"Movies"},
                  {"id":31,"title":"Product 31 Clothing","type":"Clothing"},
                  {"id":32,"title":"Product 32 Grocery","type":"Grocery"},
                  {"id":33,"title":"Product 33 Toys","type":"Toys"},
                  {"id":34,"title":"Product 34 Toys","type":"Toys"},
                  {"id":35,"title":"Product 35 Electronics","type":"Electronics"},
                  {"id":36,"title":"Product 36 Automotive","type":"Automotive"},
                  {"id":37,"title":"Product 37 Grocery","type":"Grocery"},
                  {"id":38,"title":"Product 38 Books","type":"Books"},
                  {"id":39,"title":"Product 39 Movies","type":"Movies"},
                  {"id":40,"title":"Product 40 Beauty","type":"Beauty"},
                  {"id":41,"title":"Product 41 Books","type":"Books"},
                  {"id":42,"title":"Product 42 Home/Garden","type":"Home/Garden"},
                  {"id":43,"title":"Product 43 Books","type":"Books"},
                  {"id":44,"title":"Product 44 Outdoors","type":"Outdoors"},
                  {"id":45,"title":"Product 45 Outdoors","type":"Outdoors"},
                  {"id":46,"title":"Product 46 Beauty","type":"Beauty"},
                  {"id":47,"title":"Product 47 Beauty","type":"Beauty"},
                  {"id":48,"title":"Product 48 Toys","type":"Toys"},
                  {"id":49,"title":"Product 49 Beauty","type":"Beauty"},
                  {"id":50,"title":"Product 50 Home/Garden","type":"Home/Garden"},
                  {"id":51,"title":"Product 51 Electronics","type":"Electronics"},
                  {"id":52,"title":"Product 52 Grocery","type":"Grocery"},
                  {"id":53,"title":"Product 53 Grocery","type":"Grocery"},
                  {"id":54,"title":"Product 54 Beauty","type":"Beauty"},
                  {"id":55,"title":"Product 55 Movies","type":"Movies"},
                  {"id":56,"title":"Product 56 Grocery","type":"Grocery"},
                  {"id":57,"title":"Product 57 Home/Garden","type":"Home/Garden"},
                  {"id":58,"title":"Product 58 Home/Garden","type":"Home/Garden"},
                  {"id":59,"title":"Product 59 Home/Garden","type":"Home/Garden"},
                  {"id":60,"title":"Product 60 Toys","type":"Toys"},
                  {"id":61,"title":"Product 61 Outdoors","type":"Outdoors"},
                  {"id":62,"title":"Product 62 Beauty","type":"Beauty"},
                  {"id":63,"title":"Product 63 Outdoors","type":"Outdoors"},
                  {"id":64,"title":"Product 64 Beauty","type":"Beauty"},
                  {"id":65,"title":"Product 65 Electronics","type":"Electronics"},
                  {"id":66,"title":"Product 66 Books","type":"Books"},
                  {"id":67,"title":"Product 67 Clothing","type":"Clothing"},
                  {"id":68,"title":"Product 68 Home/Garden","type":"Home/Garden"},
                  {"id":69,"title":"Product 69 Home/Garden","type":"Home/Garden"},
                  {"id":70,"title":"Product 70 Movies","type":"Movies"},
                  {"id":71,"title":"Product 71 Grocery","type":"Grocery"},
                  {"id":72,"title":"Product 72 Automotive","type":"Automotive"},
                  {"id":73,"title":"Product 73 Automotive","type":"Automotive"},
                  {"id":74,"title":"Product 74 Clothing","type":"Clothing"},
                  {"id":75,"title":"Product 75 Movies","type":"Movies"},
                  {"id":76,"title":"Product 76 Electronics","type":"Electronics"},
                  {"id":77,"title":"Product 77 Electronics","type":"Electronics"},
                  {"id":78,"title":"Product 78 Movies","type":"Movies"},
                  {"id":79,"title":"Product 79 Books","type":"Books"},
                  {"id":80,"title":"Product 80 Clothing","type":"Clothing"},
                  {"id":81,"title":"Product 81 Toys","type":"Toys"},
                  {"id":82,"title":"Product 82 Automotive","type":"Automotive"},
                  {"id":83,"title":"Product 83 Outdoors","type":"Outdoors"},
                  {"id":84,"title":"Product 84 Automotive","type":"Automotive"},
                  {"id":85,"title":"Product 85 Books","type":"Books"},
                  {"id":86,"title":"Product 86 Toys","type":"Toys"},
                  {"id":87,"title":"Product 87 Outdoors","type":"Outdoors"},
                  {"id":88,"title":"Product 88 Home/Garden","type":"Home/Garden"},
                  {"id":89,"title":"Product 89 Books","type":"Books"},
                  {"id":90,"title":"Product 90 Outdoors","type":"Outdoors"},
                  {"id":91,"title":"Product 91 Home/Garden","type":"Home/Garden"},
                  {"id":92,"title":"Product 92 Home/Garden","type":"Home/Garden"},
                  {"id":93,"title":"Product 93 Automotive","type":"Automotive"},
                  {"id":94,"title":"Product 94 Outdoors","type":"Outdoors"},
                  {"id":95,"title":"Product 95 Toys","type":"Toys"},
                  {"id":96,"title":"Product 96 Beauty","type":"Beauty"},
                  {"id":97,"title":"Product 97 Electronics","type":"Electronics"},
                  {"id":98,"title":"Product 98 Grocery","type":"Grocery"},
                  {"id":99,"title":"Product 99 Grocery","type":"Grocery"},
                  {"id":100,"title":"Product 100 Books","type":"Books"},
                  {"id":101,"title":"Product 101 Clothing","type":"Clothing"},
                  {"id":102,"title":"Product 102 Outdoors","type":"Outdoors"},
                  {"id":103,"title":"Product 103 Grocery","type":"Grocery"},
                  {"id":104,"title":"Product 104 Outdoors","type":"Outdoors"},
                  {"id":105,"title":"Product 105 Toys","type":"Toys"},
                  {"id":106,"title":"Product 106 Electronics","type":"Electronics"},
                  {"id":107,"title":"Product 107 Toys","type":"Toys"},
                  {"id":108,"title":"Product 108 Beauty","type":"Beauty"},
                  {"id":109,"title":"Product 109 Electronics","type":"Electronics"},
                  {"id":110,"title":"Product 110 Beauty","type":"Beauty"},
                  {"id":111,"title":"Product 111 Automotive","type":"Automotive"},
                  {"id":112,"title":"Product 112 Toys","type":"Toys"},
                  {"id":113,"title":"Product 113 Grocery","type":"Grocery"},
                  {"id":114,"title":"Product 114 Toys","type":"Toys"},
                  {"id":115,"title":"Product 115 Outdoors","type":"Outdoors"},
                  {"id":116,"title":"Product 116 Electronics","type":"Electronics"},
                  {"id":117,"title":"Product 117 Outdoors","type":"Outdoors"},
                  {"id":118,"title":"Product 118 Home/Garden","type":"Home/Garden"},
                  {"id":119,"title":"Product 119 Clothing","type":"Clothing"},
                  {"id":120,"title":"Product 120 Books","type":"Books"},
                  {"id":121,"title":"Product 121 Books","type":"Books"},
                  {"id":122,"title":"Product 122 Automotive","type":"Automotive"},
                  {"id":123,"title":"Product 123 Toys","type":"Toys"},
                  {"id":124,"title":"Product 124 Movies","type":"Movies"},
                  {"id":125,"title":"Product 125 Toys","type":"Toys"},
                  {"id":126,"title":"Product 126 Toys","type":"Toys"},
                  {"id":127,"title":"Product 127 Clothing","type":"Clothing"},
                  {"id":128,"title":"Product 128 Books","type":"Books"},
                  {"id":129,"title":"Product 129 Electronics","type":"Electronics"},
                  {"id":130,"title":"Product 130 Automotive","type":"Automotive"},
                  {"id":131,"title":"Product 131 Electronics","type":"Electronics"},
                  {"id":132,"title":"Product 132 Grocery","type":"Grocery"},
                  {"id":133,"title":"Product 133 Grocery","type":"Grocery"},
                  {"id":134,"title":"Product 134 Electronics","type":"Electronics"},
                  {"id":135,"title":"Product 135 Electronics","type":"Electronics"},
                  {"id":136,"title":"Product 136 Electronics","type":"Electronics"},
                  {"id":137,"title":"Product 137 Automotive","type":"Automotive"},
                  {"id":138,"title":"Product 138 Electronics","type":"Electronics"},
                  {"id":139,"title":"Product 139 Electronics","type":"Electronics"},
                  {"id":140,"title":"Product 140 Grocery","type":"Grocery"},
                  {"id":141,"title":"Product 141 Electronics","type":"Electronics"},
                  {"id":142,"title":"Product 142 Books","type":"Books"},
                  {"id":143,"title":"Product 143 Clothing","type":"Clothing"},
                  {"id":144,"title":"Product 144 Toys","type":"Toys"},
                  {"id":145,"title":"Product 145 Grocery","type":"Grocery"},
                  {"id":146,"title":"Product 146 Toys","type":"Toys"},
                  {"id":147,"title":"Product 147 Outdoors","type":"Outdoors"},
                  {"id":148,"title":"Product 148 Movies","type":"Movies"},
                  {"id":149,"title":"Product 149 Clothing","type":"Clothing"},
                  {"id":150,"title":"Product 150 Toys","type":"Toys"},
                  {"id":151,"title":"Product 151 Home/Garden","type":"Home/Garden"},
                  {"id":152,"title":"Product 152 Books","type":"Books"},
                  {"id":153,"title":"Product 153 Outdoors","type":"Outdoors"},
                  {"id":154,"title":"Product 154 Movies","type":"Movies"},
                  {"id":155,"title":"Product 155 Grocery","type":"Grocery"},
                  {"id":156,"title":"Product 156 Beauty","type":"Beauty"},
                  {"id":157,"title":"Product 157 Home/Garden","type":"Home/Garden"},
                  {"id":158,"title":"Product 158 Beauty","type":"Beauty"},
                  {"id":159,"title":"Product 159 Books","type":"Books"},
                  {"id":160,"title":"Product 160 Automotive","type":"Automotive"},
                  {"id":161,"title":"Product 161 Home/Garden","type":"Home/Garden"},
                  {"id":162,"title":"Product 162 Movies","type":"Movies"},
                  {"id":163,"title":"Product 163 Movies","type":"Movies"},
                  {"id":164,"title":"Product 164 Outdoors","type":"Outdoors"},
                  {"id":165,"title":"Product 165 Grocery","type":"Grocery"},
                  {"id":166,"title":"Product 166 Books","type":"Books"},
                  {"id":167,"title":"Product 167 Grocery","type":"Grocery"},
                  {"id":168,"title":"Product 168 Electronics","type":"Electronics"},
                  {"id":169,"title":"Product 169 Automotive","type":"Automotive"},
                  {"id":170,"title":"Product 170 Outdoors","type":"Outdoors"},
                  {"id":171,"title":"Product 171 Grocery","type":"Grocery"},
                  {"id":172,"title":"Product 172 Toys","type":"Toys"},
                  {"id":173,"title":"Product 173 Toys","type":"Toys"},
                  {"id":174,"title":"Product 174 Electronics","type":"Electronics"},
                  {"id":175,"title":"Product 175 Beauty","type":"Beauty"},
                  {"id":176,"title":"Product 176 Beauty","type":"Beauty"},
                  {"id":177,"title":"Product 177 Electronics","type":"Electronics"},
                  {"id":178,"title":"Product 178 Books","type":"Books"},
                  {"id":179,"title":"Product 179 Clothing","type":"Clothing"},
                  {"id":180,"title":"Product 180 Outdoors","type":"Outdoors"},
                  {"id":181,"title":"Product 181 Electronics","type":"Electronics"},
                  {"id":182,"title":"Product 182 Outdoors","type":"Outdoors"},
                  {"id":183,"title":"Product 183 Grocery","type":"Grocery"},
                  {"id":184,"title":"Product 184 Clothing","type":"Clothing"},
                  {"id":185,"title":"Product 185 Clothing","type":"Clothing"},
                  {"id":186,"title":"Product 186 Grocery","type":"Grocery"},
                  {"id":187,"title":"Product 187 Beauty","type":"Beauty"},
                  {"id":188,"title":"Product 188 Electronics","type":"Electronics"},
                  {"id":189,"title":"Product 189 Automotive","type":"Automotive"},
                  {"id":190,"title":"Product 190 Electronics","type":"Electronics"},
                  {"id":191,"title":"Product 191 Movies","type":"Movies"},
                  {"id":192,"title":"Product 192 Movies","type":"Movies"},
                  {"id":193,"title":"Product 193 Clothing","type":"Clothing"},
                  {"id":194,"title":"Product 194 Toys","type":"Toys"},
                  {"id":195,"title":"Product 195 Automotive","type":"Automotive"},
                  {"id":196,"title":"Product 196 Automotive","type":"Automotive"},
                  {"id":197,"title":"Product 197 Outdoors","type":"Outdoors"},
                  {"id":198,"title":"Product 198 Books","type":"Books"},
                  {"id":199,"title":"Product 199 Outdoors","type":"Outdoors"},
                  {"id":200,"title":"Product 200 Toys","type":"Toys"},
                  {"id":201,"title":"Product 201 Clothing","type":"Clothing"},
                  {"id":202,"title":"Product 202 Toys","type":"Toys"},
                  {"id":203,"title":"Product 203 Outdoors","type":"Outdoors"},
                  {"id":204,"title":"Product 204 Clothing","type":"Clothing"},
                  {"id":205,"title":"Product 205 Beauty","type":"Beauty"},
                  {"id":206,"title":"Product 206 Electronics","type":"Electronics"},
                  {"id":207,"title":"Product 207 Home/Garden","type":"Home/Garden"},
                  {"id":208,"title":"Product 208 Books","type":"Books"},
                  {"id":209,"title":"Product 209 Toys","type":"Toys"},
                  {"id":210,"title":"Product 210 Home/Garden","type":"Home/Garden"},
                  {"id":211,"title":"Product 211 Toys","type":"Toys"},
                  {"id":212,"title":"Product 212 Grocery","type":"Grocery"},
                  {"id":213,"title":"Product 213 Automotive","type":"Automotive"},
                  {"id":214,"title":"Product 214 Toys","type":"Toys"},
                  {"id":215,"title":"Product 215 Beauty","type":"Beauty"},
                  {"id":216,"title":"Product 216 Books","type":"Books"},
                  {"id":217,"title":"Product 217 Movies","type":"Movies"},
                  {"id":218,"title":"Product 218 Toys","type":"Toys"},
                  {"id":219,"title":"Product 219 Outdoors","type":"Outdoors"},
                  {"id":220,"title":"Product 220 Books","type":"Books"},
                  {"id":221,"title":"Product 221 Home/Garden","type":"Home/Garden"},
                  {"id":222,"title":"Product 222 Home/Garden","type":"Home/Garden"},
                  {"id":223,"title":"Product 223 Toys","type":"Toys"},
                  {"id":224,"title":"Product 224 Electronics","type":"Electronics"},
                  {"id":225,"title":"Product 225 Electronics","type":"Electronics"},
                  {"id":226,"title":"Product 226 Automotive","type":"Automotive"},
                  {"id":227,"title":"Product 227 Books","type":"Books"},
                  {"id":228,"title":"Product 228 Outdoors","type":"Outdoors"},
                  {"id":229,"title":"Product 229 Books","type":"Books"},
                  {"id":230,"title":"Product 230 Clothing","type":"Clothing"},
                  {"id":231,"title":"Product 231 Home/Garden","type":"Home/Garden"},
                  {"id":232,"title":"Product 232 Electronics","type":"Electronics"},
                  {"id":233,"title":"Product 233 Beauty","type":"Beauty"},
                  {"id":234,"title":"Product 234 Automotive","type":"Automotive"},
                  {"id":235,"title":"Product 235 Clothing","type":"Clothing"},
                  {"id":236,"title":"Product 236 Clothing","type":"Clothing"},
                  {"id":237,"title":"Product 237 Outdoors","type":"Outdoors"},
                  {"id":238,"title":"Product 238 Home/Garden","type":"Home/Garden"},
                  {"id":239,"title":"Product 239 Beauty","type":"Beauty"},
                  {"id":240,"title":"Product 240 Beauty","type":"Beauty"},
                  {"id":241,"title":"Product 241 Books","type":"Books"},
                  {"id":242,"title":"Product 242 Home/Garden","type":"Home/Garden"},
                  {"id":243,"title":"Product 243 Home/Garden","type":"Home/Garden"},
                  {"id":244,"title":"Product 244 Automotive","type":"Automotive"},
                  {"id":245,"title":"Product 245 Movies","type":"Movies"},
                  {"id":246,"title":"Product 246 Beauty","type":"Beauty"},
                  {"id":247,"title":"Product 247 Movies","type":"Movies"},
                  {"id":248,"title":"Product 248 Home/Garden","type":"Home/Garden"},
                  {"id":249,"title":"Product 249 Automotive","type":"Automotive"},
                  {"id":250,"title":"Product 250 Electronics","type":"Electronics"},
                  {"id":251,"title":"Product 251 Automotive","type":"Automotive"},
                  {"id":252,"title":"Product 252 Automotive","type":"Automotive"},
                  {"id":253,"title":"Product 253 Beauty","type":"Beauty"},
                  {"id":254,"title":"Product 254 Home/Garden","type":"Home/Garden"},
                  {"id":255,"title":"Product 255 Clothing","type":"Clothing"},
                  {"id":256,"title":"Product 256 Electronics","type":"Electronics"},
                  {"id":257,"title":"Product 257 Movies","type":"Movies"},
                  {"id":258,"title":"Product 258 Toys","type":"Toys"},
                  {"id":259,"title":"Product 259 Grocery","type":"Grocery"},
                  {"id":260,"title":"Product 260 Movies","type":"Movies"},
                  {"id":261,"title":"Product 261 Grocery","type":"Grocery"},
                  {"id":262,"title":"Product 262 Outdoors","type":"Outdoors"},
                  {"id":263,"title":"Product 263 Movies","type":"Movies"},
                  {"id":264,"title":"Product 264 Toys","type":"Toys"},
                  {"id":265,"title":"Product 265 Grocery","type":"Grocery"},
                  {"id":266,"title":"Product 266 Beauty","type":"Beauty"},
                  {"id":267,"title":"Product 267 Grocery","type":"Grocery"},
                  {"id":268,"title":"Product 268 Toys","type":"Toys"},
                  {"id":269,"title":"Product 269 Automotive","type":"Automotive"},
                  {"id":270,"title":"Product 270 Electronics","type":"Electronics"},
                  {"id":271,"title":"Product 271 Grocery","type":"Grocery"},
                  {"id":272,"title":"Product 272 Beauty","type":"Beauty"},
                  {"id":273,"title":"Product 273 Electronics","type":"Electronics"},
                  {"id":274,"title":"Product 274 Toys","type":"Toys"},
                  {"id":275,"title":"Product 275 Clothing","type":"Clothing"},
                  {"id":276,"title":"Product 276 Movies","type":"Movies"},
                  {"id":277,"title":"Product 277 Toys","type":"Toys"},
                  {"id":278,"title":"Product 278 Beauty","type":"Beauty"},
                  {"id":279,"title":"Product 279 Grocery","type":"Grocery"},
                  {"id":280,"title":"Product 280 Automotive","type":"Automotive"},
                  {"id":281,"title":"Product 281 Clothing","type":"Clothing"},
                  {"id":282,"title":"Product 282 Books","type":"Books"},
                  {"id":283,"title":"Product 283 Books","type":"Books"},
                  {"id":284,"title":"Product 284 Automotive","type":"Automotive"},
                  {"id":285,"title":"Product 285 Clothing","type":"Clothing"},
                  {"id":286,"title":"Product 286 Beauty","type":"Beauty"},
                  {"id":287,"title":"Product 287 Clothing","type":"Clothing"},
                  {"id":288,"title":"Product 288 Movies","type":"Movies"},
                  {"id":289,"title":"Product 289 Books","type":"Books"},
                  {"id":290,"title":"Product 290 Electronics","type":"Electronics"},
                  {"id":291,"title":"Product 291 Movies","type":"Movies"},
                  {"id":292,"title":"Product 292 Outdoors","type":"Outdoors"},
                  {"id":293,"title":"Product 293 Electronics","type":"Electronics"},
                  {"id":294,"title":"Product 294 Electronics","type":"Electronics"},
                  {"id":295,"title":"Product 295 Home/Garden","type":"Home/Garden"},
                  {"id":296,"title":"Product 296 Clothing","type":"Clothing"},
                  {"id":297,"title":"Product 297 Movies","type":"Movies"},
                  {"id":298,"title":"Product 298 Home/Garden","type":"Home/Garden"},
                  {"id":299,"title":"Product 299 Electronics","type":"Electronics"}]


/*
_Id - Number - unique key/primary key that differentiates between reviews
itemId - Number - should match the product’s id - same as other component’s data / “foreign key”
Username - String
Rating - {type: Number, max: 5} ---------- let randomRating = Math.floor(Math.random()*6);
Comment - String 
Review title -String 
Review date - Date
Purchased?  - Boolean
*/
let commentReview = [["ridiculous. Would not recommend anybody buying this", "dreadful. Took me forever to setup.", "something I would never buy again.", "horrible. Do not buy!"],
                    ["horrible!", "awful!", "terrible. just put this in the trash.", "so bad!!!!"],
                    ["bad! Nobody should own this product.", "meh", "bleh. would never buy again", "not worth it. Don't buy this!"],
                    ["decent? not sure how I feel about this.", "mediocre", "so-so", "okay. nothing bad to say about this."],
                    ["flawless. works really well.", "really good. love this product", "awesome. would recommend buying", "worth it"],
                    ["tony. its greeeeeeaaaat!", "amazing. really saucy.", "perfect. this is sooooo lit!", "wonderful. best product ever!"]]
let reviewTitle = [["ridiculous", "dreadful", "something I would never buy again", "horrible"],
                   ["horrible", "awful", "terrible", "so bad"],
                   ["bad", "meh", "bleh", "not worth it"],
                   ["decent", "mediocre", "so-so", "okay"],
                   ["flawless", "really good", "awesome", "worth it"],
                   ["great", "amazing", "perfect", "wonderful"]]

let usernames = ["cfairest0", "cmadden1", "aoliver2", "jsnoding3", "stzuker4", "lwhiskin5", "cwarre6", "wdalby7", "abartoletti8", "sdallaway9", "ehurseya", "rdorgonb", "upardoec", "gmeardond", "bughettie", "ljensonf", "bcrundeng", "kstorkesh", "dhaglingtoni"]
let boolean = [true, false];


itemData.forEach(item => {
  let numberOfReviews = Math.ceil((Math.random() * 3) + 2);
  item.reviews = []
  for (let i = 0; i < numberOfReviews; i++){
    let oneReview = {}
    oneReview.username = usernames[Math.floor(Math.random() * usernames.length)];
    oneReview.rating = Math.floor(Math.random()*6);
    oneReview.comment = `This product is ${commentReview[oneReview.rating][Math.floor(Math.random() * 4)]}`;
    oneReview.reviewTitle = reviewTitle[oneReview.rating][Math.floor(Math.random() * 4)];
    oneReview.purchased = boolean[Math.floor(Math.random() * 2)];
    oneReview.date = `${Math.ceil(Math.random()*12)}/${Math.ceil(Math.random()*28)}/2017`
    item.reviews.push(oneReview);
  }
})

module.exports = itemData;
