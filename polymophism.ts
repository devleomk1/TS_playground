// Polymophism
type SuperPrint = <T>(a: T[]) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, true, false, false])
const c = superPrint(["1", "a", "d"])
const d = superPrint([1, 2, true, "hello"])

// Polymophism
type UltraPrint = <T, M>(a: T[], b: M) => T

const ultraPrint: UltraPrint = (a) => a[0]

const e = ultraPrint([1, 2, 3, 4], "x")

// Conclusions

function megaPrint<T>(a: T[]){
	return a[0]
}

const f = megaPrint([1, 2, 3, 4])
const g = megaPrint([true, true, false, false])
const h = megaPrint(["1", "a", "d"])
const i = megaPrint([1, 2, true, "hello"])

type Player<E> = {
	name: string
	extraInfo:E
}

const nico: Player<{favFood:string}> = {
	name : "nico",
	extraInfo: {
		favFood :"Kimchi"
	}
}
