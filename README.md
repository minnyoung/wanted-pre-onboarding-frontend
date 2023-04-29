# 원티드 프리온보딩 프론트엔드 - 선발 과제

<div align="center">

![image](https://user-images.githubusercontent.com/118191378/230625102-68fc56b3-1809-44bc-be9b-97dc223e6ee1.png)

원티드 프리온보딩 4월 프론트엔드 인턴십 사전과제입니다.

**프로젝트 기간**: 2023년 4월 3일 ~ 2023년 4월 7일<br />
(리팩토링은 인턴십 최종 발표 후 진행하였습니다.)

**배포 링크**: https://wanted-internship-todo.vercel.app/


<div> 
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=React"> 
  <img src="https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript"> 
  <img src="https://img.shields.io/badge/styled components-5.3.9-ff69b4?logo=styled-components"> 
</div>
</div>

<br /><br />
## 목차
- [프로젝트 실행 방법](#프로젝트-실행-방법)
- [과제 제출 이후 리팩토링](#과제-제출-이후-리팩토링)
- [데모 영상](#데모-영상)
    - [회원가입](#1-회원가입)
    - [로그인](#2-로그인)
    - [TODO CRUD](#3-todo-crud)
- [구현 요구 사항 목록](#구현-요구-사항-목록)

<br /><br />
## 프로젝트 실행 방법

```
$ npm install
$ npm start
```
<br />

## 과제 제출 이후 리팩토링
- todo api와 auth api 코드들을 각각의 파일로 분리했습니다.
- TodoList page 너비, todo 입력하는 input 너비를 수정했습니다.
- todo 항목의 내용이 일정길이 이상이면 todo 내용 뒤 ... 줄임표가 표현되도록 했고, todo 항목에 mouseEnter를 하게되면 todo 전체 내용이 보일 수 있도록 했습니다.
- 삭제 confirm 과정을 모달로 구현했습니다.
- 모든 aler는 토스트를 이용해 표현했고, contextAPI를 이용해 토스트의 visible 상태, 토스트 내 메세지, 토스트의 색상을 함께 관리했습니다.
- style 코드를 분리했습니다.

<br />

## 데모 영상

### 1. 회원가입

|![투두회원가입완료](https://user-images.githubusercontent.com/118191378/235286231-1e92e26f-5bd9-4fc2-ab7c-3545138029b8.gif)|![투두회원가입에러](https://user-images.githubusercontent.com/118191378/235286225-9daac0f2-1d57-408a-bae1-8e350db860db.gif)|![투두회원가입동일이메일있음](https://user-images.githubusercontent.com/118191378/235286324-726a047a-4bca-4c5c-9f56-6e84c9ca54d9.gif)|
|:--:|:--:|:--:|
|회원가입 성공|회원가입 실패<br />(서버에러 등)|회원가입 실패<br />(동일이메일 있을 경우)|

### 2. 로그인

|![투두로그인정상](https://user-images.githubusercontent.com/118191378/235286359-d62580ea-99d0-4c58-994d-de8a47efdba7.gif)|![투두로그인잘못시도](https://user-images.githubusercontent.com/118191378/235286355-a5fa0f63-3044-4978-9f1b-e77f83682bd2.gif)|![투두로그인비번틀림](https://user-images.githubusercontent.com/118191378/235286348-24c36b85-7c6a-4aaa-86ee-376112b92a0e.gif)|
|:--:|:--:|:--:|
|로그인 성공|로그인 실패<br />(서버에러 등)|로그인 실패<br />(이메일 혹은 비밀번호 오류)|

### 3. TODO CRUD

#### 3.1. TODO Create
|![투두투두생성](https://user-images.githubusercontent.com/118191378/235286510-5a02fb8a-552a-4da6-a46f-3d41dacf5430.gif)|![투두생성시 빈간입력했을때](https://user-images.githubusercontent.com/118191378/235286515-287b6310-436d-4a14-93eb-b5676ae10e3c.gif)
|:--:|:--:|
|todo 생성|todo 생성 실패<br />(빈칸으로 추가시)|

#### 3.2. TODO Update, Delete
|![투두투두수정](https://user-images.githubusercontent.com/118191378/235286520-14e740d6-b32a-4a6a-aac4-3d6d72f8cd7a.gif)|![투두투두삭제](https://user-images.githubusercontent.com/118191378/235286529-91f98e1a-4bcc-45ce-aff3-5009ff0fa31c.gif)
|:--:|:--:|
|todo 수정|todo 삭제|


## 구현 요구 사항 목록

<details>
<summary>구현 요구 사항 목록</summary>
<div markdown="1">

### 1. 로그인 / 회원가입
- [x] /signup 경로에 회원가입 기능을 개발해주세요
- [x] /signin 경로에 로그인 기능을 개발해주세요
- [x] 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요
  - [x] 이메일 input에 data-testid="email-input" 속성을 부여해주세요
  - [x] 패스워드 input에 data-testid="password-input" 속성을 부여해주세요
  - [x] 회원가입 button에 data-testid="signup-button" 속성을 부여해주세요
  - [x] 로그인 button에 data-testid="signin-button" 속성을 부여해주세요


**Assignment 1** | 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
- [x] 이메일 조건: @ 포함
- [x] 비밀번호 조건: 8자 이상
- [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요

**Assignment 2**
- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

**Assignment 3**
- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요
- [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

**Assignment 4** | 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
- [x] 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
- [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요


---

### 2. TODO LIST<br />

**Assignment 5**
- [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] TODO의 완료 여부는 <input type="checkbox" />를 통해 표현해주세요
- [x] TODO는 \<li> tag를 이용해 감싸주세요

**Assignment 6** | 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- [x] TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여해주세요
- [x] TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여해주세요
- [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- [x] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

**Assignment 7**
- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
  
**Assignment 8**
- [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- [x] 수정 버튼에는 data-testid="modify-button" 속성을 부여해주세요
- [x] 삭제 버튼에는 data-testid="delete-button" 속성을 부여해주세요

**Assignment 9** | 투두 리스트의 삭제 기능을 구현해주세요
- [x] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

**Assignment 10** | 투두 리스트의 수정 기능을 구현해주세요
- [x] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
- [x] 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
- [x] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
- [x] 수정 input창에는 data-testid="modify-input" 속성을 부여해주세요
- [x] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
- [x] 제출버튼에는 data-testid="submit-button" 속성을 부여해주세요
- [x] 취소버튼에는 data-testid="cancel-button" 속성을 부여해주세요
- [x] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
- [x] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요


</div>
</details>

