/**
 * action 类型
 */

export const INCRESE = 'INCRESE'
export const DECRESE = 'DECRESE'

/**
 * action 创建函数 --> 返回 action 的函数
 */

export function increseCount() {
  return { type: INCRESE }
}

export function decreseCount() {
  return { type: DECRESE }
}
