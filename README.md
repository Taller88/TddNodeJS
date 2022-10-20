# TddNodeJS
TDD(테스트주도개발)로 만드는 NODEJS API


## nodeJS 버전 
 v16.14.2

## Editor 
 Visual Studio Code

## nodeJS에 대해서..
 Javascript는 원래 브라우저에서 동작하는 언어였다.
 nodeJS가 나오면서 브라우저 밖에서 사용할 수 있게 됨
 Chrome에서는 자바스크립트를 동작시키는 V8엔진을 사용함 -> nodeJS에도 동일
 다른 Javascript엔진으로는 rhino엔진도 있음

 ### nodeJS특징 
 0. 클라이언트의 요청을 이벤트로 처리하는 이벤트 기반으로 처리 / 무거운 처리는 비동기로 처리 
 1. V8엔진을 사용
 2. 이벤트 기반의 비동기 I/O 프레임워크
  - 이벤트루프(싱글스레드로 구성) 
  - 비동기 I/O
   : 바로 응답할 수 없는 오래걸리는 이벤트 처리?를 위임해서 담당 ex) Disk 처리 
   : Worker 스레드에서 비동기처리후에 이벤트 큐에 결과를 전달

 3. CommonJS를 구현한 모듈 시스템
  - 브라우저에서는 window 컨텍스트를 사용하거나 requireJS같은 의존성 로더를 사용함 
  - 노드는 '파일형태'로 모듈을 관리할 수 있는 CommonJS로 구현 
  - 


