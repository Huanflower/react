module.exports = {
    getMovieListData () {

       return new Promise(function (resolve,reject) {
            const data = {
                "count": 10,
                "start": 6,
                "total": 78,
                "subjects": [
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "喜剧",
                      "爱情"
                    ],
                    "title": "我的女神女汉子",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1366135/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                          "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                          "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                        },
                        "name": "赵淼",
                        "id": "1366135"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1352018/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/1443175047.53.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/1443175047.53.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/1443175047.53.jpg"
                        },
                        "name": "袁冬冬",
                        "id": "1352018"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1318058/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/1356511983.19.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/1356511983.19.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/1356511983.19.jpg"
                        },
                        "name": "刘惠",
                        "id": "1318058"
                      }
                    ],
                    "collect_count": 3,
                    "original_title": "我的女神女汉子",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1366132/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                          "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                          "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                        },
                        "name": "林琛",
                        "id": "1366132"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1366133/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                          "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                          "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                        },
                        "name": "徐笑文",
                        "id": "1366133"
                      }
                    ],
                    "year": "2016",
                    "images": {
                      "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2391988410.jpg",
                      "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2391988410.jpg",
                      "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2391988410.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26899304/",
                    "id": "26899304"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "喜剧",
                      "犯罪",
                      "冒险"
                    ],
                    "title": "冒牌卧底",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1046960/",
                        "avatars": {
                          "small": "https://img5.doubanio.com/img/celebrity/small/4376.jpg",
                          "large": "https://img5.doubanio.com/img/celebrity/large/4376.jpg",
                          "medium": "https://img5.doubanio.com/img/celebrity/medium/4376.jpg"
                        },
                        "name": "潘粤明",
                        "id": "1046960"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1036695/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/1355297994.85.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/1355297994.85.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/1355297994.85.jpg"
                        },
                        "name": "高圣远",
                        "id": "1036695"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1327084/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/1363597076.12.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/1363597076.12.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/1363597076.12.jpg"
                        },
                        "name": "常远",
                        "id": "1327084"
                      }
                    ],
                    "collect_count": 21,
                    "original_title": "冒牌卧底",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1334343/",
                        "avatars": {
                          "small": "https://img5.doubanio.com/img/celebrity/small/1441507811.86.jpg",
                          "large": "https://img5.doubanio.com/img/celebrity/large/1441507811.86.jpg",
                          "medium": "https://img5.doubanio.com/img/celebrity/medium/1441507811.86.jpg"
                        },
                        "name": "唐旭",
                        "id": "1334343"
                      }
                    ],
                    "year": "2016",
                    "images": {
                      "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2402859930.jpg",
                      "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2402859930.jpg",
                      "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2402859930.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26743534/",
                    "id": "26743534"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "剧情",
                      "喜剧"
                    ],
                    "title": "恋",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1321645/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/51731.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/51731.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/51731.jpg"
                        },
                        "name": "来喜",
                        "id": "1321645"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1327104/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/1362032164.69.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/1362032164.69.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/1362032164.69.jpg"
                        },
                        "name": "佴文",
                        "id": "1327104"
                      },
                      {
                        "alt": null,
                        "avatars": null,
                        "name": "张雪",
                        "id": null
                      }
                    ],
                    "collect_count": 4,
                    "original_title": "恋",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": null,
                        "avatars": null,
                        "name": "胡扯",
                        "id": null
                      }
                    ],
                    "year": "2016",
                    "images": {
                      "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2403799030.jpg",
                      "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2403799030.jpg",
                      "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2403799030.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26931207/",
                    "id": "26931207"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "剧情",
                      "喜剧",
                      "悬疑"
                    ],
                    "title": "你好，疯子！",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1315477/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/1393913263.07.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/1393913263.07.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/1393913263.07.jpg"
                        },
                        "name": "万茜",
                        "id": "1315477"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1276085/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/18674.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/18674.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/18674.jpg"
                        },
                        "name": "周一围",
                        "id": "1276085"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1326390/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/wviB4QqqVOocel_avatar_uploaded1358737569.07.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/wviB4QqqVOocel_avatar_uploaded1358737569.07.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/wviB4QqqVOocel_avatar_uploaded1358737569.07.jpg"
                        },
                        "name": "王自健",
                        "id": "1326390"
                      }
                    ],
                    "collect_count": 477,
                    "original_title": "你好，疯子！",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1326752/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/1465540339.3.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/1465540339.3.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/1465540339.3.jpg"
                        },
                        "name": "饶晓志",
                        "id": "1326752"
                      }
                    ],
                    "year": "2016",
                    "images": {
                      "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2399996962.jpg",
                      "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2399996962.jpg",
                      "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2399996962.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26696879/",
                    "id": "26696879"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "悬疑"
                    ],
                    "title": "那年夏天你去了哪里",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1042341/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/23241.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/23241.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/23241.jpg"
                        },
                        "name": "宋佳",
                        "id": "1042341"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1050329/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/1408428669.04.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/1408428669.04.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/1408428669.04.jpg"
                        },
                        "name": "林家栋",
                        "id": "1050329"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1318260/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/1385270440.49.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/1385270440.49.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/1385270440.49.jpg"
                        },
                        "name": "颜卓灵",
                        "id": "1318260"
                      }
                    ],
                    "collect_count": 127,
                    "original_title": "那年夏天你去了哪里",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1332644/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/1479787650.12.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/1479787650.12.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/1479787650.12.jpg"
                        },
                        "name": "周隼",
                        "id": "1332644"
                      }
                    ],
                    "year": "2016",
                    "images": {
                      "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2402705389.jpg",
                      "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2402705389.jpg",
                      "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2402705389.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26876595/",
                    "id": "26876595"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "喜剧"
                    ],
                    "title": "情圣",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1274979/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/9489.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/9489.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/9489.jpg"
                        },
                        "name": "肖央",
                        "id": "1274979"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1274496/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/37681.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/37681.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/37681.jpg"
                        },
                        "name": "闫妮",
                        "id": "1274496"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1274081/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/6398.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/6398.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/6398.jpg"
                        },
                        "name": "小沈阳",
                        "id": "1274081"
                      }
                    ],
                    "collect_count": 94,
                    "original_title": "情圣",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1325035/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/1353401566.43.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/1353401566.43.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/1353401566.43.jpg"
                        },
                        "name": "宋晓飞 ",
                        "id": "1325035"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1364417/",
                        "avatars": {
                          "small": "https://img5.doubanio.com/img/celebrity/small/1480566101.36.jpg",
                          "large": "https://img5.doubanio.com/img/celebrity/large/1480566101.36.jpg",
                          "medium": "https://img5.doubanio.com/img/celebrity/medium/1480566101.36.jpg"
                        },
                        "name": "董旭",
                        "id": "1364417"
                      }
                    ],
                    "year": "2016",
                    "images": {
                      "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2406638957.jpg",
                      "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2406638957.jpg",
                      "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2406638957.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26879060/",
                    "id": "26879060"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "喜剧",
                      "爱情",
                      "家庭"
                    ],
                    "title": "爸爸的3次婚礼",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1001074/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/27347.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/27347.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/27347.jpg"
                        },
                        "name": "董洁",
                        "id": "1001074"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1335644/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/1385196496.79.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/1385196496.79.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/1385196496.79.jpg"
                        },
                        "name": "张亮",
                        "id": "1335644"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1318082/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/45115.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/45115.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/45115.jpg"
                        },
                        "name": "孙茜",
                        "id": "1318082"
                      }
                    ],
                    "collect_count": 31,
                    "original_title": "爸爸的3次婚礼",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1280599/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/17804.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/17804.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/17804.jpg"
                        },
                        "name": "马楚成",
                        "id": "1280599"
                      }
                    ],
                    "year": "2016",
                    "images": {
                      "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2403430820.jpg",
                      "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2403430820.jpg",
                      "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2403430820.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25884877/",
                    "id": "25884877"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 7.2,
                      "stars": "40",
                      "min": 0
                    },
                    "genres": [
                      "剧情",
                      "冒险"
                    ],
                    "title": "北极大冒险",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1233393/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/37010.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/37010.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/37010.jpg"
                        },
                        "name": "达科塔·高尤",
                        "id": "1233393"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1049703/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/13022.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/13022.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/13022.jpg"
                        },
                        "name": "高兰·维斯耶克",
                        "id": "1049703"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1044868/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/23281.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/23281.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/23281.jpg"
                        },
                        "name": "布丽姬·穆娜",
                        "id": "1044868"
                      }
                    ],
                    "collect_count": 101,
                    "original_title": "Midnight Sun",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1014211/",
                        "avatars": {
                          "small": "https://img5.doubanio.com/img/celebrity/small/1361266244.86.jpg",
                          "large": "https://img5.doubanio.com/img/celebrity/large/1361266244.86.jpg",
                          "medium": "https://img5.doubanio.com/img/celebrity/medium/1361266244.86.jpg"
                        },
                        "name": "罗杰·斯波蒂伍德",
                        "id": "1014211"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1195585/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                          "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                          "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                        },
                        "name": "白兰度·奎利西",
                        "id": "1195585"
                      }
                    ],
                    "year": "2014",
                    "images": {
                      "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2406911343.jpg",
                      "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2406911343.jpg",
                      "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2406911343.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/24752662/",
                    "id": "24752662"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "爱情",
                      "战争"
                    ],
                    "title": "难忘金银滩",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1315295/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/1368690901.94.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/1368690901.94.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/1368690901.94.jpg"
                        },
                        "name": "王一",
                        "id": "1315295"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1360227/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/u0cvWS1zyGUcel_avatar_uploaded1469103826.33.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/u0cvWS1zyGUcel_avatar_uploaded1469103826.33.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/u0cvWS1zyGUcel_avatar_uploaded1469103826.33.jpg"
                        },
                        "name": "翟佳",
                        "id": "1360227"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1364647/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/1478846357.88.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/1478846357.88.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/1478846357.88.jpg"
                        },
                        "name": "濡雪",
                        "id": "1364647"
                      }
                    ],
                    "collect_count": 12,
                    "original_title": "难忘金银滩",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1322850/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/img/celebrity/small/1479098028.67.jpg",
                          "large": "https://img1.doubanio.com/img/celebrity/large/1479098028.67.jpg",
                          "medium": "https://img1.doubanio.com/img/celebrity/medium/1479098028.67.jpg"
                        },
                        "name": "亮子",
                        "id": "1322850"
                      }
                    ],
                    "year": "2016",
                    "images": {
                      "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2401488210.jpg",
                      "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2401488210.jpg",
                      "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2401488210.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/24888081/",
                    "id": "24888081"
                  },
                  {
                    "rating": {
                      "max": 10,
                      "average": 0,
                      "stars": "00",
                      "min": 0
                    },
                    "genres": [
                      "动画",
                      "家庭"
                    ],
                    "title": "冰雪女皇之冬日魔咒",
                    "casts": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1013784/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/34284.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/34284.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/34284.jpg"
                        },
                        "name": "伊莎贝拉·弗尔曼",
                        "id": "1013784"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1036300/",
                        "avatars": {
                          "small": "https://img5.doubanio.com/img/celebrity/small/1393386887.76.jpg",
                          "large": "https://img5.doubanio.com/img/celebrity/large/1393386887.76.jpg",
                          "medium": "https://img5.doubanio.com/img/celebrity/medium/1393386887.76.jpg"
                        },
                        "name": "沙尔托·科普雷",
                        "id": "1036300"
                      },
                      {
                        "alt": "https://movie.douban.com/celebrity/1002683/",
                        "avatars": {
                          "small": "https://img3.doubanio.com/img/celebrity/small/53.jpg",
                          "large": "https://img3.doubanio.com/img/celebrity/large/53.jpg",
                          "medium": "https://img3.doubanio.com/img/celebrity/medium/53.jpg"
                        },
                        "name": "肖恩·宾",
                        "id": "1002683"
                      }
                    ],
                    "collect_count": 46,
                    "original_title": "Снежная королева 2: Перезаморозка",
                    "subtype": "movie",
                    "directors": [
                      {
                        "alt": "https://movie.douban.com/celebrity/1362482/",
                        "avatars": {
                          "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                          "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                          "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                        },
                        "name": "阿列克谢·特斯蒂斯林",
                        "id": "1362482"
                      }
                    ],
                    "year": "2014",
                    "images": {
                      "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2381915097.jpg",
                      "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2381915097.jpg",
                      "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2381915097.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26108086/",
                    "id": "26108086"
                  }
                ],
                "title": "即将上映的电影"
              }
      
            //   fetch(url) 
            //   .then(function (response) {
            //     resolve(response)
            //   })
            //   .catch(function (err) {
            //     reject(err)
            //   })


              resolve(data)
      
            })
    }
}   