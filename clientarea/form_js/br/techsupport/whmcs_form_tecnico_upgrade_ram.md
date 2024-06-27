---
subject: Suporte Técnico - Upgrade de memória RAM
showWhen:
  - method: isInGroup
    vars: [DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_upgrade_ram
root:
  name: techsupport
  as: Upgrade de memória RAM
fields:
  - label: Selecione a quantidade de memória que deseja adicionar
    type: select
    options:
      - name: + 4 GB - R$200,00 /mês
        value: 4
        hideWhen:
          - method: notIsProduct
            vars:
              - DEDICADO_LINUX_BASICO
              - DEDICADO_WINDOWS_BASICO
              - DEDICADO_LINUX_STANDARD
              - DEDICADO_WINDOWS_STANDARD
      - name: + 8 GB - R$400,00/mês
        value: 8
        hideWhen:
          - method: notIsProduct
            vars:
              - DEDICADO_LINUX_ELITE
              - DEDICADO_WINDOWS_ELITE
              - DEDICADO_LINUX_PRO
              - DEDICADO_WINDOWS_PRO
      - name: + 12 GB - R$600,00/mês
        value: 12
        hideWhen:
          - method: notIsProduct
            vars:
              - DEDICADO_LINUX_BASICO
              - DEDICADO_WINDOWS_BASICO
              - DEDICADO_LINUX_STANDARD
              - DEDICADO_WINDOWS_STANDARD
      - name: + 16 GB - R$800,00/mês
        value: 16
        hideWhen:
          - method: notIsProduct
            vars:
              - DEDICADO_LINUX_ELITE
              - DEDICADO_WINDOWS_ELITE
              - DEDICADO_LINUX_PRO
              - DEDICADO_WINDOWS_PRO
      - name: + 20 GB - R$1000,00/mês
        value: 20
        hideWhen:
          - method: notIsProduct
            vars:
              - DEDICADO_LINUX_BASICO
              - DEDICADO_WINDOWS_BASICO
              - DEDICADO_LINUX_STANDARD
              - DEDICADO_WINDOWS_STANDARD
      - name: + 24 GB - R$1200,00/mês
        value: 24
        hideWhen:
          - method: notIsProduct
            vars:
              - DEDICADO_LINUX_ELITE
              - DEDICADO_WINDOWS_ELITE
      - name: + 28 GB - R$1400,00/mês
        value: 28
        hideWhen:
          - method: notIsProduct
            vars:
              - DEDICADO_LINUX_BASICO
              - DEDICADO_WINDOWS_BASICO
              - DEDICADO_LINUX_STANDARD
              - DEDICADO_WINDOWS_STANDARD
  - label: Horário para manutenção do servidor
    type: text
  - label: Sim, concordo com a cobrança do upgrade de memória RAM selecionado acima
    type: checkbox
---

Se você possui um servidor dedicado, pode solicitar o upgrade de memória RAM.

Para encaminhar a solicitação, é importante que saiba:

  - Cada GB adicional de memória RAM tem um custo mensal de R$ 50,00
  - A quantidade mínima de memória que pode ser adicionada é 4 GB
  - O upgrade de memória exigirá o desligamento do servidor por alguns minutos.

**Atenção: a capacidade máxima de memória de todos os planos dedicados é de 32 GB.**

Para solicitar o upgrade de memória RAM, por favor, preencha as informações abaixo.

Os campos marcados com * são de preenchimento obrigatório.