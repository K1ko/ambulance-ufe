import { newE2EPage } from '@stencil/core/testing';

describe('kcervenka-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kcervenka-ambulance-wl-app></kcervenka-ambulance-wl-app>');

    const element = await page.find('kcervenka-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
