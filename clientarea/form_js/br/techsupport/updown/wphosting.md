---
subject: Suporte Técnico - Upgrade/Downgrade de Plano
showWhen:
  - method: isInGroup
    vars: [WPHOSTING_ALL]
tags:
  - whmcs_form_financeiro_upgrade-downgrade_plano
root:
  name: techsupport
  as: Upgrade/Downgrade de Plano
fields:
  - label: Novo Produto
    type: select
    options:
      - name: WordPress - Blog
        value: 1
        hideWhen:
          - method: isProduct
            vars: [WORDPRESS_BLOG]
      - name: WordPress - Startup
        value: 2
        hideWhen:
          - method: isProduct
            vars: [WORDPRESS_STARTUP]
      - name: WordPress - Pro
        value: 3
        hideWhen:
          - method: isProduct
            vars: [WORDPRESS_PRO]
      - name: WordPress - VIP
        value: 4
        hideWhen:
          - method: isProduct
            vars: [WORDPRESS_VIP]
  - label: Permito o upgrade/downgrade do plano selecionado
    type: checkbox
---