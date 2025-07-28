import { expect, Locator, Page } from '@playwright/test';

class ShopPage {
    private readonly find: Locator;
    private readonly product: Locator;
    private readonly buy: Locator;




    constructor(page: Page) {
        this.find = page.getByRole('combobox', { name: 'Ingresa lo que quieras' });
        this.product = page.getByRole('link', { name: 'MacBook Air 13.6 M2 256 GB' });
        this.buy = page.getByRole('button', { name: 'Comprar ahora' })
    }

    async findMacbookM4() {
        await this.find.fill('macbook');
        await this.find.press('Enter');
        await this.product.waitFor({ state: 'visible' });
        await this.product.click();
        await this.buy.waitFor({ state: 'visible' });
        await this.buy.click();
    }
}

export default ShopPage;