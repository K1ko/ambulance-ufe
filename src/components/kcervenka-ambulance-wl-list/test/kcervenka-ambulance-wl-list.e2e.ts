import { newE2EPage } from '@stencil/core/testing';

describe('kcervenka-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kcervenka-ambulance-wl-list></kcervenka-ambulance-wl-list>');

    const element = await page.find('kcervenka-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
