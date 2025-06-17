// 2つの乱数の平均を返す（分布を中央に偏らせた乱数を返す）
export function centeredRandom() {
  return (Math.random() + Math.random()) / 2;
}

// コールバック関数を指定した遅延時間後に実行する
// 連続して呼び出された場合は最後の呼び出しのみが実行される
export function debounce(callback: () => void, delay: number) {
  let timeoutId: number | null = null;

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback();
      timeoutId = null;
    }, delay);
  };
}
