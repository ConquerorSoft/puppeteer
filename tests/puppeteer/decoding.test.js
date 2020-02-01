describe('Decoding a string', () => {
	beforeAll(async() => {
		await page.goto('http://localhost:8080/');
	});

	it('should fill the decode_form with "πåßßÏø®ı" in the encoded string input', async () => {
		await expect(page).toFillForm('form[id="decode_form"]', {
			encoded_string_input: 'πåßßÏø®ı'
		});
	});

	it('should click the "Decode" button', async () => {
		await expect(page).toClick('#decode_button');
	});

	it('should display "\'some string\' plain string is encoded as \'ßøµ´ ßÎ®ˆ˜©\'" text on page', async () => {
		await page.screenshot({path: 'decoding.png'});
		await expect(page).toMatch("'πåßßÏø®ı' encoded string is decoded as 'password'");
	});
})