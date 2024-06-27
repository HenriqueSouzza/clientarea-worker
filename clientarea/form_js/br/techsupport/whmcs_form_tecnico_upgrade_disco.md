---
subject: Suporte Técnico - Solicitação Disco Rígido Adicional
showWhen:
  - method: isInGroup
    vars: [DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_upgrade_disco
root:
  name: techsupport
  as: Disco Rígido Adicional
fields:
  - label: Selecione a quantidade de memória que deseja adicionar
    type: select
    options:
      - name: "Upgrade SAN Storage Datacenter PROVO :: 1 TB | R$330,00/mês"
        value: 1
      - name: "Upgrade SAN Storage Datacenter PROVO :: 2 TB | R$600,00/mês"
        value: 2
      - name: "Upgrade SAN Storage Datacenter PROVO :: 2.5 TB | R$750,00/mês"
        value: 3
      - name: "Upgrade SAN Storage Datacenter PROVO :: 3 TB | R$810,00/mês"
        value: 4
      - name: "Upgrade SAN Storage Datacenter PROVO :: 3.5 TB | R$945,00"
        value: 5
      - name: "Upgrade SAN Storage Datacenter PROVO :: 4 TB | R$960,00"
        value: 6
      - name: "Upgrade SAN Storage Datacenter PROVO :: 100 GB | R$45,00"
        value: 7
      - name: "Upgrade SAN Storage Datacenter PROVO :: 250 GB | R$105,00"
        value: 8
      - name: "Upgrade SAN Storage Datacenter PROVO :: 500 GB | R$195,00"
        value: 9
      - name: "Upgrade SAN Storage Datacenter PROVO :: 750 GB | R$270,00"
        value: 10
  - label: Forma de Pagamento
    type: select
    options:
      - name: Boleto
        value: 1
      - name: PayPal
        value: 2
      - name: Cartão de Crédito
        value: 3
  - label: Utilize o campo abaixo para inserir quaisquer informações que julgar importante para a transferência, como por exemplo, alguma observação específica
    type: textarea
    optional: true
---

Estamos oferecendo o sistema de NAS Storage como armazenamento adicional para quem necessita de mais espaço. O sistema funciona semelhante a um HD adicional, com sua própria partição.