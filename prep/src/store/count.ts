import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// combine: 타입 추론 가능
// ⚠️ Store의 타입을 첫 번째 인수로 전달한 state의 값만을 이용해서 추론
// immer: 불변성 직접 관리
// subscribeWithSelector: 스토어의 특정한 값이 변할 때마다 원하는 코드 실행
// persist: 앱 재실행이나 새로고침 시 저장된 값을 불러와 상태를 복원
// devtools: store 디버깅 가능
// ❗미들웨어 적용 순서가 중요! 아래의 순서가 바람직
export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0, val: 0 }, (set, get) => ({
            increase: () => {
              set((state) => {
                state.count += 1;
              });
            },
            decrease: () => {
              set((state) => {
                state.count -= 1;
              });
            },
          })),
        ),
      ),
      {
        name: "countStore", // localStorage에 countStore 이름으로 저장
        partialize: (store) => ({
          count: store.count,
          val: store.val,
        }),
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: "countStore",
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    console.log(count, prevCount);

    const store = useCountStore.getState();
    useCountStore.setState((store) => ({ val: store.val + 5 }));
  },
);

// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useVal = () => {
  const val = useCountStore((store) => store.val);
  return val;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.decrease);
  return decrease;
};
