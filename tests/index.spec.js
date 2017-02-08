describe('hellTriangle', function() {
	it('should return 26', function() {
		var input = [[6],[3, 5],[9, 7, 1],[4, 6, 8, 4]];

		expect(hellTriangle(input)).toBe(26);
	});

	it('should return 11', function() {
		var input = [[-6],[0, 5],[2, 4, 1],[0, 2, 8, 4]];

		expect(hellTriangle(input)).toBe(11);
	});

	it('should return 0', function() {
		var input = [[-6],[0]];

		expect(hellTriangle(input)).toBe(0);
	});
});