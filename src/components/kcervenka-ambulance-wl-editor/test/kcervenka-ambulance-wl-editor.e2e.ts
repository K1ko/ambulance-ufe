import { newE2EPage } from '@stencil/core/testing';

describe('kcervenka-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kcervenka-ambulance-wl-editor></kcervenka-ambulance-wl-editor>');

    const element = await page.find('kcervenka-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
