# 2024 이노베이션 캠프 | React 주특기 과제 Level 5

> 📌 Goal : 나만의 React App 만들기 - CS공부 사이트

## 🌐 배포 : https://level5-cs-app.vercel.app/

## 과제 질문 & 답변

<details>
<summary>❓ Why: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.</summary>

### 1. **Custom Hook**을 구현하실 때 어떤 기능을 위해 사용하셨나요? 또한 Custom Hook을 사용함으로써 어떤 이점을 얻으셨나요?

- Zustand를 활용하여 `use~` **Custom Hook**으로 진행했습니다.
  - 📁[useAuth.ts](https://github.com/Dolphin-PC/level5-cs-app/blob/main/src/%40features/Auth/useAuth.ts)
    - 사용자 인증 상태에 필요한 `속성`을 저장하고, `만료여부` `프로필업데이트` 등 **공통기능**을 정의하여, 여러 컴포넌트에서 재사용할 수 있었습니다.
  - 📁[useCsCard.ts](https://github.com/Dolphin-PC/level5-cs-app/blob/main/src/%40features/CsCard/useCsCard.ts)
    - `CS Card정보` `편집여부` 를 저장하고, `비밀번호 검증` `편집모드전환` 기능을 정의했습니다.
  - 📁[useComment.ts](https://github.com/Dolphin-PC/level5-cs-app/blob/main/src/%40features/Comment/useComment.ts)
    - `CS Card의 Id정보` 를 저장하고, `비밀번호 검증` 기능을 정의했습니다.
- Custom Hook을 정의하여,
  - 여러 컴포넌트에서 동일한 상태값을 유지할 수 있었습니다.
  - 공통된 기능을 통해 함수의 재사용성을 높일 수 있었습니다.

### 2. API 서버의 URL을 `.env` 파일을 사용하여 숨기는 이유는 무엇일까요?

- .env을 사용하는 이유는 **URL**, **암호화 키** 등 민감정보를 Git저장소에 올리지 않기 위함입니다.
- .env를 사용함으로써,
  - 코드에 필요한 **민감정보**를 불러올 수 있습니다.
    - `process.env.*`
    - vite : `import.meta.env.*`
  - 또한, `.gitignore파일`에 .env파일을 추가함으로써 민감정보의 노출을 방지할 수 있습니다.

### 3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

- **Props Drilling이 2~3단계 이하** & **Lifting State Up** 이 없는 경우, `Props전달 방식`을 사용했습니다.
- 그 외 경우 `zustand`를 활용하여 **global state관리**로 상태 값을 공유했습니다.
</details>

## KPT

<details>
<summary>👍 KEEP</summary>

### 1. 제네릭 & 타입 제한

- 상황

  - **addNewCsCard**는 **제네릭 함수**로 `T타입`을 매개변수로 받을 수 있음
  - 매개변수를 그저 `T` 라고 선언할 경우, 함수 사용시 `어떠한 타입`도 들어갈 수 있는 문제 발생
  - 이는 **정적 타이핑**의 장점을 보지 못함

  ```tsx
  export const addNewCsCard = async <T>(data:T) {}

  // 사용
  addNewCsCard<들어가면_안되는_타입>
  ```

  - 이를 방지하기 위해, `T extends` 사용

1. 제네릭에서의 `extends` 는 **제한**의 의미
2. 제네릭 T는 무엇이든지 받을 수 있지만, 그 범위를 제한하려면 extends를 사용하면 됨

참고 : [https://inpa.tistory.com/entry/TS-📘-타입스크립트-Generic-타입-정복하기](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Generic-%ED%83%80%EC%9E%85-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0)

```tsx
// 함수 선언
export type NewAuthCardReq = Omit<ICsCard, "id"> & {
  userId: string;
};

export type NewCardReq = Omit<ICsCard, "id"> & {
  password: string;
};

export const addNewCsCard = async <T extends NewAuthCardReq | NewCardReq>(data: T): Promise<ICsCard> => {
  if (data.password) data.password = encrypt(data.password);

  const res = await api.post<ICsCard>(BASE_URL, data);
  return res.data;
};

// 함수 사용

// 인증사용자의 Card추가
const onAddNewCardAuth = async (data: AuthCardFormSchema): Promise<void> => {
  if (!userId) return;

  const res = await addNewCsCard<NewAuthCardReq>({ ...data, userId });
  onSuccess(res.id);
};

// 익명사용자의 Card추가
const onAddNewCard = async (data: CardFormSchema): Promise<void> => {
  const res = await addNewCsCard<NewCardReq>(data);
  onSuccess(res.id);
};
```

### 2. zustand - store&공통기능 관리

- **zustand**로 **global state와 공통기능**을 정의하여, 여러 컴포넌트에서 **재사용&일관된 상태관리**를 할 수 있었음

### 3. react-hook-form & yup

- react-hook-form을 사용할 때, 검증기능을 사용하기 위해서는 input에 직접 `validation`을 붙여줘야 했음

```tsx
<S.input.Input type="text" {...register("title", {required:true)} />
{errors.title && <S.span.ErrorSpan>제목을 입력해주세요.</S.span.ErrorSpan>
```

- 이럴 경우, validation의 재사용이 필요할 경우, 모든 input에 찾아가 수정해주어야 하는 문제 생김

### yup resolver활용

```tsx
// 사용할 schema 정의
import * as yup from "yup";

const title = yup.string().required("제목을 입력해주세요.");
const content = yup.string().required("내용을 입력해주세요.");

export const authCardFormSchema = yup.object().shape({
  title,
  content,
});
export type AuthCardFormSchema = yup.InferType<typeof authCardFormSchema>;

// form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCardFormSchema>({
    defaultValues: csCard,
    resolver: yupResolver(authCardFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">제목</label>
      <S.input.Input type="text" {...register("title")} />
      {errors.title && <S.span.ErrorSpan>{errors.title.message}</S.span.ErrorSpan>}
      <S.div.Gap $height={20} $width={0} />

      <label htmlFor="content">내용</label>
      <S.input.TextArea {...register("content")} />
      {errors.content && <S.span.ErrorSpan>{errors.content.message}</S.span.ErrorSpan>}
      <S.div.Gap $height={20} $width={0} />

      <S.button.Button $fullWidth type="submit">
        {isEditMode.current ? "작성" : "수정"}
      </S.button.Button>
    </form>
```

### 4. Suspense & useSuspenseQuery

- 보통 비동기 통신에 의한 렌더링은 **IF 문**을 통한 `명령형`으로 작성하곤 한다.
- 이를 `선언형`으로 변경하기 위해, React.Suspense와 useSuspenseQuery활용

  - 예전에는, useQuery의 옵션으로 **{suspense:true}**를 줘야 했지만, v5에서는 **useSuspenseQuery**로 따로 함수가 생겨남

  ```tsx
  // CardDetailPage.tsx
  <Suspense fallback={<LoadingFallbackUI />}>
    <h2>CS카드</h2>
    <CsCardPaper id={Number(id)} />
  </Suspense>;

  //CsCardPaper.tsx
  const CsCardPaper = ({ id }: { id: number }) => {
    const { data: card } = useSuspenseQuery({
      queryKey: ["csCards", id],
      queryFn: ({ queryKey }) => getCsCardById(queryKey[1] as number),
    });
    return (
      <S.div.Paper>
        <CsCard.Header />
        {isEditMode ? (
          <CsCard.EditForm />
        ) : (
          <Fragment>
            <h1>{card.title}</h1>
            <hr />
            <h3>{card.content}</h3>
          </Fragment>
        )}
      </S.div.Paper>
    );
  };
  ```

</details>

## 프로젝트 환경

#### ⚙️ 개발환경 : vite, react, typescript

#### 🔄 상태관리 : Tanstack Query, zustand

#### 🔮 스타일 : styled-components

#### ✅ 기타 : axios, react-hook-form, yup

#### 💿 인프라 : vercel, json-server(glitch)

## 프로젝트 실행

```
// 1. .env작성
VITE_PASSWORD=
VITE_AUTH_URL=
VITE_JSON_SERVER_URL=

// 2. yarn
yarn install
yarn dev
```
