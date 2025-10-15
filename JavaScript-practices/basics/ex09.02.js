/**
 * URL 다루기
 *
 * JavaScript(Frontend)에서 URL을 다루어야 하는 예시
 *
 * 1. 리다이렉트
 * location.href = url
 *
 * 2. ajax 통신
 * $.ajax(url)
 * fetch(url)
 * axios(url)
 */

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

// 1. escape : URL 전체를 encoding, deprecated
var url1 = escape(url);
console.log(url1);

// 2. encodeURI : URL의 파라미터 부분만 encoding, URL 전체를 encoding 해야 하는 경우
var url2 = encodeURI(url);
console.log(url2);

// 3. encodeURIComponent
// formData로 "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com" URL 생성
var url = "http://www.mysite.com/user";
var formData = {
  name: "둘리",
  email: "dooly@gmail.com",
};

// queryString : name=둘리&email=dooly@gmail.com
// &, @ 등의 문자가 URL 해석 과정에서 잘못 인식될 수 있음
// 데이터를 안전하게 전송하기 위해 인코딩 과정 필요
var toQueryString = function (o) {
  var qs = [];
  for (var props in o) {
    qs.push(props + "=" + encodeURIComponent(o[props]));
  }

  return qs.join("&");
};

console.log(url + "?" + toQueryString(formData));
