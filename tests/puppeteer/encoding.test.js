describe('Encoding a string', () => {
	beforeAll(async() => {
		await page.goto('http://localhost:8080/')
	});

	it('should fill the encode_form with "some string" in the plain string input', async () => {
		await expect(page).toFillForm('form[id="encode_form"]', {
			plain_string_input: 'some string'
		});
	});

	it('should click the "Encode" button', async () => {
		await expect(page).toClick('#encode_button');
	});

	it('should display "\'some string\' plain string is encoded as \'ßøµ´ ßÎ®ˆ˜©\'" text on page', async () => {
		await page.screenshot({path: 'encoding.png'});
		await expect(page).toMatch("'some string' plain string is encoded as 'ßøµ´ ßÎ®ˆ˜©'");
	});
})