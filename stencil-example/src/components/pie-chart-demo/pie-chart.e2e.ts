import { newE2EPage } from '@stencil/core/testing';

describe('pie-chart-demo', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pie-chart-demo></pie-chart-demo>');
    const element = await page.find('pie-chart-demo');
    expect(element).toHaveClass('hydrated');
  });
});
