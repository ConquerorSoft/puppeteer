describe('Going to the homepage', () => {
	beforeAll(async() => {
		await page.goto('http://localhost:8080/')
	})

	it('should display "String transformation"', async () => {
            await page.screenshot({path: 'homepage.png'});
            await expect(page).toMatch("String transformation");
	});
})