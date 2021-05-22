context("在庫のチェック", () => {
	beforeEach(() => {
		cy.visit(""); // {baseUrl}
	});

	it("指定のPCが購入可能な状態である", () => {
    // 要素が存在することを確認する
    cy.get('#buyNowButton').should('exist')
	});
});
