import { newSpecPage } from '@stencil/core/testing';
import { I4My_account } from '../i4-my_account';

describe('i4-my_account', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [I4My_account],
      html: `<i4-my_account></i4-my_account>`,
    });
    expect(page.root).toEqualHtml(`
      <i4-my_account>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </i4-my_account>
    `);
  });
});
