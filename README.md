# 원티드 프리온보딩 프론트엔드 - 선발 과제

## 프로젝트의 실행 방법

```
git clone 후

npm install
npm start
```

## 데모 영상

배포 링크 : https://wanted-internship-todo.vercel.app/

### 구현화면

**- 로그인**
**- 회원가입**
**- TODO CRUD**

## 구현 요구 사항 목록

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
