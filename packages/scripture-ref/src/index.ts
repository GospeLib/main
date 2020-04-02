export default class ScriptureRef {
	static parse(ref: Ref) {
		if (typeof ref === 'string') {

		}
	}

	#ref: Ref;

	constructor(ref?: Ref) {
		if (typeof ref === 'string') {
			if (!ref.trim()) {
				throw new Error();
			}
		}
		this.#ref = ref;
	}

	toString() {

	}
}

export type Ref = string | [string, number, number?];
