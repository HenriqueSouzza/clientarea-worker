---
subject: Suporte Financeiro - Alterar Ciclo de Pagamento
showWhen:
  - method: isInGroup
    vars: [VPS_ALL,DEDICATED_ALL,STREAMING_ALL,WPHOSTING_ALL]
tags:
  - whmcs_form_financeiro_alterar_ciclo
root:
  name: salessupport
  as: Alterar Ciclo de Pagamento
fields:
  - label: Selecione o novo ciclo desejado
    type: select
    options:
      - name: Mensal
        value: Mensal
        hideWhen:
          - method: eq
            vars: [[form, product, billingcycle], Monthly]
      - name: Trimestral
        value: Trimestral
        hideWhen:
          - method: eq
            vars: [[form, product, billingcycle], Quarterly]
      - name: Anual
        value: Anual
        hideWhen:
          - method: eq
            vars: [[form, product, billingcycle], Annually]
          - method: isInGroup
            vars: [STREAMING_ALL]
  - label: Comentário Geral
    type: textarea
    rows: 5
    optional: true
  - label: Confirmo a alteração de ciclo de pagamento do serviço selecionado
    type: checkbox
---