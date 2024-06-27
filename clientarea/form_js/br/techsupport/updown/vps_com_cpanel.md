---
subject: Suporte Técnico - Upgrade/Downgrade de Plano
showWhen:
  - method: isProduct
    vars: [VPS_1000_WHM,VPS_2000_WHM,VPS_4000_WHM,VPS_8000_WHM]
tags:
  - whmcs_form_financeiro_upgrade-downgrade_plano
root:
  name: techsupport
  as: Upgrade/Downgrade de Plano
fields:
  - label: Novo Produto
    type: select
    options:
      - name: VPS 1000 c/ cPanel
        value: 1
        hideWhen:
          - method: isProduct
            vars: [VPS_1000_WHM]
      - name: VPS 2000 c/ cPanel
        value: 2
        hideWhen:
          - method: isProduct
            vars: [VPS_2000_WHM]
      - name: VPS 4000 c/ cPanel
        value: 3
        hideWhen:
          - method: isProduct
            vars: [VPS_3000_WHM]
      - name: VPS 8000 c/ cPanel
        value: 4
        hideWhen:
          - method: isProduct
            vars: [VPS_4000_WHM]
  - label: Permito o upgrade/downgrade do plano selecionado
    type: checkbox
---