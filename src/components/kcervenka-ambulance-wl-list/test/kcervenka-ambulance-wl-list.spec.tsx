import { newSpecPage } from '@stencil/core/testing';
import { KcervenkaAmbulanceWlList } from '../kcervenka-ambulance-wl-list';

describe('kcervenka-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KcervenkaAmbulanceWlList],
      html: `<kcervenka-ambulance-wl-list></kcervenka-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <kcervenka-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kcervenka-ambulance-wl-list>
    `);
  });
});
