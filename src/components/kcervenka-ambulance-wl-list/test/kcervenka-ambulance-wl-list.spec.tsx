import { newSpecPage } from '@stencil/core/testing';
import { KcervenkaAmbulanceWlList } from '../kcervenka-ambulance-wl-list';

describe('kcervenka-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KcervenkaAmbulanceWlList],
      html: `<kcervenka-ambulance-wl-list></kcervenka-ambulance-wl-list>`,
    });
      const wlList = page.rootInstance as KcervenkaAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
