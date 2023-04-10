describe("Check user event", () => {
    const desc = "<p>Check if button was clicked</p>";

    describe(desc, () => {
        it("Check if button was clicked", () => {
            spyOn(console, 'log');
            onClick({
                target: 'button'
            });
            expect(console.log).toHaveBeenCalled();
        });
    });
});

describe("Test for sum", function() { 
it("should return 135", function() {
expect(sum).toBe(135);
});
});

describe("Test for min", function() { 
it("should return 2", function() {
expect(min).toBe(2);
});
});

describe("Test for max", function() { 
it("should return 56", function() {
expect(max).toBe(56);
});
});