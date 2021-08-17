import "../src/Array.ts";

describe("Array", () => {
	const array1 = ["c", "d", 1, 3];

	describe("first", () => {
		describe("getter", () => {
			it("should return the first item in an array", () => {
				expect(array1.first).toBe("c");
			});
		});
		describe("setter", () => {
			const val = "a";
			it("should set the first item in an array to given value", () => {
				array1.first = val;
				expect(array1.first).toBe(val);
			});
		});
	});
	describe("last", () => {
		describe("getter", () => {
			it("should return the last item of array", () => {
				expect(array1.last).toBe(3);
			});
		});
		describe("setter", () => {
			const val = "a";
			it("should set the last item in an array to given value", () => {
				array1.last = val;
				expect(array1.last).toBe(val);
			});
		});
	});
	describe("append", () => {
		const arr = ["c", "d", 1, 3];
		const items = ["$", "a"];
		const output = ["c", "d", 1, 3, "$", "a"];
		it("should push the arguments to the array and return the array ", () => {
			const result = arr.append(...items);
			expect(result).toBe(arr);
			expect(result).toEqual(output);
		});
	});
	describe("removeLast", () => {
		const arr = ["c", "d", 1, 3];
		const output = ["c", "d", 1];
		it("should remove the last element from the array and return the array", () => {
			const result = arr.removeLast();
			expect(result).toBe(arr);
			expect(result).toEqual(output);
		});
	});
	describe("looselyEquals", () => {
		describe("when arrays include only primitives", () => {
			const arr = ["c", "d", 1, 3];
			describe("when loosely equals", () => {
				const comparison = ["c", "d", 1, 3];
				it("should return true", () => {
					expect(arr.looselyEquals(comparison)).toEqual(true);
					expect(arr).toEqual(comparison);
				});
			});
			describe("when not loosely equals", () => {
				const comparison = ["c", "d", 3, 1];
				it("should return false", () => {
					expect(arr.looselyEquals(comparison)).toEqual(false);
					expect(arr).not.toEqual(comparison);
				});
			});
		});
		describe("when arrays include non-primitive values", () => {
			const obj1 = { some: "obj" };
			const arr = ["c", "d", 1, obj1];
			describe("when all values and references are the same", () => {
				const comparison = ["c", "d", 1, obj1];
				it("should return true", () => {
					expect(arr.looselyEquals(comparison)).toEqual(true);
				});
			});
			describe("when some references are different", () => {
				const obj2 = { some: "obj" };
				const comparison = ["c", "d", 1, obj2];
				it("should return false", () => {
					expect(arr.looselyEquals(comparison)).toEqual(false);
				});
			});
		});
	});
	describe("pluck", () => {
		const keys: PluckObject[] = [
			{ i: "value1-1", j: 1 },
			{ i: "value1-2", j: 2 },
			{ i: "value1-3", j: 3 }
		];
		const arr: PluckObject[] = [
			{ key1: keys[0], key2: { i: "value2-1" } },
			{ key1: keys[1], key2: { i: "value2-2" } },
			{ key1: keys[2], key2: { i: "value2-3" } }
		];
		it("should create a new array from a deconstructed property", () => {
			const result = arr.pluck("key1");
			result.forEach((key, i: number) => expect(key).toBe(keys[i]));
		});
	});
	describe("asyncForEach", () => {
		const arr = [0, 1];
		let mockAsync: jest.Mock;
		let mockCb: jest.Mock;
		let mockResolve: jest.Mock;
		beforeEach(() => {
			mockResolve = jest.fn();
			mockCb = jest
				.fn()
				.mockResolvedValueOnce("some-value-1")
				.mockResolvedValueOnce("some-value-2");
			mockAsync = jest.fn().mockImplementation(async () => {
				mockResolve(await mockCb());
			});
		});

		it("should call async callbacks for each item in the array", async () => {
			await arr.asyncForEach(mockAsync);
			expect(mockAsync).toHaveBeenNthCalledWith(1, 0);
			expect(mockAsync).toHaveBeenNthCalledWith(2, 1);
			expect(mockResolve).toHaveBeenNthCalledWith(1, "some-value-1");
			expect(mockResolve).toHaveBeenNthCalledWith(2, "some-value-2");
			expect(mockCb).toBeCalledTimes(2);
		});
	});

	describe("range", () => {
		describe("when the stepsize is not given", () => {
			it("should create and return a new array using default stepSize", () => {
				[
					{
						array: [1, 10],
						result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
					},
					{
						array: [10, 5],
						result: [10, 9, 8, 7, 6, 5]
					},
					{
						array: [2, -3],
						result: [2, 1, 0, -1, -2, -3]
					},
					{
						array: [-2, 3],
						result: [-2, -1, 0, 1, 2, 3]
					},
					{
						array: [5, 5],
						result: []
					},
					{
						array: [0, 0],
						result: []
					}
				].forEach(({ array, result }) => {
					expect(array.range()).toEqual(result);
				});
			});
		});

		describe("when the stepsize is given", () => {
			it("should create and return a new array using stepSize", () => {
				[
					{
						array: [1, 10],
						result: [1, 6],
						stepSize: 5
					},
					{
						array: [2, 18],
						result: [2, 10, 18],
						stepSize: -8
					},
					{
						array: [10, 5],
						result: [10, 8, 6],
						stepSize: 2
					},
					{
						array: [1, 10],
						result: [1, 3, 5, 7, 9],
						stepSize: -2
					}
				].forEach(({ array, result, stepSize }) => {
					expect(array.range(stepSize)).toEqual(result);
				});
			});
		});

		describe("when the stepsize is 0", () => {
			it("should create and return a new array using default stepSize", () => {
				[
					{
						array: [10, 6],
						result: [10, 9, 8, 7, 6],
						stepSize: 0
					},
					{
						array: [1, 5],
						result: [1, 2, 3, 4, 5],
						stepSize: 0
					}
				].forEach(({ array, result, stepSize }) => {
					expect(array.range(stepSize)).toEqual(result);
				});
			});
		});
	});
});
