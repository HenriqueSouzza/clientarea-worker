---
subject: Suporte Técnico - Upgrade/Downgrade de Plano
showWhen:
  - method: isInGroup
    vars: [RESELLER_ALL]
tags:
  - whmcs_form_financeiro_upgrade-downgrade_plano
root:
  name: techsupport
  as: Upgrade/Downgrade de Plano
fields:
  - label: Novo Produto
    type: select
    options:
      - name: Revenda 1
        value: 1
        hideWhen:
          - method: isProduct
            vars: [REVENDA_1]
      - name: Revenda 2
        value: 2
        hideWhen:
          - method: isProduct
            vars: [REVENDA_2]
      - name: Revenda 3
        value: 3
        hideWhen:
          - method: isProduct
            vars: [REVENDA_3]
      - name: Revenda 4
        value: 4
        hideWhen:
          - method: isProduct
            vars: [REVENDA_4]
      - name: Revenda 5
        value: 5
        hideWhen:
          - method: isProduct
            vars: [REVENDA_5]
  - label: Permito o upgrade/downgrade do plano selecionado
    type: checkbox
---