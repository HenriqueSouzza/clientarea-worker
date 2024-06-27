---
subject: Suporte Técnico - Upgrade/Downgrade de Plano
showWhen:
  - method: isInGroup
    vars: [STREAMING_ALL]
tags:
  - whmcs_form_financeiro_upgrade-downgrade_plano
root:
  name: techsupport
  as: Upgrade/Downgrade de Plano
fields:
  - label: Novo Produto
    type: select
    options:
      - name: Rádio Online 1
        value: 1
        hideWhen:
          - method: isProduct
            vars: [RADIO_ONLINE_1]
      - name: Rádio Online 2
        value: 2
        hideWhen:
          - method: isProduct
            vars: [RADIO_ONLINE_2]
      - name: Rádio Online 3
        value: 3
        hideWhen:
          - method: isProduct
            vars: [RADIO_ONLINE_3]
      - name: Rádio Online 4
        value: 4
        hideWhen:
          - method: isProduct
            vars: [RADIO_ONLINE_4]
  - label: Permito o upgrade/downgrade do plano selecionado
    type: checkbox
---