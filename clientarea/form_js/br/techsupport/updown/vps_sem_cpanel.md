---
subject: Suporte Técnico - Upgrade/Downgrade de Plano
showWhen:
  - method: isProduct
    vars: [VPS_500,VPS_1000_SEM_WHM,VPS_2000_SEM_WHM,VPS_4000_SEM_WHM,VPS_8000_SEM_WHM]
tags:
  - whmcs_form_financeiro_upgrade-downgrade_plano
root:
  name: techsupport
  as: Upgrade/Downgrade de Plano
fields:
  - label: Novo Produto
    type: select
    options:
      - name: VPS 500 s/ cPanel
        value: 1
        hideWhen:
          - method: isProduct
            vars: [VPS_500_SEM_WHM]
      - name: VPS 1000 s/ cPanel
        value: 2
        hideWhen:
          - method: isProduct
            vars: [VPS_1000_SEM_WHM]
      - name: VPS 2000 s/ cPanel
        value: 3
        hideWhen:
          - method: isProduct
            vars: [VPS_2000_SEM_WHM]
      - name: VPS 4000 s/ cPanel
        value: 4
        hideWhen:
          - method: isProduct
            vars: [VPS_3000_SEM_WHM]
      - name: VPS 8000 s/ cPanel
        value: 5
        hideWhen:
          - method: isProduct
            vars: [VPS_4000_SEM_WHM]
  - label: Permito o upgrade/downgrade do plano selecionado
    type: checkbox
---