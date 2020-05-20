// 上限と下限内にする
export const clamp = (x: number, min: number, max: number) => {
  if (x < min) return min;
  else if (x > max) return max;
  else return x;
};
