/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable func-names */
let app;

registerCreateForm(HgZendeskFormConfig);

function registerCreateForm(formConfig) {
  let formsLoaded = false;
  window.createForm = function (el, forms, products, clientData, enableZendeskV2) {
    (formsLoaded ? $.when() : JSON.parse(forms).reduce((prev, next, index) => prev.then(loadMarkdown.bind(
      loadMarkdown,
      next.form,
      index,
      next,
      enableZendeskV2,
    )), $.when()))
      .then(() => {
        formsLoaded = true;
        app = new Vue({
          el,
          data() {
            return {
              formConfig,
              lang,
              products: JSON.parse(products).map((product, index, next) => {
                let name = product.name;
                if (product.domain) name += ` (${product.domain})`;
                if (product.username) name += ` - Usuário: ${product.username}`;
                let tag;
                for (const t in HgProducts) {
                  if (t.indexOf('_GID') === -1 && t.indexOf('_ALL') === -1 && HgProducts[t] === product.pid) {
                    tag = t;
                    break;
                  }
                }
                return Object.assign({}, product, {
                  name,
                  originalName: product.name,
                  value: index + 1,
                  tag,
                });
              }),
              clientData: JSON.parse(clientData),
              enableZendeskV2,
            };
          },
        });
      });
  };
}
