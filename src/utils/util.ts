/**
 * @param {Function} fn 节流函数
 * @param {number} delay 延时执行
 */
export const throttle = (fn: Function, delay: number = 500) => {
	let timer: NodeJS.Timeout | undefined = undefined;
	return (...arg: any) => {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			fn.call(undefined, ...arg);
		}, delay);
	};
};
