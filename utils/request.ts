export const filterList = (objA: Object) => {
	const keys = Object.keys(objA);

	for (let i = 0; i < keys.length; i++) {
		const keysValue = objA[keys[i]];
		console.log(keysValue, "====keysValue");
	}
};
